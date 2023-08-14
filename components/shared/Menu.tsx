'use client'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { SearchIcon, ShoppingCartIcon } from "lucide-react"
import Image from "next/image"

export default function Menu() {
    return (
        
        <NavigationMenu className="text-2xl">
            <NavigationMenuList className="space-x-12 flex flex-col lg:flex-row">
                <NavigationMenuLink href="/products/Female">
                <NavigationMenuItem>
                    Female
                </NavigationMenuItem>
                </NavigationMenuLink>
                <NavigationMenuLink href="/products/Male">
                <NavigationMenuItem>
                    Male
                </NavigationMenuItem>
                </NavigationMenuLink>
                <NavigationMenuLink href="/products/Kids">
                <NavigationMenuItem>
                    Kids
                </NavigationMenuItem>
                </NavigationMenuLink>
                <NavigationMenuLink href="/products">
                <NavigationMenuItem>
                    All Products
                </NavigationMenuItem>
                </NavigationMenuLink>
            </NavigationMenuList>
        </NavigationMenu>
        
    )
}