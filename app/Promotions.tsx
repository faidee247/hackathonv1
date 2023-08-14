import Wrapper from '@/components/shared/Wrapper'
import Image from 'next/image'

export default function Promotions(){
    return(
        <Wrapper>

      <div className="product-header flex flex-col justify-center items-center">
            <span className="text-[#0062f5] text-base font-sans font-bold">PROMOTIONS</span>
            <span className="text-5xl lg:text-6xl text-center lg:text-left font-sans font-bold text-[#212121] mt-5">Our Promotions Events</span>
      </div>

      <div className='flex flex-col lg:flex-row mt-8'>
        <div className='flex flex-col w-full lg:w-1/2'>
          <div className='bg-[#d6d6d8] w-full m-0 lg:m-2 mb-0 lg:mb-2 flex flex-col lg:flex-row justify-between'>
            <div className='event1-text flex flex-col p-10 pb-2 lg:pb-10'>
              <span className='text-3xl lg:text-4xl font-bold font-mono'>GET UP TO</span>
              <span className='text-5xl lg:text-6xl font-extrabold font-sans pt-2'>60%</span>
              <span className='text-lg pt-5 font-sans'>For the summer season</span>
            </div>
            <div className='event1-image flex'>
              <Image src={"/event1.webp"} alt="Event1" width={320} height={200}/>
            </div>
          </div>

          <div className='bg-[#212121] m-0 mt-2 lg:m-2 w-full flex flex-col justify-center text-white items-center'>
            <div className='p-10 flex flex-col items-center'>
              <span className='text-4xl font-extrabold'>GET 30% Off</span>
              <span className='text-sm font-normal pt-8 tracking-[0.03em]'>USE PROMO CODE</span>
              <span className='py-3 px-5 lg:px-8 rounded-md bg-[#474747] font-bold text-lg font-sans tracking-[0.25em] mt-1'>DINEWEEKENDSALE</span>
            </div>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row w-full lg:w-1/2 ml-0 lg:ml-8'>
          <div className='discount-product w-full lg:w-1/2 bg-[#efe1c7] m-0 mt-2 lg:m-2 flex flex-col'>
            <span className='product-name pt-8 pl-5 text-lg font-normal'>Flex Sweatshirt</span>
            <span className='product-price pl-5 text-2xl font-semibold'><span className='line-through font-normal pr-3'>$100.00</span> $75.00</span>
            <div className='product-image flex h-[70%] justify-center m-0 mt-auto items-end'>
              <Image src={"/event2.webp"} alt="Event 2" width={"100"} height={200} className="w-[70%]" />
            </div>
            </div>
            <div className='discount-product w-full lg:w-1/2 bg-[#d7d7d9] m-0 mt-2 lg:m-2 flex flex-col'>
            <span className='product-name pt-8 pl-5 text-lg font-normal'>Flex Push Button Bomber</span>
            <span className='product-price pl-5 text-2xl font-semibold'><span className='line-through font-normal pr-3'>$225.00</span> $190.00</span>
            <div className='product-image flex h-[70%] justify-center m-0 mt-auto items-end'>
              <Image src={"/event3.webp"} alt="Event 3" width={"100"} height={200} className="w-[70%]" />
            </div>
          </div>
          
        </div>
      </div>

      </Wrapper>
    )
}