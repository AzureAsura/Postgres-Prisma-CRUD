import prisma from "./prisma";

export const getUsers = async (query: string, currentPage: number) => {
    try {
        const data = await prisma.tb_user.findMany({
            where: {
                OR: [
                    {
                        nama_user: {
                            contains: query,
                            mode: 'insensitive'
                        }
                    },
                    {
                        telp: {
                            contains: query,
                            mode: 'insensitive'
                        }
                    }
                ]
            }
        })
        return data
    } catch (error) {
        throw new Error('Error fetching data')
    }
}

export const getUsersById = async (id: number) => {
    try {
        const data = await prisma.tb_user.findUnique({
            where: { id_user: id }
        })
        return data
    } catch (error) {
        throw new Error('Error fetching data')
    }
}

export const getProducts = async (query: string) => {
    try {
        const data = await prisma.tb_produk.findMany({
            where: {
                OR: [
                    {
                        nama_produk: {
                            contains: query,
                            mode: 'insensitive'
                        }
                    },
                    {
                        kategori: {
                            contains: query,
                            mode: 'insensitive'
                        }
                    },
                ]
            }
        })
        return data
    } catch (error) {
        throw new Error('Error fetching data')

    }
}