import CreateButton from '@/components/buttons/CreateButton'
import SearchBar from '@/components/SearchBar'
import UserTable from '@/components/UserTable'
import React from 'react'

const page = () => {
  return (
    <div className='max-w-3xl mx-auto mt-4'>
      <div className='flex items-center justify-between gap-2 mb-5'>
        <SearchBar/>
        <CreateButton/>

      </div>


      <UserTable/>
    
    </div>
  )
}

export default page