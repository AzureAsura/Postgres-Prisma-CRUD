'use client'

import { deleteUser } from "@/lib/action"
import { Trash } from "lucide-react"
import Link from "next/link"
import { useActionState } from "react"

const DeleteButton = ({ id }: { id: number }) => {

    const deleteButton = deleteUser.bind(null, id)

    const [ state, FormAction ] = useActionState(deleteButton, null)

  return (
    <form action={FormAction}>
        <button type="submit" className="inline-flex items-center gap-1 bg-red-500 hover:bg-red-600 px-3 py-2 rounded-sm text-white duration-200">
            <Trash className="w-4"/>
        </button>
    </form>
  )
}

export default DeleteButton