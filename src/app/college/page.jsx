"use client"

import { useState, useEffect } from "react"
import { Bell, Link, CheckCircle, Clock, Truck, FileText } from "lucide-react"
import { UploadNotebookModal } from "@/components/college/upload-notebook-modal"

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    try {
      const storedData = localStorage.getItem('AuthCollege')
      if (storedData) {
        const parsedData = JSON.parse(storedData)
        setUserData(parsedData)
        console.log('User Data:', parsedData)
      }
    } catch (error) {
      console.error('Error fetching user data:', error)
    }
  }, [])

  const recentOrders = [
    {
      id: 1,
      title: "Old Notebooks Bundle 1",
      details: "5 notebooks • 2.5 kg",
      price: "₹1,500",
      date: "03/15/2024",
      status: "Pending",
    },
    {
      id: 2,
      title: "Used Notebooks Bundle 2",
      details: "3 notebooks • 1.8 kg",
      price: "₹900",
      date: "03/14/2024",
      status: "Picked Up",
    },
    {
      id: 3,
      title: "Mixed Scrap Notebooks",
      details: "4 notebooks • 2.2 kg",
      price: "₹1,200",
      date: "03/13/2024",
      status: "Completed",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <div className=" p-1 bg-indigo-600 rounded-md flex items-center justify-center text-white font-bold text-xl">
                VisionCraft
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-indigo-600 font-medium border-b-2 border-indigo-600 pb-4">
                Dashboard
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Orders History
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Profile Settings
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Help
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900">
              <Bell className="w-5 h-5" />
            </button>
            <span className="text-gray-700 font-medium">
              {userData?.name || 'Loading...'}
            </span>
            <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden">
              <img src="/placeholder.svg?height=32&width=32" alt="Profile" />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {userData?.name || 'Loading...'}
              </h1>
              <p className="text-gray-600">{userData?.address || 'Loading address...'}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors"
              >
                <span className="mr-2">+</span> Upload Notebooks
              </button>
              <button className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                <Link className="w-4 h-4 mr-2" /> Connect with VisionCraft
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start">
              <div className="p-2 bg-green-50 rounded-md">
                <FileText className="w-5 h-5 text-green-500" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Scrap Orders</p>
                <p className="text-2xl font-bold">248</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start">
              <div className="p-2 bg-yellow-50 rounded-md">
                <Clock className="w-5 h-5 text-yellow-500" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Pending Orders</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start">
              <div className="p-2 bg-blue-50 rounded-md">
                <Truck className="w-5 h-5 text-blue-500" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Picked Up</p>
                <p className="text-2xl font-bold">36</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start">
              <div className="p-2 bg-green-50 rounded-md">
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold">200</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Orders Section */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
          </div>
          <div className="divide-y">
            {recentOrders.map((order) => (
              <div key={order.id} className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">{order.title}</h3>
                    <p className="text-sm text-gray-600">{order.details}</p>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center mt-2 md:mt-0 md:space-x-6">
                    <div className="text-right">
                      <p className="font-medium text-gray-900">{order.price}</p>
                      <p className="text-sm text-gray-600">{order.date}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span
                        className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${order.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : order.status === "Picked Up"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-green-100 text-green-800"
                          }`}
                      >
                        {order.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-600 text-sm py-6">
          © 2024 Banasthali Scrap Collection. All rights reserved.
        </div>
      </main>

      {/* Upload Notebook Modal */}
      <UploadNotebookModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

