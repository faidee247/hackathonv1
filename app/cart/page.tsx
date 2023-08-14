import Wrapper from "@/components/shared/Wrapper";
import { cartTableType } from "@/sanity/drizzle";
import { getAllProjects, getProductById } from "@/sanity/sanity-utils";
import { Product } from "@/types/Product";

import Image from "next/image";

import { sql } from "drizzle-orm";
import { DeleteIcon, ShoppingBagIcon, Trash2Icon, TrashIcon } from "lucide-react";
import { cookies } from "next/dist/client/components/headers";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";
import OrderSummaryWrapper from "./Summary";
import CounterWrapper from "./Counter";
import CartList from "./CartList";
import CartListWrapper from "./CartList";


export default async function Cart(){
    
    
    
    // console.log("API")

    let userid = cookies().get("userid")?.value;

    console.log(userid);
    
    const res = await fetch(`http://localhost:3000/api/orders?user_id=${userid}`)

    const results = await res.json();

    const items = await results.res;

    console.log(items)

    const products = await getAllProjects()

    const items_count = items.length;

    console.log('Total : ' + items_count)

    // console.log(res);
    
    // console.log('Results:')
    // console.log(items)
    
    function getProduct(product_id:string):Product | any{
        const res = products.find(p => p._id == product_id)
        return res
    }

    async function  getTotal(){
        const res = await fetch(`http://localhost:3000/api/summary?user_id=${userid}`)
        const res1 = await res.json();

        return res1;
    }

    const total = await getTotal();


    
    console.log(total.res[0])

    let total_items = 0;
    let total_price = 0;
    // let price;

    items.map((item:cartTableType) => (
        total_items = (total_items + item.quantity)
    ))

    

    items.map((item:cartTableType) => (
       total_price = total_price + (item.quantity * getProduct(item.product_id).price)
    ))

        // async function deleteProduct(product_id:string){
        //     const res = await fetch(`http://localhost:3000/api/cart?user_id=${userid}&product_id${product_id}`)
        //     const response = await res.json()
        //     console.log(response)
        //     return response
        // }


    // console.log('Total Quantity ' + total_items)
    // console.log('Total Price ' + total_price)   
    return(
        <Wrapper>
            <div className="cart mt-20">
                <div className="cart-heading">
                    <h3 className="font-bold text-3xl">Shopping Cart</h3>
                    {items_count == 0 && 
                    <div className="cart-empty flex flex-col justify center items-center mt-20 mb-40">
                        <ShoppingBagIcon size={100} />
                        <span className="text-2xl font-bold mt-6">Your shopping bag is empty</span>
                    </div>
                    }
                    {items_count > 0 &&
                    <div className="cart-view flex flex-row mt-10">
                    <CartListWrapper items={items} products={products}  />
                    
                    <div className="order-summary-view w-[30%]">
                        <OrderSummaryWrapper summary={total.res[0]}/>
                        </div>
                    </div>
                    }
                </div>
            </div>
            {/* {items.map((item:any) => (
                <div key={item.id}>
                    <span>{getProduct(item.product_id).name}</span><span>{item.product_id}</span></div>
            ))} */}
        </Wrapper>
    )
}