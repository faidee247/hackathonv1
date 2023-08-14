'use client'

import { useState } from "react";

export default function ProductSize(){
    const sizes = ['XS','S','M','L','XL']

    const [currentSize,setSize] = useState('S');

    return(
        <div className="product-size flex flex-col mt-4 lg:mt-6">
            <span className="font-semibold color-[#212121] text-lg lg:text-2xl">Select Size</span>
                <div className="size-options flex gap-x-4">
                    {sizes.map((size) => (
                        <span 
                        key={size}
                        onClick={() => setSize(size)}
                        className={`size-option font-bold text-lg lg:text-2xl color-[#666] opacity-[0.8] w-10 lg:w-16 h-10 lg:h-16 flex justify-center items-center ${size == currentSize?"size-selected":"not-selected"}`}>{size}</span>
                    ))}
                    
            </div>
        </div>
    )
}