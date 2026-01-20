'use client'
import { Search } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'


const ProductSearchBar = () => {

    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    const handleChange = (term: string) => {

        const params = new URLSearchParams(searchParams)
        if (term) {
            params.set('query', term)
        } else {
            params.delete('query')
        }

        replace(`${pathname}?${params}`)

    }


    return (
        <div className='relative flex flex-1'>
            <input
                type="text"
                placeholder='Search...'
                onChange={(e) => handleChange(e.target.value)}
                defaultValue={searchParams.get('query')?.toString()}
                className='w-full  py-2 pl-10 text-sm outline-1 rounded-sm' />
            <Search className='absolute left-3 top-2 h-5 w-5  text-gray-500' />

        </div>
    )
}

export default ProductSearchBar