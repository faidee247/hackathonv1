import { Product } from "@/types/Product";
import { Project } from "@/types/Project";
import { ProductImage } from "@/types/ProductImage";
import {createClient,groq} from "next-sanity"

const client = createClient({
    projectId: "6p38hwxo",
    dataset: "production",
    apiVersion: "2023-06-13",
}); 

export async function getProjects(): Promise<Project[]>{
    // const client = createClient({
    //     projectId: "6p38hwxo",
    //     dataset: "production",
    //     apiVersion: "2023-06-13",
    // });

    return client.fetch(
        groq`*[_type=="project"]{
            _id,
            _createdAt,
            name,
            "slug":slug.current,
            "image":image.asset->url,
            url,
            content
        }`
    )

}

export async function getProject(slug:string): Promise<Project>{
    // const client = createClient({
    //     projectId: "6p38hwxo",
    //     dataset: "production",
    //     apiVersion: "2023-06-13",
    // });

    return client.fetch(
        groq`*[_type=="project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug":slug.current,
            "image":image.asset->url,
            url,
            content
        }`,
        {
            slug:slug
        }
    )
}

export async function getTop3Products(): Promise<Product[]>{
    // const client = createClient({
    //     projectId: "6p38hwxo",
    //     dataset: "production",
    //     apiVersion: "2023-06-13",
    // });

    return client.fetch(
        groq`*[_type=="product"]{
            _id,
            _createdAt,
            name,
            description,
            price,
            "image":image.asset->url,
            category,
            product_type,
            "slug":slug.current
        }|order(_id)[1..3]`
    )
}

export async function getAllProjects(): Promise<Product[]>{
    

    return client.fetch(
        groq`*[_type=="product"]{
            _id,
            _createdAt,
            name,
            description,
            price,
            "slug":slug.current,
            "image":image.asset->url,
            category,
            product_type -> {
                name
            }
        }`
    )
}

export async function getProductsByCategory(category:string): Promise<Product[]>{
    // const client = createClient({
    //     projectId: "6p38hwxo",
    //     dataset: "production",
    //     apiVersion: "2023-06-13",
    // }); 
    return client.fetch(
        groq`*[_type=="product" && $key == category->name] {
            _id,
            _createdAt,
            name,
            description,
            price,
            "slug":slug.current,
            "image":image.asset->url,
            category[] -> {
              name
            },
            product_type -> {
              name
            }
        }`,
        {
            key:category
        }
    )
}

export async function getProduct(slug:string): Promise<Product[]>{
    // const client = createClient({
    //     projectId: "6p38hwxo",
    //     dataset: "production",
    //     apiVersion: "2023-06-13",
    // }); 
    return client.fetch(
        groq`*[_type=="product" && $key == slug.current] {
            _id,
            _createdAt,
            name,
            description,
            price,
            "slug":slug.current,
            "image":image.asset->url,
            category[] -> {
              name
            },
            product_type -> {
              name
            }
        }`,
        {
            key:slug
        }
    )
}

export async function getProductImages(slug:string):Promise<ProductImage[]>{
    return client.fetch(
        groq`*[_type=="product_images" && $key == product->slug.current]{
            _id,
            "image":image.asset->url,
              "product":product->{
              _id,name,slug
              }
          }`,{
            key:slug
          }
    )
}

export async function getProductById(id:string):Promise<ProductImage[]>{
    return client.fetch(
        groq`*[_type=="product_images" && $key == _id]{
            _id,
            "image":image.asset->url,
              "product":product->{
              _id,name,slug
              }
          }`,{
            key:id
          }
    )
}