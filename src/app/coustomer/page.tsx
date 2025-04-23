"use client"
import React from "react"

import { Search, MapPin } from "lucide-react"

import { stores } from "@/data/store"
import StoreCard from "@/components/coustomer/store-card"
import { Button } from "@/components/ui/button"

export default function coustomer() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-emerald-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-medium">Nearby Retailers — Find & Buy Notebooks Easily</h1>
        <Button
          onClick={() => window.location.href = '/coustomer/vcproducts/'}
          className="bg-white text-emerald-500 px-4 py-2 rounded-md shadow-md hover:bg-gray-100 transition"
        >
          View Products
        </Button>
        <div className="flex items-center">
          <MapPin className="h-5 w-5 mr-1" />
          <span className="text-sm">Location detected</span>
        </div>
      </header>

      {/* Search and Filters */}
      <div className="container mx-auto p-4 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by store name or notebook type"
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div className="flex gap-4">
          <select className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 min-w-[200px]">
            <option>Filter by availability</option>
            <option>In stock only</option>
            <option>All items</option>
          </select>
          <select className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 min-w-[200px]">
            <option>Sort by distance</option>
            <option>Sort by price</option>
            <option>Sort by name</option>
          </select>
        </div>
      </div>

      {/* Store Listings */}
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {stores.map((store) => (
            <StoreCard key={store.id} store={store} />
          ))}
        </div>
      </div>
    </main>
  )
}
