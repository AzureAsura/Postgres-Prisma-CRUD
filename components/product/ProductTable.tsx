import { getProducts } from '@/lib/data'
import { dateFormat } from '@/lib/utils'

const ProductTable = async ({
    query
}:{
    query: string
}) => {

    const productData = await getProducts(query)

    return (
        <table className='w-full text-sm text-left '>
            <thead className='uppercase'>
                <tr className='bg-gray-200 font-light'>
                    <th className='py-3 px-6'>No</th>
                    <th className='py-3 px-6'>Nama Product</th>
                    <th className='py-3 px-6'>Gambar</th>
                    <th className='py-3 px-6'>Kategori</th>
                    <th className='py-3 px-6'>Stok</th>
                    <th className='py-3 px-6'>Created At</th>
                    {/* <th className='py-3 px-6 text-center'>Aksi</th> */}
                </tr>
            </thead>
            <tbody>
                {productData.map((data, index) => (
                    <tr className='border-b' key={data.id_produk}>
                        <th className='py-3 px-6'>{index + 1}</th>
                        <th className='py-3 px-6'>{data.nama_produk}</th>
                        <th className='py-3 px-6'>
                            <img src={data.gambar_produk} alt={data.nama_produk} className='w-16 h-16'/>
                        </th>
                        <th className='py-3 px-6'>{data.kategori}</th>
                        <th className='py-3 px-6'>{data.qty}</th>
                        <th className='py-3 px-6'>{dateFormat(data.createdAt.toString())}</th>
                    </tr>
                ))}


            </tbody>

        </table>
    )
}

export default ProductTable