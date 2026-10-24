import { useDispatch, useSelector } from "react-redux"
import { MdDelete } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import toast, { Toaster } from "react-hot-toast";

import { removeItemFromCart, increment, decrement, calculateTotalQuantity, calculateTotalPrice } from "../redux/reduce/Cart";
import PriceCart from "./PriceCart";

function Cart() {
    const dispatch = useDispatch()
    const handleRemoveItem = (data) => {
        dispatch(removeItemFromCart(data))
        dispatch(calculateTotalQuantity())
        dispatch(calculateTotalPrice())
        toast.success("item has been removed successfully", {
            position: "top-right"
        })
    }

    const handleIncrement = (data) => {
        dispatch(increment(data))
        dispatch(calculateTotalQuantity())
        dispatch(calculateTotalPrice())
    }
    const handleDecrement = (data) => {
        dispatch(decrement(data))
        dispatch(calculateTotalQuantity())
        dispatch(calculateTotalPrice())
    }
    const allItems = useSelector((state) => state.cart.items)
    return <div>
        <Toaster />

        {
            allItems.length > 0 ?

                <div className="mx-auto flex max-w-6xl flex-col justify-center gap-8 p-5 sm:flex-row sm:items-start">

                    <div className="mb-20">
                        {
                            allItems.map((items) => (
                                <div key={items.id} className="border-2 items-center flex mt-5 gap-10 border-gray-400 px-4 py-5 w-[350px] sm:w-[500px] h-[160px] rounded mt-20">
                                    <img className="w-[150px] h-[130px] rounded" src={items.image} alt={items.title} />
                                    <div className="pt-5">
                                        <p>{items.title}</p>
                                        <p className="font-bold">${Number(items.price).toFixed(2)}</p>
                                        <div className="flex gap-4 items-center">
                                            <CiCirclePlus onClick={() => handleIncrement(items)} className="text-2xl" />
                                            <p className="font-semibold">{items.quantity}</p>
                                            <CiCircleMinus onClick={() => handleDecrement(items)} className="text-2xl" />
                                        </div>
                                        <MdDelete onClick={() => handleRemoveItem(items)} className="text-4xl text-red-500 right-20" />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <PriceCart />
                </div>
                :
                <p className="font-bold text-center mt-20">the Cart is Empty please Select item</p>
        }

    </div>

}

export default Cart;