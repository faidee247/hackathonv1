import { defineField, defineType } from "sanity";
import product from "./product";

const product_images = defineType({
    name: "product_images",
    title: "Product Images",
    type: "document",
    fields: [
        defineField({
            name:"image",
            title:"Image",
            type:"image"
        }),
        defineField({
            name:"product",
            title:"Product",
            type:"reference",
            to:[product]
        })
    ]
})

export default product_images