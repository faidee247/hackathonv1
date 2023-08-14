import Wrapper from "@/components/shared/Wrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AdditionalContent(){
    return(
        <div className="w-full add-full bg-[#fbfcff]">
        <Wrapper>
            <div className="additionalcontent flex flex-col">
            <div className="heading flex justify-end mt-[-12%]">
                <span className="text-4xl lg:text-7xl lg:text-left font-sans font-bold w-full lg:w-1/2 leading-20 text-[#212121]">Unique and Authentic Vintage Designer Jewellery</span>
            </div>
            <div className="additionalcontent-dtl flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-1/2 relative">
                    <div className="absolute hidden-bg top-[45%] lg:top-0">
                        <span className="font-extrabold text-[#212121] opacity-[0.07] text-6xl lg:text-[6.875rem]">Different from others</span>
                    </div>
                    <div className="grid grid-cols-2 gap-6 lg:gap-20 pt-16 lg:pt-20">
                        <div className="grid-item flex flex-col">
                        <span className="grid-text-heading text-lg lg:text-2xl font-bold">Using Good Quality Materials</span>
                        <span className="grid-text-sub mt-4 lg:mt-8 text-md lg:text-lg font-medium">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</span>
                        </div>
                        <div className="grid-item flex flex-col">
                        <span className="grid-text-heading text-lg lg:text-2xl font-bold">100% Handmade Products</span>
                        <span className="grid-text-sub mt-4 lg:mt-8 text-md lg:text-lg font-medium">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</span>
                        </div>
                        <div className="grid-item flex flex-col">
                        <span className="grid-text-heading text-lg lg:text-2xl font-bold">Modern Fashion Design</span>
                        <span className="grid-text-sub mt-4 lg:mt-8 text-md lg:text-lg font-medium">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</span>
                        </div>
                        <div className="grid-item flex flex-col">
                        <span className="grid-text-heading text-lg lg:text-2xl font-bold">Discount for Bulk Orders</span>
                        <span className="grid-text-sub mt-4 lg:mt-8 text-md lg:text-lg font-medium">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</span>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col lg:flex-row">
                    <div className="add-image pt-10 w-full lg:w-1/2 flex">
                        <Image src={"/feature.webp"} alt="Feature" width={250} height={250} className="h-full w-full"/>
                    </div>
                    <div className="add-image-dtl pt-10 w-full lg:w-1/2 pl-5 flex flex-col">
                        <span className="text-lg lg:text-2xl font-light leading-[30px]">This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</span>
                        <Button className="bg-[#212121] text-lg lg:text-2xl p-8 py-10 rounded-none w-full lg:w-2/3 m-0 mt-4 lg:mt-auto">See All Products</Button>
                    </div>
                </div>
            </div>
            </div>
        </Wrapper>
        </div>
    )
}