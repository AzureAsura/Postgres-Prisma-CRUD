import { Pencil } from "lucide-react"
import Link from "next/link"

const EditButton = ({ id }: { id: number }) => {
  return (
    <Link href={`/edit/${id}`} className="inline-flex items-center gap-1 bg-black hover:bg-black/80 px-3 py-2 rounded-sm text-white duration-200">
        <Pencil className="w-4"/>
    </Link>
  )
}

export default EditButton