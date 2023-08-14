import { defineType, defineField } from "sanity";

const product_type = defineType({
    name: "product_type",
    title: "Product Type",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Product Type",
            type: "string"
        })
    ]
});

export default product_type;