import prisma from "./prisma";

export const getUsers = async() => {
    try {
        const data = await prisma.tb_user.findMany()
        return data
    } catch (error) {
        throw new Error('Error fetching data')
    }
}

export const getUsersById = async(id: number) => {
    try {
        const data = await prisma.tb_user.findUnique({
            where: { id_user: id }
        })
        return data
    } catch (error) {
        throw new Error('Error fetching data')
    }
}