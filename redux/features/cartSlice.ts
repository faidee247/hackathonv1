import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { create } from "domain"

// type InitialState = {
//     value: CartState
// }

// type CartState = {
//     total_quantity: 0,
//     total_price: 0
// }

const initialState = {
    value:0
}

export const cart_slice = createSlice({
    name:"quantity",
    initialState,
    reducers:{
        add_quantity(state, action: PayloadAction<number | any>){
            state.value += action.payload
        },
        reduce_quantity(state:any, action:PayloadAction<number | any>){
            state.value -= action.payload
        },
        setCurrentQuantity(state, action:PayloadAction<number | any>){
            state.value = action.payload
        }
    }
})

// export const price_slice = createSlice({
//     name:"price",
//     initialState,
//     reducers:{
//         add_price(state, action: PayloadAction<number | any>){
//             state.value += action.payload
//         },
//         reduce_price(state:any, action:PayloadAction<number | any>){
//             state.value -= action.payload
//         }
//     }
// })

export const{add_quantity,reduce_quantity,setCurrentQuantity} = cart_slice.actions
// export const{add_price,reduce_price} = price_slice.actions

export default cart_slice.reducer
