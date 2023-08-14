'use client'

import { Product } from "@/types/Product";
import CounterWrapper from "./Counter";
import { Trash2Icon } from "lucide-react";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cookies } from "next/dist/client/components/headers";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { setCurrentQuantity } from "@/redux/features/cartSlice";
import { setCurrentPrice } from "@/redux/features/priceSlice";
import ReduxProvider from "@/redux/provider";
import toast from "react-hot-toast";

export default function CartListWrapper({items,products}:{items:any,products:any}){
    return(
        <ReduxProvider>
            <CartList items={items} products={products} />
        </ReduxProvider>
    )
}

async function CartList({items,products}:{items:any,products:any}){
    
    let userid = cookies().get("userid")?.value;

    // const dispatch = useDispatch<AppDispatch>()

    function getProduct(product_id:string):Product | any{
        const res = products.find((p:any) => p._id == product_id)
        return res
    }

    async function  getTotal(){
        const res = await fetch(`http://localhost:3000/api/summary?user_id=${userid}`)
        const res1 = await res.json();

        return res1;
    }

    async function deleteProduct(product_id:string){
        
        try{
        const res = await fetch(`../api/cart?user_id=${userid}&product_id${product_id}`,
        {
            method:"DELETE"
        })
        const response = await res.json()
        console.log(response)

        toast.success(`Item has been removed from cart`)

        }catch(error){
            return JSON.stringify({"message":"Unable to Delete"})
        }
    }
    
    return(
        <div className="cart-list flex flex-col w-[70%] gap-y-4 pr-20">
                        
                        {items.map((item:any) => (
                            <div key={item.id} className="cart-item flex flex-row grow">
                                <div className="cart-image">
                                    <Image className="rounded-lg" src={getProduct(item.product_id).image} width={200} height={200} alt={getProduct(item.product_id).name} />
                                </div>
                                <div className="cart-info flex flex-col ml-10 grow">
                                    <div className="cart-info-header flex flex-row">
                                        <div className="cart-heading-text">
                                        <h3 className="font-light text-[#212121] text-3xl">{getProduct(item.product_id).name}</h3>
                                        </div>
                                        <div className="delicon m-[0_0_0_auto]">
                                        <Button variant={"ghost"} onClick={() => deleteProduct(item.product_id)}>
                                        <Trash2Icon />
                                        </Button>
                                        </div>
                                    </div>
                                    <div className="cart-info2 flex flex-col gap-y-2 mt-2">
                                        <span className="font-semibold text-lg text-[#666]">{getProduct(item.product_id).product_type.name}</span>
                                        <span className="font-semibold text-lg text-[#212121]">Delivery Estimation</span>
                                        <span className="text-[#ffc700] font-semibold text-lg">5 working days</span>
                                    </div>
                                    <div className="cart-counter m-[auto_0_20px_0]">
                                        <CounterWrapper item={{price:getProduct(item.product_id).price,quantity:item.sum}} />
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
    )
}