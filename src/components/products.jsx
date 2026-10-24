import { useDispatch } from "react-redux"
import { addTocart,calculateTotalQuantity,calculateTotalPrice } from "../redux/reduce/Cart"
import toast,{Toaster} from "react-hot-toast"
const Products = ({ item }) => {
    
     const dispatch = useDispatch()
     const handleAddToCart = ()=>{
        dispatch(addTocart(item))
        dispatch(calculateTotalQuantity())
        dispatch(calculateTotalPrice())
        toast.success('item has been added successfully',{
            position:"top-right"
        })
     }
const price = Number(item?.price ?? 0)
    return (
        <div className="w-full min-w-0 rounded-2xl bg-gray-200 p-3 sm:p-4">
            <img className="mb-3 aspect-square w-full rounded-2xl bg-white object-contain p-3" src={item?.image} alt={item?.title || 'Product image'} />
            <h4 className="line-clamp-2 min-h-14 text-base font-semibold sm:text-lg">{item?.title || 'Product title'}</h4>
            <div className="flex justify-between items-center mt-1">
                <h1 className="text-lg font-bold sm:text-xl">${price.toFixed(2)}</h1>
                <button onClick={handleAddToCart} className="cursor-pointer rounded-sm bg-green-500 px-4 py-1 text-sm text-white sm:px-6">add to cart</button>
            </div>
            <Toaster/>
        </div>
    )
}

export default Products