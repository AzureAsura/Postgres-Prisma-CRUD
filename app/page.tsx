import CreateButton from '@/components/buttons/CreateButton'
import SearchBar from '@/components/SearchBar'
import UserTable from '@/components/UserTable'
import Link from 'next/link'
import React from 'react'

const page = async ({ searchParams }: { searchParams?: { query?: string, page?: string } }) => {

  const params = await searchParams

  const query = params?.query || "";
  const currentPage = Number(params?.page) || 1

  return (
    <div className='max-w-3xl mx-auto mt-4'>
      <div className='flex items-center justify-between gap-2 mb-5'>
        <SearchBar />
        <CreateButton />
      </div>

      <UserTable query={query} currentPage={currentPage} />

      <div className='flex items-center justify-end mt-4'>
        <Link href='/product' className='px-4 py-2 bg bg-indigo-600 hover:bg-indigo-700 rounded-sm text-white'>
          <p>Product</p>
        </Link>
      </div>
    </div>
  )
}

export default page