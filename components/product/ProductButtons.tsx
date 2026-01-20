import Link from "next/link"
import { Plus } from "lucide-react"


export const ProductCreateButton = () => {
    return (
        <Link href='/product/create' className="flex gap-1 bg-indigo-600 px-3 py-2 rounded-sm text-white">
            <Plus className="w-5" />
            Create
        </Link>
    )
}

export const ProductsSubmitButton = () => {
    return (
        <button className="x-4 py-2 rounded-md text-white bg-indigo-600 cursor-pointer">
            <span>Submit</span>
        </button>
    )
}