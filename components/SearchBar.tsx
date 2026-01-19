import React from 'react'
import { Search } from 'lucide-react'

const SearchBar = () => {
    return (
        <div className='relative flex flex-1'>
            <input type="text" className='w-full  py-2 pl-10 text-sm outline-1 rounded-sm'/>
            <Search className='absolute left-3 top-2 h-5 w-5  text-gray-500'/>

        </div>
    )
}

export default SearchBar