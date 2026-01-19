import React from 'react'
import { useFormStatus } from 'react-dom'
import clsx from 'clsx'

const UserSubmitButton = () => {

    const { pending } = useFormStatus()

    return (
        <button type='submit' className={clsx(' px-4 py-2 rounded-md text-white', pending ? 'cursor-progress bg-gray-600':'cursor-pointer bg-indigo-600')} disabled={pending}>
            <span>{pending ? 'Menyimpan...' : 'Simpan'}</span>
        </button>
    )
}

export default UserSubmitButton