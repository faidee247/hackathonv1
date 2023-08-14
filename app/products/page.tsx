import Wrapper from "@/components/shared/Wrapper";
import { getAllProjects } from "@/sanity/sanity-utils"
import Image from "next/image";
import Link from "next/link";

export default async function Products(){
    
    const products = await getAllProjects();
    
    // console.log(products);

    return(
        <Wrapper>
        {/* <div>All Products</div> */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-10">
            
        {products.map((product) => (
            
            
            <div key={product._id} className="product-box">
                
                <div className="product-image">
                <Link href={`/product/${product.slug}`}>
                    <Image src={product.image} alt={product.name} height={400} width={400} />
                    </Link>
                </div>
                <div className="product-details flex flex-col gap-y-2 mt-2">
                <span className="font-semibold text-2xl text-[#212121]">{product.name}</span>
                <span className="font-bold text-lg text-[#888]">{product.product_type.name}</span>
                <span className="text-2xl font-semibold text-[#212121]">${product.price}</span>
                </div>
                
            </div>
            
        ))}
        </div>
        </Wrapper>
    )
}