"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useCart } from "@/components/cart-context"
import { Button } from "./ui/button"


export function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(10)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product, quantity)
  }

  return (
    <div className="flex flex-col">
      <Link href={`/product/${product.id}`}>
        <div className="mb-4 overflow-hidden rounded-lg">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={350}
            height={280}
            className="w-full h-auto object-cover transition-transform hover:scale-105"
          />
        </div>
      </Link>
      <Link href={`/product/${product.id}`}>
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      </Link>
      <p className="text-emerald-500 font-medium mb-2">₹{product.price}</p>
      <p className="text-gray-600 mb-4">{product.description}</p>

      <div className="flex items-center gap-4 mt-auto">
        <div className="flex items-center border rounded-md">
          <button className="px-3 py-1 text-lg" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
            −
          </button>
          <span className="px-3 py-1">{quantity}</span>
          <button className="px-3 py-1 text-lg" onClick={() => setQuantity(quantity + 1)}>
            +
          </button>
        </div>
        <Button className="bg-emerald-500 hover:bg-emerald-600 text-white" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </div>
    </div>
  )
}

