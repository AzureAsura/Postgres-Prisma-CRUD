'use client'

import React, { useActionState } from 'react'
import { addProducts } from '@/lib/action'


const AddProductForm = () => {

    const [state, FormAction] = useActionState(addProducts, null)

    return (
        <div className=''>
            <form className='space-y-4' action={FormAction}>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="" className='text-black'>Nama Produk</label>
                    <input type="text" name="nama_produk" id="nama_produk" placeholder='Nama Produk...' className='outline rounded-sm pl-1.5 h-8 ' />
                    <div id='nama_user-error' aria-live='polite' aria-atomic='true'>
                        <p className='mt-2 text-sm text-red-500'>{state?.Error?.nama_produk}</p>
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="" className='text-black'>Gambar Produk</label>
                    <input type="text" name="gambar_produk" id="gambar_produk" placeholder='Link gambar produk...' className='outline rounded-sm pl-1.5 h-8' />
                    <div id='nama_user-error' aria-live='polite' aria-atomic='true'>
                        <p className='mt-2 text-sm text-red-500'>{state?.Error?.gambar_produk}</p>
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="" className='text-black'>Stok</label>
                    <input type="number" name="qty" id="qty" placeholder='Stok produk...' className='outline rounded-sm pl-1.5 h-8 ' />
                    <div id='nama_user-error' aria-live='polite' aria-atomic='true'>
                        <p className='mt-2 text-sm text-red-500'>{state?.Error?.qty}</p>
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="" className='text-black'>Kategori</label>
                    <input type="text" name="kategori" id="kategori" placeholder='Kategori produk...' className='outline rounded-sm pl-1.5 h-8' />
                    <div id='nama_user-error' aria-live='polite' aria-atomic='true'>
                        <p className='mt-2 text-sm text-red-500'>{state?.Error?.kategori}</p>
                    </div>
                </div>

                <button type='submit'>submit</button>
            </form>
        </div>

    )
}

export default AddProductForm