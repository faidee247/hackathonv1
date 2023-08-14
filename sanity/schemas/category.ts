import { defineType, defineField } from "sanity"

const category = defineType({
    name: "category",
    title: "Category",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Category Name",
            type: "string"
        })
    ]
})

export default category