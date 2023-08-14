import {configureStore} from "@reduxjs/toolkit"
import cartSlice from "./features/cartSlice"
import priceSlice from "./features/priceSlice"
import quantitySlice from "./features/quantitySlice"
import { TypedUseSelectorHook, useSelector } from "react-redux"

export const store = configureStore({
    reducer: {
        cartSlice,
        priceSlice,
        quantitySlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector