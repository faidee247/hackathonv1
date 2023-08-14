export type ProductImage = {
    _id : string;
    _createdAt : Date;
    image:string,
    product:{
        _id:string,
        name:string,
        slug:string
    }
}