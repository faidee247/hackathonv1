'use client'

import { Button } from "@/components/ui/button";
import ReduxProvider from "@/redux/provider";
import { useAppSelector, AppDispatch } from "@/redux/store";
import { Product } from "@/types/Product";
import { ShoppingCartIcon } from "lucide-react";
import { FC, useState } from "react";
import toast from "react-hot-toast";

import { add_quantity, reduce_quantity, setCurrentQuantity } from "@/redux/features/cartSlice";
import { add_quantity as add_price, reduce_quantity as reduce_price, setCurrentPrice } from "@/redux/features/priceSlice";
import { reset_quantity,setCurrentQty } from "@/redux/features/quantitySlice";
import { useDispatch } from "react-redux"

import { useSelector } from 'react-redux'

export default function ProductOrderWrapper({item}:{item:any}){
    return(
        <ReduxProvider>
        <ProductOrder item={item}/>
        </ReduxProvider>
    )
}

function ProductOrder({item}:{item:any}){

    const qty = useAppSelector((state) => state.quantitySlice.value)

    const [active,setActive] = useState(false);

    const dispatch = useDispatch<AppDispatch>()
    
    const handleAddtoCart = async() => {
        setActive(true)
        // event.currentTarget.disabled = true;
        console.log('Current Quantity : ' + qty);

        // console.log('Calling Function')
        // console.log(JSON.stringify({
        //             product_id: item._id
        //         }))

        // dispatch(add_quantity(qty))
        // console.log('Quantity : ' + qty)
        //  dispatch(add_price(qty * item.price))
        //  console.log('Price : ' + (qty * item.price))

         dispatch(setCurrentQty(qty))

        const res = await fetch("../api/cart/",{
            method:"POST",
            body: JSON.stringify({
                product_id: item._id,
                quantity:qty,
                unit_price: item.price,
                total_price: item.price
            })
        })

        const result = await res.json()

        //  const data = await result.data[0];

         

        // event.currentTarget.disabled = false;

        console.log(result.totaldata[0].quantity)
        console.log(result.totaldata[0].price)

        dispatch(setCurrentQuantity(result.totaldata[0].quantity))
        dispatch(setCurrentPrice(result.totaldata[0].price))
        // console.log(data)
        setActive(false)
        toast.success(`${qty} item has been added to cart`)
    }

    return(
        <div className="product-order mt-10 flex flex-row">
            <Button disabled={(active)?true:false} id="addtocart" className="bg-[#212121] py-6 px-6 rounded-none grow" onClick={() => {handleAddtoCart()}}>
                <ShoppingCartIcon />
                <span className="text-sm lg:text-lg ml-2">Add to Cart</span>
            </Button>
            <div className="price ml-5 flex items-center justify-center">
                <span className="font-bold text-2xl lg:text-3xl tracking-[0.1em] text-[#212121]">${item.price}.00</span>
            </div>
        </div>
    )
}