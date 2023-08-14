'use client'

import { useEffect, useState } from "react"

import Image from "next/image";

type ProductImage = {
    key:number,
    id:string,
    image:string
}

export default function ProductImages({data}:{data:Array<ProductImage>}){

    const [currentimage,setImage] = useState(data[0])

    function updateImage(image:ProductImage){
        setImage(image)
    }

    console.log(data);
    console.log(currentimage);
    return(
        <div className="product-images flex flex-row grow">
                    <div className="product-image-list flex flex-col gap-y-4">
                        
                        {data.map((image:ProductImage) => (
                            <div key={image.id}>
                            <Image src={image.image} alt={image.id} width={100} height={100} onMouseOver={() => {updateImage(image)}}/>
                            </div>
                               ))}
                        
                        
                    </div>
                    <div className="product-image ml-5 lg:ml-10 inline-flex lg:flex lg:grow">
                        <Image src={currentimage.image} alt={currentimage.id} width={400} height={400} className="m-auto lg:flex lg:grow"/>
                        
                    </div>
                    </div>
    )

}