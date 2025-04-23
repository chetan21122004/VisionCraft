"use client"

import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/components/cart-context"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function Header() {
    const { items } = useCart()
    const itemCount = items.reduce((count, item) => count + item.quantity, 0)
    const router = useRouter()

    return (
        <header className="border-b">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Button variant="ghost" size="icon" onClick={() => router.back()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                        <path d="m15 18-6-6 6-6"/>
                    </svg>
                </Button>

                <button className="flex items-center gap-2">
                    <div className="bg-violet-600 text-white font-bold p-2 rounded-md">VC</div>
                    <span className="font-semibold text-lg">VisionCraft</span>
                </button>
                <div className="flex items-center gap-4">
                    <Link href="/retailers/cart">
                        <Button variant="outline" className="relative">
                            <ShoppingCart className="h-5 w-5" />
                            {itemCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    {itemCount}
                                </span>
                            )}
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    )
}

