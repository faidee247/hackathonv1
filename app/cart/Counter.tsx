'use client'

import { Button } from "@/components/ui/button";
import ReduxProvider from "@/redux/provider";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

export default function CounterWrapper({ item }: { item: any }) {
    return (
        <ReduxProvider>
            <Counter item={item} />
        </ReduxProvider>
    )
}

type CounterItem = {
    quantity: number,
    price: number
}

function Counter({ item }: { item: CounterItem }) {

    let qty = parseInt(item.quantity as unknown as string);

    const [counter,setCounter] = useState(qty);
    
    function addCounter(){
        let new_counter:number = counter
        setCounter(new_counter + 1)
        console.log('Counter ' + counter)
        // dispatch(add_quantity(1))

        // let qty = useAppSelector((state) => state.quantitySlice.value)

        // console.log('New Quantity' + qty)
    }

    function removeCounter(){
        if (counter > 1){
            setCounter(counter - 1)
            console.log('Counter ' + counter)
            // dispatch(reduce_quantity(1))
            // let qty = useAppSelector((state) => state.quantitySlice.value)

            // console.log('New Quantity' + qty)
        }
    }

    // removeCounter()
    // addCounter()
    
    return (
        <div className="price-counter flex flex-row justify-between items-center">
            <div className="item-price">
                <span className="font-bold text-lg text-[#212121]">$ {item.price}</span>
            </div>
            <div className="item-counter flex items-center">
                <Button variant={"ghost"} className="ml-5 bg-[#f1f1f1] rounded-full w-10 h-10 p-2" id="quantity-minus" onClick={() => { removeCounter() }}>
                    <MinusIcon className="quantity-minus" />
                </Button>
                <span className="quantity text-lg lg:text-2xl font-normal lg:font-bold ml-5" id="quantity">{counter}</span>
                <Button variant={"ghost"} className="ml-5 bg-[#f1f1f1] rounded-full w-10 h-10 p-2" id="quantity-plus" onClick={() => { addCounter() }}>
                    <PlusIcon className="quantity-plus" />
                </Button>
            </div>
        </div>
    )
}