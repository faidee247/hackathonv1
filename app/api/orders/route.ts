import { cartTable, db } from "@/sanity/drizzle";
import { NextRequest,NextResponse } from "next/server";

import {v4} from "uuid"

import { cookies } from "next/dist/client/components/headers";
import { Rss } from "lucide-react";
import { eq, sql } from "drizzle-orm";

export const GET = async (request: NextRequest) => {
    
    const req = request.nextUrl
        const userid = req.searchParams.get("user_id") as string

    try{

        const res = await db.select({sum:sql<number>`sum(${cartTable.quantity})`,product_id:cartTable.product_id})
                    .from(cartTable).where(eq(cartTable.user_id, userid))
                    .groupBy(({product_id}) => product_id)
        return await NextResponse.json({res});

    }catch(error){
        console.log("error");
        return NextResponse.json({"message":"unable to fetch" + error})
    }
}