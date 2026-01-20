import AddProductForm from '@/components/product/AddProductForm'
import React from 'react'

const page = () => {
    return (
        <div className='max-w-xl mx-auto mt-5 space-y-4 bg-gray-100 p-8 rounded-md'>
            <h1 className='text-center font-bold uppercase text-xl'>Add new product</h1>

            <AddProductForm />

        </div>
    )
}

export default page