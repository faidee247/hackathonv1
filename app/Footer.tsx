import Wrapper from "@/components/shared/Wrapper";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
        <Wrapper>
            <div className="w-full flex flex-col lg:flex-row">
            <div className="w-full lg:w-[40%] flex flex-col">
            <div className="logo-footer-image">
                <Image src="/Logo.webp" alt="Logo" width={250} height={250}/>
            </div>
            <div className="footer-text mt-5">
                <span className="font-normal text-[#666] text-lg lg:text-2xl">Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</span>
            </div>
            <div className="footer-social-links flex flex-row mt-6 lg:mt-12 gap-5 justify-center lg:justify-start">
                <div className="social-icon bg-[#f1f1f1] rounded-md p-4">
                <TwitterIcon className=""/>
                </div>
                <div className="social-icon bg-[#f1f1f1] rounded-md p-4">
                <FacebookIcon className="" />
                </div>
                <div className="social-icon bg-[#f1f1f1] rounded-md p-4">
                <LinkedinIcon className="" />
                </div>
            </div>
            </div>

            <div className="flex flex-col grow ml-0 lg:ml-10 mt-4 lg:mt-0">
            
            <div className="footer-heading">
                <span className="font-bold text-[#666] text-2xl lg:text-3xl font-sans">Company</span>
            </div>

            <div className="links-list flex flex-col mt-5 gap-5">
                <Link href="/" className="font-normal text-lg lg:text-2xl text-[#666]">About</Link>
                <Link href="/" className="font-normal text-lg lg:text-2xl text-[#666]">Terms of Use</Link>
                <Link href="/" className="font-normal text-lg lg:text-2xl text-[#666]">Privacy Policy</Link>
                <Link href="/" className="font-normal text-lg lg:text-2xl text-[#666]">How it Works</Link>
                <Link href="/" className="font-normal text-lg lg:text-2xl text-[#666]">Contact Us</Link>
            </div>

            </div>

            <div className="flex flex-col grow ml-0 lg:ml-10 mt-4 lg:mt-0">
            
            <div className="footer-heading">
                <span className="font-bold text-[#666] text-2xl lg:text-3xl font-sans">Support</span>
            </div>

            <div className="links-list flex flex-col mt-5 gap-5">
                <Link href="/" className="font-normal text-lg lg:text-2xl text-[#666]">Support Carrer</Link>
                <Link href="/" className="font-normal text-lg lg:text-2xl text-[#666]">24h Service</Link>
                <Link href="/" className="font-normal text-lg lg:text-2xl text-[#666]">Quick Chat</Link>
            </div>

            </div>

            <div className="flex flex-col grow ml-0 lg:ml-10 mt-4 lg:mt-0">
            
            <div className="footer-heading">
                <span className="font-bold text-[#666] text-2xl lg:text-3xl font-sans">Contact</span>
            </div>

            <div className="links-list flex flex-col mt-5 gap-5">
                <Link href="/" className="font-normal text-lg lg:text-2xl text-[#666]">Whatsapp</Link>
                <Link href="/" className="font-normal text-lg lg:text-2xl text-[#666]">Support 24h</Link>
            </div>

            </div>

            </div>
        </Wrapper>
    )
}