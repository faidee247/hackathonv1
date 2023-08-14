'use client'

import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

import { add_quantity, reduce_quantity } from "@/redux/features/quantitySlice";
import { useDispatch } from "react-redux"
import { AppDispatch, useAppSelector } from "@/redux/store";
import ReduxProvider from "@/redux/provider";

export default function CounterWrapper(){
    return(
        <ReduxProvider>
        <Counter />
        </ReduxProvider>
    )
}

function Counter(){
    
    const [counter,setCounter] = useState(1);
    
    const dispatch = useDispatch<AppDispatch>()

    const qty = useAppSelector((state) => state.quantitySlice.value)

    function addCounter(){
        setCounter(counter + 1)
        dispatch(add_quantity(1))

        // let qty = useAppSelector((state) => state.quantitySlice.value)

        // console.log('New Quantity' + qty)
    }

    function removeCounter(){
        if (counter > 1){
            setCounter(counter - 1)
            dispatch(reduce_quantity(1))
            // let qty = useAppSelector((state) => state.quantitySlice.value)

            // console.log('New Quantity' + qty)
        }
    }

    return(
        
        <div className="product-size flex mt-6 items-center">
                            <span className="label text-lg font-semibold">Quantity</span>
                            <Button variant={"ghost"} className="ml-5 bg-[#f1f1f1] rounded-full w-10 h-10 p-2" id="quantity-minus" onClick={() => {removeCounter()}}>
                            <MinusIcon className="quantity-minus" />
                            </Button>
                            <span className="quantity text-lg lg:text-2xl font-normal lg:font-bold ml-5" id="quantity">{qty}</span>
                            <Button variant={"ghost"} className="ml-5 bg-[#f1f1f1] rounded-full w-10 h-10 p-2" id="quantity-plus" onClick={() => {addCounter()}}>
                            <PlusIcon className="quantity-plus" />
                            </Button>
                            {/* <Link href="#" onClick={() => addQuantity()}>Add</Link> */}
                            
                        </div>

    )
}