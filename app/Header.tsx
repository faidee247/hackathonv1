import Wrapper from "@/components/shared/Wrapper";
import { ShoppingCartIcon } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header(){
    return(
        <Wrapper>
        <div className="w-full">
            <div className="header flex flex-row justify-around">
                <div className="header-banner w-full lg:w-1/2">
                    <div className="discount rounded-md flex justify-center text-center items-center bg-sky-200 h-10 w-32">
                        <span className="discount-text text-blue-600 text-lg font-semibold">
                            Sale 70%</span>
                    </div>
                    <div className="site-header flex flex-col mt-5 mb-5">
                        <span className="site-header-text text-4xl md:text-4xl lg:text-7xl mb-5 font-sans font-bold text-[#212121] tracking-wide">
                        An Industrial Take on Streetwear
                        </span>
                        <span className="site-header-sub text-lg text-[#666] text-lg md:text-lg lg:text-2xl w-full lg:w-[70%] font-normal">
                        Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
                        </span>
                    </div>
                    <div className="site-button">
                        <Link href="/products">
                        <Button className="p-8 py-10 bg-[#212121] w-full lg:w-[35%] flex justify-center items-center rounded-none">
                            <ShoppingCartIcon className="" />
                            <span className="button-text pl-5 text-lg lg:text-2xl font-semibold font-sans leading-5">Start Shopping</span>
                        </Button>
                        </Link>
                    </div>
                    <div className="site-links mt-10">
                        <div className="sites grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
                            <Image src={"/Featured1.webp"} width={100} height={35} alt="Feature1" className="m-auto"/>
                            <Image src={"/Featured2.webp"} width={100} height={35} alt="Feature2" className="m-auto"/>
                            <Image src={"/Featured3.webp"} width={100} height={35} alt="Feature3" className="m-auto"/>
                            <Image src={"/Featured4.webp"} width={100} height={35} alt="Feature4" className="m-auto"/>
                        </div>
                    </div>
                </div>
                <div className="header-image hidden lg:block">
                    <div className="header-image-circle relative rounded-full">
                    <Image
                    className="absolute circle-image"
                    src={"/header.webp"}
                    alt="Header"
                    width={650}
                    height={650} />
                    </div>
                </div>
            </div>
        </div>
        </Wrapper>
    )
}