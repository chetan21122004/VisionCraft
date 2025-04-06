"use client"

import { useState, createContext, useContext, useEffect, type ReactNode } from "react"
import Image from "next/image"
import { Trash2, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Product data
interface Product {
  id: string
  name: string
  price: number
  description: string
  image: string
}

const products: Product[] = [
    {
      id: "small-notebook",
      name: "Small Notebook",
      price: 20,
      description: "100 pages of premium recycled paper, eco-friendly cover",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80",
    },
    {
      id: "big-notebook",
      name: "Big Notebook",
      price: 30,
      description: "200 pages of premium recycled paper, durable binding",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80",
    },
    {
      id: "thin-notebook",
      name: "Thin Notebook",
      price: 15,
      description: "50 pages of premium recycled paper, lightweight design",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80",
    },
    {
      id: "premium-repurpose-notebook",
      name: "Premium Repurpose Notebook",
      price: 1999,
      description: "Luxury recycled paper notebook with leather cover, large size",
      image: "https://images.unsplash.com/photo-1629196916199-60a8521c6f72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80",
    },
    {
      id: "slim-repurpose-notebook",
      name: "Slim Repurpose Notebook",
      price: 1599,
      description: "Compact luxury notebook with recycled paper, small size",
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300&q=80",
    },
  ]

// Cart context
interface CartItem {
  product: Product
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (product: Product, quantity: number) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  subtotal: number
  deliveryFee: number
  total: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const deliveryFee = 499

  // Load cart from localStorage on client side
  useEffect(() => {
    const savedCart = localStorage.getItem("retailersCart")
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart))
      } catch (e) {
        console.error("Failed to parse cart from localStorage")
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem("retailersCart", JSON.stringify(items))
    }
  }, [items])

  const addToCart = (product: Product, quantity: number) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.product.id === product.id)

      if (existingItem) {
        return prevItems.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item,
        )
      } else {
        return [...prevItems, { product, quantity }]
      }
    })
  }

  const removeFromCart = (productId: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.product.id !== productId))
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }

    setItems((prevItems) => prevItems.map((item) => (item.product.id === productId ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setItems([])
    localStorage.removeItem("retailersCart")
  }

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

  const total = subtotal + deliveryFee

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        subtotal,
        deliveryFee,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

// Product Card Component
function ProductCard({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(10)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product, quantity)
  }

  return (
    <div className="flex flex-col">
      <div className="mb-4 overflow-hidden rounded-lg">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={200}
          height={100}
          className="w-full h-auto object-cover transition-transform hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
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

// Products List Component
function ProductsList() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold">Order from VisionCraft</h1>
          <p className="text-gray-600">Affordable Recycled Notebooks</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Environmental Impact</h2>
          <p className="text-gray-600">Each notebook saves 2 trees and reduces carbon footprint by 5kg CO2</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-600">Email: support@visioncraft.com</p>
          <p className="text-gray-600">Phone: +91 98765 43210</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Payment Methods</h2>
          <div className="flex gap-2">
            <div className="bg-gray-200 p-2 rounded">
              <span className="text-sm">VISA</span>
            </div>
            <div className="bg-gray-200 p-2 rounded">
              <span className="text-sm">MASTERCARD</span>
            </div>
            <div className="bg-gray-200 p-2 rounded">
              <span className="text-sm">AMEX</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Cart Component
function CartPage() {
  const { items, removeFromCart, updateQuantity, subtotal, deliveryFee, total } = useCart()

  const handleConfirmOrder = () => {
    alert("Order placed successfully!")
    // In a real app, you would submit the order to a backend
    // and then redirect to a confirmation page
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Your Shopping Cart is Empty</h1>
        <p className="text-gray-600 mb-8">Add some products to your cart to continue shopping</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {items.map((item) => (
            <div key={item.product.id} className="flex gap-4 py-6 border-b">
              <div className="w-24 h-24 relative flex-shrink-0">
                <Image
                  src={item.product.image || "/placeholder.svg"}
                  alt={item.product.name}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between">
                  <h3 className="font-semibold">{item.product.name}</h3>
                  <p className="font-semibold">₹{item.product.price}</p>
                </div>
                <p className="text-sm text-gray-500 mb-4">{item.product.description.split(",")[1]}</p>

                <div className="flex justify-between items-center">
                  <div className="flex items-center border rounded-md">
                    <button className="px-3 py-1" onClick={() => updateQuantity(item.product.id, item.quantity - 1)}>
                      −
                    </button>
                    <span className="px-3 py-1">{item.quantity}</span>
                    <button className="px-3 py-1" onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>
                      +
                    </button>
                  </div>
                  <button className="text-red-500" onClick={() => removeFromCart(item.product.id)}>
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 p-6 rounded-lg h-fit">
          <h2 className="text-xl font-bold mb-6">Order Summary</h2>

          <div className="space-y-4 mb-6">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>₹{deliveryFee}</span>
            </div>
            <div className="flex justify-between font-bold text-lg pt-4 border-t">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>

          <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white" onClick={handleConfirmOrder}>
            Confirm Order
          </Button>

          <div className="mt-4 flex items-center justify-center text-gray-500">
            <span className="text-sm">Secure Checkout</span>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-bold mb-6">Delivery Options</h2>
        <RadioGroup defaultValue="home" className="space-y-4">
          <div className="flex items-center justify-between border p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="home" id="home" />
              <Label htmlFor="home" className="font-medium">
                Home Delivery
              </Label>
              <p className="text-sm text-gray-500 ml-6">Delivery within 3-5 business days</p>
            </div>
            <span>₹499</span>
          </div>
        </RadioGroup>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-6">Payment Method</h2>
        <RadioGroup defaultValue="cash" className="space-y-4">
          <div className="flex items-center border p-4 rounded-lg">
            <RadioGroupItem value="cash" id="cash" />
            <Label htmlFor="cash" className="font-medium ml-2">
              Cash on Delivery
            </Label>
            <p className="text-sm text-gray-500 ml-6">Pay when you receive</p>
          </div>
          <div className="flex items-center border p-4 rounded-lg">
            <RadioGroupItem value="upi" id="upi" />
            <Label htmlFor="upi" className="font-medium ml-2">
              UPI Payment
            </Label>
            <p className="text-sm text-gray-500 ml-6">Google Pay, PhonePe, etc.</p>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

// Cart Icon Component
function CartIcon() {
  const { items } = useCart()
  const itemCount = items.reduce((count, item) => count + item.quantity, 0)

  return (
    <div className="relative">
      <ShoppingCart className="h-6 w-6" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </div>
  )
}

// Main Page Component
export default function RetailersPage() {
  const [activeTab, setActiveTab] = useState("products")

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <header className="border-b">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="bg-violet-600 text-white font-bold p-2 rounded-md">VC</div>
              <span className="font-semibold text-lg">VisionCraft</span>
            </div>
            <Button
              variant="outline"
              className="relative"
              onClick={() => setActiveTab(activeTab === "products" ? "cart" : "products")}
            >
              <CartIcon />
            </Button>
          </div>
        </header>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="container mx-auto px-4 py-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="cart">Cart</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="products">
            <ProductsList />
          </TabsContent>

          <TabsContent value="cart">
            <CartPage />
          </TabsContent>
        </Tabs>
      </div>
    </CartProvider>
  )
}

