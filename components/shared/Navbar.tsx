'use client'

import { AlignRightIcon, Cross, CrossIcon, LucidePanelRightClose, SearchIcon, ShoppingCartIcon, SidebarClose } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { CollapseMenuButton } from "sanity"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Separator } from "../ui/separator"
import Menu from "./Menu"
import MobileMenu from "./MobileMenu"
import NavWrapper from "./Nav Wrapper"
import Wrapper from "./Wrapper"

export default function Navbar(){

    const [isMobileOpen, setMobileOpen] = useState(false);

    function setMobileOpenValue(){
        console.log(isMobileOpen);
        if (isMobileOpen==true){
            setMobileOpen(false);
            console.log(isMobileOpen);
        }else{
            setMobileOpen(true);
            console.log(isMobileOpen);
        }
    }

    return(
        <nav>
        <NavWrapper>
        <section className="flex justify-between items-center">
        <Link href={"/"}>
            <div className="logo-image">
                
                <Image src="/Logo.webp" alt="Logo" width={150} height={150}/>
                
            </div>
            </Link>
        <div className="hidden md:hidden lg:block">
            <Menu />
        </div>
        <div className="hidden md:hidden lg:flex lg:w-1/3 md:w-1/3 rounded-md border border-slate-400 items-center">
            <SearchIcon className="mx-2"/>
            <input className="w-full p-1 rounded-md search-icon" type="text" placeholder="What are you looking for?" />
        </div>
        <a href="/cart" className="w-12 h-12 rounded-full bg-slate-200 hidden md:hidden lg:flex items-center justify-center">
            
            <ShoppingCartIcon /></a>
            
        <div className="mobile-menu relative block lg:hidden">
        <div className="mobile-menu-icon">
            
        {isMobileOpen==false && <AlignRightIcon onClick={() => setMobileOpenValue()} />}
        {isMobileOpen==true && <span className="text-2xl font-bold" onClick={() => setMobileOpenValue()}>X</span>}
        </div>
        {isMobileOpen==true && 
        <div className="mobile-menu-list absolute right-0 bg-white border border-[#ebebeb] shadow-md">
            <div className="mobile-cart flex items-center justify-center py-4">
            <div className="cart-icon w-12 h-12 rounded-full bg-slate-200 flex justify-center items-center">
            <ShoppingCartIcon />
            </div>
            </div>
            <Separator />
            <div className="mobile-list p-6 pt-4 w-60">
            <MobileMenu />
            </div>
        </div>
        }
        {/* <DropdownMenu>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        </DropdownMenuContent>
            </DropdownMenu> */}
        </div>

        </section>
        </NavWrapper>
        </nav>
    )
}