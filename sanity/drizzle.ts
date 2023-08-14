import {pgTable,varchar,integer,serial} from "drizzle-orm/pg-core"

import {drizzle} from "drizzle-orm/vercel-postgres"

import {sql} from "@vercel/postgres"
import { InferModel } from "drizzle-orm"

export const cartTable = pgTable("cart",{
    id: serial("id").primaryKey(),
    user_id: varchar("user_id",{
        length:255
    }).notNull(),
    product_id: varchar("product_id",{
        length: 255
    }).notNull(),
    quantity: integer("quantity").notNull(),
    unit_price: integer("unit_price").notNull(),
    total_price: integer("total_price").notNull()
})

export type cartTableType = InferModel<typeof cartTable>
export type insertcartTable = InferModel<typeof cartTable,"insert">

export const db = drizzle(sql)