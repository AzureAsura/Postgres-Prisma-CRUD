import CreateButton from '@/components/buttons/CreateButton'
import { ProductCreateButton } from '@/components/product/ProductButtons'
import ProductSearchBar from '@/components/product/ProductSearchBar'
import ProductTable from '@/components/product/ProductTable'
import React from 'react'

const page = async ({
    searchParams
}: {
    searchParams: {
        query: string
    }
}) => {

    const params = await searchParams

    const query = params?.query || ''


    return (
        <div className='max-w-5xl mx-auto mt-4'>
            <div className='flex items-center justify-between gap-2 mb-5'>
                <ProductSearchBar/>
                <ProductCreateButton/>
            </div>

            <ProductTable query={query}/>

        </div>
    )
}

export default page