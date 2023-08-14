import {createSlice, PayloadAction} from "@reduxjs/toolkit"


const initialState = {
    value:1
}

export const quantity_slice = createSlice({
    name:"quantity",
    initialState,
    reducers:{
        add_quantity(state, action: PayloadAction<number | any>){
            state.value += action.payload
        },
        reduce_quantity(state:any, action:PayloadAction<number | any>){
            state.value -= action.payload
        },
        reset_quantity(state){
            state.value = 1
        },
        setCurrentQty(state, action:PayloadAction<number | any>){
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

export const{add_quantity,reduce_quantity,reset_quantity,setCurrentQty} = quantity_slice.actions
// export const{add_price,reduce_price} = price_slice.actions

export default quantity_slice.reducer
