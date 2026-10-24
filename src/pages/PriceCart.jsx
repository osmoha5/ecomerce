import { useSelector } from "react-redux"
function PriceCart(){
    const qty = useSelector((state)=>state.cart.totalQuantity)
    const price = useSelector((state)=>state.cart.totalPrice)
    return <div className="w-full sm:w-75 mt-100 leftnpm run devnpm run dev-16">
     <div className="flex justify-between w-full border-b-2 border-gray-200 my-4">
        <h1 className="font-bold">total quantity</h1>
        <h1 className="font-bold">{qty}</h1>
     </div>
     <div className="flex justify-between w-full border-b-2 border-gray-200 my-4">
        <h1 className="font-bold">total price</h1>
        <h1 className="font-bold">${Number(price).toFixed(2)}</h1>
     </div>
     <button className="bg-black px-20 py-1 rounded-sm text-white">Buy Now</button>
    </div>
}
export default PriceCart