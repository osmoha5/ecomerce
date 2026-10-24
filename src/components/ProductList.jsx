import { useState, useEffect } from 'react'
import axios from 'axios'
import Products from './products'
import SearchBar from './SearchBar'
import {ClipLoader} from 'react-spinners';
function ProductList() {

    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSearch = (event) => {
        setSearch(event.target.value);
    }

    const handleGetData = async () => {
        try {
            setLoading(true);
            const response = await axios.get('https://fakestoreapi.com/products')
            console.log('product data:', response.data);
            setData(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    }
    useEffect(() => {
               handleGetData();
    }, [])

    return (
        <div>
            < SearchBar searchitems={handleSearch} />
            <h1 className="text-2xl font-bold mb-4 text-center">Products</h1>
            {
                loading == true ? <ClipLoader loading={loading} /> :
           
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-5 px-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
                {
                    data.filter((product) => {

                        return search.toLowerCase() === '' ? product : 
                        product.title.toLowerCase().includes(search.toLowerCase())
                    }).map((items) => {
                        return <Products key={items.id} item={items} />
                    })
                }
            </div>
             }
        </div>
    )
}
export default ProductList