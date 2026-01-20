'use server'

import { z } from 'zod'
import prisma from './prisma'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

const userValidator = z.object({
    nama_user: z.string().min(6),
    telp: z.string().min(11)
})

const productValidator = z.object({
  nama_produk: z.string().min(3),
  gambar_produk: z.string().url(),
  qty: z.coerce.number().int().min(1),
  kategori: z.string().min(3)
})

export const addUsers = async (prevState: any, formData: FormData) => {
    const validatedData = userValidator.safeParse(Object.fromEntries(formData.entries()))
    if (!validatedData.success) {
        return {
            Error: validatedData.error.flatten().fieldErrors
        }
    }

    try {
        await prisma.tb_user.create({
            data: {
                nama_user: validatedData.data.nama_user,
                telp: validatedData.data.telp
            }
        })
    } catch (error) {
        return { message: 'Failed inserting data' }
    }

    revalidatePath('/')
    redirect('/')
}

export const updateUser = async (id: number, prevState: any, formData: FormData) => {

    const validatedData = userValidator.safeParse(Object.fromEntries(formData.entries()))
    if (!validatedData.success) {
        return {
            Error: validatedData.error.flatten().fieldErrors
        }
    }

    try {
        await prisma.tb_user.update({
            data: {
                nama_user: validatedData.data.nama_user,
                telp: validatedData.data.telp
            },
            where: {
                id_user: id
            }
        })
    } catch (error) {
        return { message: 'Failed updating data' }
    }

    revalidatePath('/')
    redirect('/')

}

export const deleteUser = async (id: number) => {
    try {
        await prisma.tb_user.delete({
            where: {
                id_user: id
            }
        })
    } catch (error) {
        return { message: 'Failed deleting data' }
    }

    revalidatePath('/')
}

export const addProducts = async(prevState: any, formData: FormData) => {
    const validatedData = productValidator.safeParse(Object.fromEntries(formData.entries()))
    if (!validatedData.success) {
        return {
            Error: validatedData.error.flatten().fieldErrors
        }
    }

    try {
        await prisma.tb_produk.create({
            data: {
                nama_produk: validatedData.data.nama_produk,
                gambar_produk: validatedData.data.gambar_produk,
                qty: validatedData.data.qty,
                kategori: validatedData.data.kategori
            }
        })
    } catch (error) {
        return { message: 'Failed inserting data' }
    }

    revalidatePath('/product')
    redirect('/product')
}