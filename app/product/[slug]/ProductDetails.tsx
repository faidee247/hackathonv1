import { getProduct } from "@/sanity/sanity-utils";
import { useRouter,useSearchParams  } from "next/navigation";

type Props = {
    params: {slug:string}
}

async function FetchData(params:any){
            
             
    const pr = await getProduct(params)
        // .then((res:any) => {
        //     console.log(res);
        //     return <div>{res[0].name}</div>
        // })
        console.log(pr);
        return await (<div>{pr[0]?.name}</div>)

    
    
    
}


export default function ProductDetails(){

    const router = useRouter();

    const searchParams = useSearchParams()

    const search = searchParams.get('search')

    // const {keyword1} ;
    
    return(
        <div>
            {/* @ts-ignore Server Component */}
            <FetchData params={search} />
        </div>
    )
}