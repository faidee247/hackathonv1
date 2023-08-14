import Wrapper from "@/components/shared/Wrapper";
import { getProduct, getProductImages } from "@/sanity/sanity-utils";

import Image from "next/image";

import Counter from "./Counter";

import { Product } from "@/types/Product";
import { ProductImage } from "@/types/ProductImage";
import ProductImages from "./ProductImages";
import ProductSize from "./ProductSize";

import ProductOrder from "./ProductOrder";

import { Separator } from "./../../../components/ui/separator"
import { Toaster } from "react-hot-toast";
import ProductOrderWrapper from "./ProductOrder";
import CounterWrapper from "./Counter";



type Props = {
    params: {slug:string}
}

export default async function Product({params}: Props){
    
    let images_list:Array<any> = [];
    const product = await getProduct(params.slug);

    const images = await getProductImages(params.slug);

    console.log(images_list)

    images_list.push({key: 1, id: product[0]._id, image:product[0].image});
    let i = 2;
    await images.map((image) => (
        images_list.push({key:i++,id:image._id,image:image.image})
    ))


    return(
          
        <div className="bg-[#fcfcfc] pb-[20px] pt-[2px] lg:pt-[20px]">
            <Toaster />
            <div className="bg-[#fcfcfc]">
        <Wrapper>
            <div className="product-header">
            
                <div className="product-header-2 flex flex-col lg:flex-row grow">
                    
                    <ProductImages data={images_list} />
                    <div className="product-header-dtl lg:ml-10 mt-8 lg:mt-20">
                    <div className="product-title flex flex-col">
                        <span className="font-normal text-2xl lg:text-4xl color-[#212121]">{product[0].name}</span>
                        <span className="font-semibold text-lg lg:text-2xl opacity-[0.3]">{product[0].product_type.name}</span>
                    </div>
                        <ProductSize />
                        <CounterWrapper />
                        <ProductOrderWrapper item={product[0]} /> 
                        
                    </div>
                </div>
            </div>
            </Wrapper>
            </div>
            <Wrapper>
            <div className="product-detail mt-[-30px] lg:mt-0 p-[2rem] bg-white">
                <div className="product-detail-header relative flex items-center p-[40px_0_60px_0] ">
                    {/* border-b border-black */}
                    <div className="product-detail-hidden-header absolute text-[3.2rem] lg:text-[7.5rem] font-extrabold text-[#f2f3f7] z-[0]">Overview</div>
                    <div className="product-detail-heading font-bold text-[1.4rem] text-[#212121] tracking-[0.05em] z-[1]">Product Information</div>
                </div>
                <Separator className="text-black h-[2px]" />
                <div className="product-detail-detail flex flex-col mt-10 gap-y-10">
                    <div className="product-row flex flex-col lg:flex-row ">
                    <div className="product-label w-full lg:w-[30%] font-bold text-[1rem] tracking-[0.05em] text-[#666]">PRODUCT DETAILS</div>
                    <div className="product-value w-full lg:w-[70%] mt-4 lg:mt-0 text-[1rem] text-[#212121] leading-[26px] font-light">{product[0].description}</div>
                    </div>
                    <div className="product-row flex flex-col lg:flex-row">
                    <div className="product-label w-full lg:w-[30%] font-bold text-[1rem] tracking-[0.05em] text-[#666]">PRODUCT CARE</div>
                    <div className="product-value w-full lg:w-[70%] text-[1rem] text-[#212121] font-semibold">
                        
                        <ul className="list-disc">
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>consectetur adipiscing elit</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </Wrapper>
        </div>
    )
    }
