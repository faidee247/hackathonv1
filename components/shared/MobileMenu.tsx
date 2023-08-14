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
import { Separator } from "../ui/separator"

export default function MobileMenu() {
    return (
        
        <NavigationMenu className="text-lg">
            <NavigationMenuList className="space-y-2 flex flex-col flex items-center text-center">
                <NavigationMenuLink href="/products/Female">
                <NavigationMenuItem>
                    Female
                </NavigationMenuItem>
                </NavigationMenuLink>
                <Separator />
                <NavigationMenuLink href="/products/Male">
                <NavigationMenuItem>
                    Male
                </NavigationMenuItem>
                </NavigationMenuLink>
                <Separator />
                <NavigationMenuLink href="/products/Kids">
                <NavigationMenuItem>
                    Kids
                </NavigationMenuItem>
                </NavigationMenuLink>
                <Separator />
                <NavigationMenuLink href="/products">
                <NavigationMenuItem>
                    All Products
                </NavigationMenuItem>
                </NavigationMenuLink>
            </NavigationMenuList>
        </NavigationMenu>
        
    )
}