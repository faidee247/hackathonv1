import Wrapper from "@/components/shared/Wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"


export default function NewsLetter(){
    return(
        <Wrapper>
            <div className="newsletter relative flex items-center w-full justify-center">
                <div className="absolute newsletter-hidden-heading">
                    <span className="z-[-1] font-extrabold text-[#212121] opacity-[0.07] text-6xl lg:text-[6.875rem]">
                        Newsletter
                    </span>
                </div>
                <div className="newsletter-box flex flex-col mt-20 items-center justify-center w-full">
                    <span className="text-2xl lg:text-5xl font-bold font-sans">
                    Subscribe Our Newsletter
                    </span>
                    <span className="text-lg lg:text-2xl font-normal font-sans mt-10">
                    Get the latest information and promo offers directly
                    </span>
                    <div className="newsletter-input flex flex-col lg:flex-row mt-12 w-full lg:w-1/2">
                        <Input type={"email"} placeholder="Input Email Address" className="p-8 text-lg" />
                        <Button className="bg-[#212121] text-lg p-8 py-10 rounded-none px-8 py-8 ml-0 lg:ml-4 mt-4 lg:mt-0 newsletteremail">Get Started</Button>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}