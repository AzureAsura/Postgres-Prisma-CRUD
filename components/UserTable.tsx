import React from 'react'
import { getUsers } from '@/lib/data'
import { dateFormat } from '@/lib/utils'
import EditButton from './buttons/EditButton'
import DeleteButton from './buttons/DeleteButton'

const UserTable = async ({
    query,
    currentPage
}: {
    query: string,
    currentPage: number
}) => {

    const data = await getUsers(query, currentPage)

    return (
        <table className='w-full text-sm text-left '>
            <thead className='uppercase'>
                <tr className='bg-gray-200 font-light'>
                    <th className='py-3 px-6'>No</th>
                    <th className='py-3 px-6'>Nama</th>
                    <th className='py-3 px-6'>Telp</th>
                    <th className='py-3 px-6'>Created At</th>
                    <th className='py-3 px-6 text-center'>Aksi</th>
                </tr>
            </thead>
            <tbody>
                {data.map((data, index) => (
                    <tr key={data.id_user} className='border-b'>
                        <th className='py-3 px-6'>{index + 1}</th>
                        <th className='py-3 px-6'>{data.nama_user}</th>
                        <th className='py-3 px-6'>{data.telp}</th>
                        <th className='py-3 px-6'>{dateFormat(data.createdAt.toString())}</th>
                        <th className='py-3 px-6 space-x-1 flex justify-center'>
                            <EditButton id={data.id_user} />
                            <DeleteButton id={data.id_user} />
                        </th>
                    </tr>
                ))}
            </tbody>

        </table>

    )
}

export default UserTable