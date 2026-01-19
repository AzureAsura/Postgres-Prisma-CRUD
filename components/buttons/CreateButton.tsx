import { Plus } from "lucide-react"
import Link from "next/link"

const CreateButton = () => {
  return (
    <Link href='/create' className="flex gap-1 bg-indigo-600 px-3 py-2 rounded-sm text-white">
        <Plus className="w-5"/>
        Create
    </Link>
  )
}

export default CreateButton