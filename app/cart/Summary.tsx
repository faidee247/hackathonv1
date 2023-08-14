'use client'

import { Button } from "@/components/ui/button";
import ReduxProvider from "@/redux/provider";
import { AppDispatch, useAppSelector } from "@/redux/store";

import { setCurrentPrice } from "@/redux/features/priceSlice";
import { setCurrentQuantity } from "@/redux/features/cartSlice";
import { useDispatch } from "react-redux";

// import { setCurrentPrice } from "@/redux/features/priceSlice";

type Summary = {
    quantity: number,
    amount: number
}

export default function OrderSummaryWrapper({summary}:{summary:Summary}){
    return(
        <ReduxProvider>
            <OrderSummary summary={summary} />
        </ReduxProvider>
    )
}

function OrderSummary({summary}:{summary:Summary}){

    const dispatch = useDispatch<AppDispatch>()

    dispatch(setCurrentQuantity(summary.quantity))
    dispatch(setCurrentPrice(summary.amount))


    const qty = useAppSelector((state) => state.cartSlice.value)
    const price = useAppSelector((state) => state.priceSlice.value)

    console.log('Total Quantity ' + qty)
    console.log('Total Quantity ' + price)
    return(
        <div className="order-summary flex flex-col gap-y-4">

        <div className="summary-header">
            <span className="font-bold text-3xl text-[#212121]">Order Summary</span>
        </div>
        <div className="summary-body flex flex-row justify-between">
            <span className="text-lg font-normal text-[#212121]">Quantity</span>
            <span className="text-lg font-normal text-[#212121]">{qty} Products</span>
        </div>
        <div className="summary-body flex flex-row justify-between">
            <span className="text-lg font-normal text-[#212121]">Total</span>
            <span className="text-lg font-normal text-[#212121]">$ {price}</span>
        </div>
        <div className="summary-button">
            <Button className="text-lg rounded-none p-6 bg-[#212121]">Proceed to Checkout</Button>
        </div>
        </div>
    )
}