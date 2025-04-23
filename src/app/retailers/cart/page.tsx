"use client"

import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Trash2 } from "lucide-react"
import { useCart } from "@/components/cart-context"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Header } from "@/components/header"

export default function CartPage() {
    const { items, removeFromCart, updateQuantity, subtotal, deliveryFee, total } = useCart()

    const router = useRouter()

    const handleConfirmOrder = () => {
        alert("Order placed successfully!")
        // In a real app, you would submit the order to a backend
        // and then redirect to a confirmation page
    }

    if (items.length === 0) {
        return (
            <>
                <Header />
                <div className="container mx-auto px-4 py-16 text-center">
                    <h1 className="text-2xl font-bold mb-4">Your Shopping Cart is Empty</h1>
                    <p className="text-gray-600 mb-8">Add some products to your cart to continue shopping</p>
                    <Link href="/">
                        <Button>Continue Shopping</Button>
                    </Link>
                </div>
            </>
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

