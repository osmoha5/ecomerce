import {createSlice} from '@reduxjs/toolkit'

const cartSlice =  createSlice({
    name: 'cart',
    initialState:{
        items:[],
        totalPrice: 0,
        totalQuantity:0
    },
    reducers:{
        addTocart:(state,action)=>{
            const existItem = state.items.find((item)=>item.id === action.payload.id)
            if(existItem){
                existItem.quantity += 1
            }else{
                
            
            state.items.push({...action.payload, quantity: 1})
            }
        },
        removeItemFromCart:(state, action)=>{
            state.items = state.items.filter((items)=>items.id !=action.payload.id)
        },
        increment: (state,action)=>{
            const existItem = state.items.find((item)=>item.id === action.payload.id)
             if(existItem){
                existItem.quantity += 1
            }

        },
         decrement: (state,action)=>{
            const existItem = state.items.find((item)=>item.id === action.payload.id)
             if(existItem && existItem.quantity > 1){
                existItem.quantity -= 1
            }

        },
        calculateTotalQuantity: (state)=>{
            let qty = 0
            state.items.forEach((item)=>[
                qty += item.quantity
            ])
            state.totalQuantity = qty
        },
        calculateTotalPrice: (state)=>{
            let price = 0
            state.items.forEach((item)=>{
                price += item.price * item.quantity
            })
            state.totalPrice = price
        }
   
        
    }
})

export const {addTocart, removeItemFromCart,increment,decrement,calculateTotalQuantity,calculateTotalPrice}= cartSlice.actions
export default cartSlice.reducer