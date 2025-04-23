"use client"

import { useEffect, useState } from "react"
import { Search, RefreshCw } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Define the type for notebook data
interface Notebook {
  upload_id: string;
  college_name: string;
  caption: string;
  notebook_image: string;
  weight_kg: number;
  total_price: number;
  status: string;
  upload_date: string;
}

export default function UploadedNotebooksPage() {
  const [notebooks, setNotebooks] = useState<Notebook[]>([])
  const [loading, setLoading] = useState(true)
  const [isRefreshing, setIsRefreshing] = useState(false)

  // Move fetchNotebooks outside useEffect so we can reuse it
  const fetchNotebooks = async () => {
    try {
      setIsRefreshing(true)
      const response = await fetch('/api/adminRoutes/getCollegeNotebooks')
      if (!response.ok) {
        throw new Error('Failed to fetch notebooks')
      }
      const data = await response.json()
      setNotebooks(data.data)
    } catch (error) {
      console.error('Error fetching notebooks:', error)
    } finally {
      setLoading(false)
      setIsRefreshing(false)
    }
  }

  // Initial fetch
  useEffect(() => {
    fetchNotebooks()
  }, [])

  // Calculate status counts
  const statusCounts = notebooks.reduce((acc, notebook) => {
    acc[notebook.status] = (acc[notebook.status] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const statusCards = [
    {
      title: "Pending Requests",
      count: statusCounts['pending'] || 0,
      bgColor: "bg-yellow-100",
      icon: "⏳",
    },
    {
      title: "Picked Up",
      count: statusCounts['picked_up'] || 0,
      bgColor: "bg-blue-100",
      icon: "🚚",
    },
    {
      title: "Completed",
      count: statusCounts['completed'] || 0,
      bgColor: "bg-green-100",
      icon: "✓",
    }
  ]

  if (loading) {
    return <div className="p-6">Loading...</div>
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold">Institution uploaded notebooks</h1>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={fetchNotebooks}
            disabled={isRefreshing}
            className={`${isRefreshing ? 'animate-spin' : ''}`}
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <Input type="search" placeholder="Search notebooks..." className="pl-10 w-[300px]" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Institutions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Institutions</SelectItem>
              {/* Add dynamic institutions here if needed */}
            </SelectContent>
          </Select>
        </div>
      </div>

      {isRefreshing && (
        <div className="fixed inset-0 bg-black/5 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg flex items-center gap-2">
            <RefreshCw className="h-4 w-4 animate-spin" />
            <span>Refreshing...</span>
          </div>
        </div>
      )}

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {statusCards.map((card) => (
          <Card key={card.title} className="border rounded-lg overflow-hidden">
            <CardContent className="p-4 flex items-center gap-4">
              <div className={`${card.bgColor} w-10 h-10 rounded-full flex items-center justify-center text-lg`}>
                {card.icon}
              </div>
              <div>
                <p className="text-sm text-gray-600">{card.title}</p>
                <p className="text-2xl font-bold">{card.count}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Notebooks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notebooks.map((notebook) => (
          <Card key={notebook.upload_id} className="overflow-hidden border">
            <div className="h-48 relative">
              <Image 
                src={notebook.notebook_image || "/placeholder.svg"} 
                alt={notebook.caption} 
                fill 
                unoptimized
                className="object-cover"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-2">{notebook.college_name}</h3>
              <p className="text-sm text-gray-600 mb-4">{notebook.caption}</p>
              <div className="flex flex-col gap-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Weight:</span>
                  <span className="font-medium">{notebook.weight_kg} kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Price per kg:</span>
                  <span className="font-medium">₹{(notebook.total_price).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Total Amount:</span>
                  <span className="font-bold">₹{notebook.total_price*notebook.weight_kg}</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  notebook.status === 'pending'
                    ? 'bg-yellow-100 text-yellow-800'
                    : notebook.status === 'picked_up'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-green-100 text-green-800'
                }`}>
                  {notebook.status}
                </span>
                <Button>View Details</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}