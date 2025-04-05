"use client"

import { useParams, notFound } from "next/navigation"
import Image from "next/image"
import { useState } from "react"

import { useCart } from "@/components/cart-context"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/data"
import { Header } from "@/components/header"

export default function ProductPage() {
  const params = useParams()
  const productId = params.id as string
  const product = products.find((p) => p.id === productId)

  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  if (!product) {
    return notFound()
  }

  const handleAddToCart = () => {
    addToCart(product, quantity)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Header/>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={600}
            height={600}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-emerald-500 text-2xl font-semibold mb-4">₹{product.price}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>

          {product.details && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">Product Details</h2>
              <p className="text-gray-600">{product.details}</p>
            </div>
          )}

          <div className="mt-auto">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-medium">Quantity:</span>
              <div className="flex items-center border rounded-md">
                <button className="px-3 py-1 text-lg" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  −
                </button>
                <span className="px-3 py-1">{quantity}</span>
                <button className="px-3 py-1 text-lg" onClick={() => setQuantity(quantity + 1)}>
                  +
                </button>
              </div>
            </div>

            <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

