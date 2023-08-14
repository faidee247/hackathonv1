
export type Product = {
    _id : string;
    _createdAt : Date;
    name: string;
    description: string;
    slug: string;
    image:string;
    product_type:{name:string,_id:string};
    category:{name:string,_id:string};
    price:number
}