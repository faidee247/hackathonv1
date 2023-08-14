// 'use client'

import Image from 'next/image'

import { getProjects } from '@/sanity/sanity-utils'
import { Project } from '@/types/Project';
import  Link  from 'next/link';
import Header from './Header';
import { getTop3Products } from "@/sanity/sanity-utils";
import Wrapper from "@/components/shared/Wrapper";
import Promotions from './Promotions';
import AdditionalContent from './AdditionalContent';
import NewsLetter from './NewsLetter';
import Footer from './Footer';


export default async function Home() {

  

  // const projects = await getProjects();

  const products = await getTop3Products();

  // console.log(projects);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-0">
      
      <Header />
      {/* Promotions */}

      <Promotions />

      {/* Promotions */}
      {/* Products */}
      <Wrapper>
        <div className="product-header flex flex-col justify-center items-center">
            <span className="text-[#0062f5] text-base font-sans font-bold">PRODUCTS</span>
            <span className="text-5xl lg:text-6xl text-center lg:text-left font-sans font-bold text-[#212121] mt-5">Check What We Have</span>
        </div>
        <div className="product-list flex flex-col lg:flex-row gap-0 mt-10 mb-[12%]">
            {products.map((product) => (
                <div key={product._id} className="flex flex-col hover:scale-125 ease-linear">
                  <Link href={`/product/${product.slug}`}>
                    <Image className="mr-0" src={product.image} width={400} height={400} alt={product.name} />
                    </Link>
                    <span className='text-2xl font-bold antialiased pr-name mt-2'>{product.name}</span>
                    <span className='text-2xl font-bold antialiased pr-price mt-2'>${product.price}</span>
                </div>
            ))}
        </div>
        </Wrapper>
      {/* Products */}
      {/* Additional Content */}
      <AdditionalContent />
      {/* Additional Content */}

      <NewsLetter />

    </main>
  )
}

