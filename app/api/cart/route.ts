import { cartTable, db, insertcartTable } from "@/sanity/drizzle";
import { NextRequest,NextResponse } from "next/server";

import {v4} from "uuid"

import { cookies } from "next/dist/client/components/headers";
import { Rss } from "lucide-react";
import { and, desc, eq, sql } from "drizzle-orm";





export const GET = async (request: NextRequest) => {
    
    const req = request.nextUrl
        const userid = req.searchParams.get("user_id") as string

    try{

        const res = await db.select().from(cartTable).where(eq(cartTable.user_id, userid))
        return await NextResponse.json({res});

    }catch(error){
        console.log("error");
        return NextResponse.json({"message":"unable to fetch" + error})
    }
}

export async function POST(request: NextRequest) {
        const uid = v4();

    const ck = cookies();

    const ckuser = ck.get("userid");
    // ck.set("userid",uid)
    if (!ckuser){
    ck.set("userid",uid)
    }
    // console.log(ck);
    // try{
    const req = await request.json();
        
    const userid = cookies().get("userid")?.value
    // console.log(req)
    // console.log(req.product_id)

    let cartItem:Array<insertcartTable> = []

    let i = 0
    do{
        cartItem.push({
            product_id:req.product_id,
            quantity:1,
            total_price:req.total_price,
            unit_price:req.unit_price,
            user_id:userid as string
        })
        i++
    }while(i<req.quantity)

    const res = await db.insert(cartTable).values(cartItem).returning()
    //     {
    //     product_id: req.product_id,
    //     quantity: req.quantity,
    //     user_id: cookies().get("userid")?.value as string,
    //     unit_price: req.unit_price,
    //     total_price: req.total_price
    // }).returning();

    const data = await db.select({quantity:sql<number>`sum(${cartTable.quantity})`,price:sql<number>`sum(${cartTable.total_price})`})
                    .from(cartTable).where(eq(cartTable.user_id, userid as string))

    // const res = await { "message": `Post Working${req.product_id}`};
        return NextResponse.json({ 'inserteddata': res, 'totaldata':data });
    // }catch(error){
    //     console.log(error)
    //     return NextResponse.json({message:error})
    // }
}

export async function DELETE(request:NextRequest){
    const req = request.nextUrl
    const userid = req.searchParams.get("user_id") as string
    const product_id = req.searchParams.get("product_id") as string
    
    try{
    
    const insres = await db.select({cartId:cartTable.id}).from(cartTable).orderBy(desc(cartTable.id)).limit(1)

    const delid = await insres[0].cartId
    const res = await db.delete(cartTable).where(eq(cartTable.id,delid))
        // const res = await db.delete(cartTable).where(and(eq(cartTable.user_id,userid),eq(cartTable.product_id,product_id))).returning()

    return NextResponse.json({"message":"Product removed from cart","product":res})
    }catch(error){
        return NextResponse.json({"message":"Unable to delete"})
    }
}