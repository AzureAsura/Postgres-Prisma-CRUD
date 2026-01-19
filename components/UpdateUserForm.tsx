'use client'

import { updateUser } from '@/lib/action'
import { useActionState } from 'react'
import UserSubmitButton from './buttons/UserSubmitButton'
import type { tb_user } from '@/app/generated/prisma/client'

const UpdateUserForm = ({ data }: { data: tb_user }) => {

    const updateUserById = updateUser.bind(null, data.id_user)

    const [state, FormAction] = useActionState(updateUserById, null)

    return (
        <div className=''>
            <form action={FormAction} className='space-y-4'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="" className='text-black'>Nama</label>
                    <input type="text" name="nama_user" defaultValue={data.nama_user} id="nama_user" placeholder='Nama...' className='outline rounded-sm pl-1 h-8 ' />
                    <div id='nama_user-error' aria-live='polite' aria-atomic='true'>
                        <p className='mt-2 text-sm text-red-500'>{state?.Error?.nama_user}</p>
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="" className='text-black'>No Telp</label>
                    <input type="text" name="telp" id="telp" defaultValue={data.telp} placeholder='No Telp...' className='outline rounded-sm pl-1 h-8' />
                    <div id='telp-error' aria-live='polite' aria-atomic='true'>
                        <p className='mt-2 text-sm text-red-500'>{state?.Error?.telp}</p>
                    </div>
                </div>
                <div id='message-error' aria-live='polite' aria-atomic='true'>
                    <p className='mt-2 text-sm text-red-500'>{state?.message}</p>
                </div>
                <div className='flex justify-end'>
                    <UserSubmitButton />
                </div>
            </form>
        </div>
    )
}

export default UpdateUserForm