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

        const res = await db.select({quantity:sql<number>`sum(${cartTable.quantity})`,amount:sql<number>`sum(${cartTable.total_price})`})
                    .from(cartTable).where(eq(cartTable.user_id, userid))
        return await NextResponse.json({res});

    }catch(error){
        console.log("error");
        return NextResponse.json({"message":"unable to fetch" + error})
    }
}