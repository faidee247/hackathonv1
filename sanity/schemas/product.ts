import { defineField } from "sanity";
import category from "./category";
import product_type from "./product_type";

const product = {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
        name: 'name',
        title: 'Name',
        type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options:{source:'name'}
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image'
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number'
        },
        defineField({
            name:"category",
            title:"Product Category",
            type: "reference",
            to: [category]
        }),
        defineField({
            name:"product_type",
            title:"Product Category",
            type: "reference",
            to: [product_type]
        }),
    ]
}

export default product;