"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, Edit, Eye, Lock, MessageCircle, Store } from "lucide-react"
import { useRouter } from "next/navigation"

interface RetailerData {
  id: string;
  name: string;
  email: string;
  contact?: string;
  address?: string;
}

export default function RetailerProfilePage() {
  const [retailerData, setRetailerData] = useState<RetailerData | null>(null)
  const [loading, setLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState("Today at 2:30 PM")
  const router = useRouter()

  // Mock data for the retailer profile
  const storeInfo = {
    storeName: "BookMart Store",
    contactNumber: "+1 (555) 123-4567",
    storeAddress: "123 Business Street, New York, NY 10001",
    businessType: "Stationery",
    ownerName: "John Smith",
    emailAddress: "john@bookmart.com",
  }

  // Mock data for current stock
  const [stock, setStock] = useState({
    smallNotebooks: 150,
    bigNotebooks: 75,
    thinNotebooks: 200,
  })

  // Mock data for order history
  const orders = [
    {
      id: "ORD-001",
      date: "2024-02-20",
      amount: "$230.00",
      status: "Delivered",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      id: "ORD-002",
      date: "2024-01-15",
      amount: "$180.00",
      status: "Pending",
      statusColor: "bg-yellow-100 text-yellow-800",
    },
  ]

  useEffect(() => {
    try {
      const storedData = localStorage.getItem('AuthRetailer')
      if (storedData) {
        const parsedData = JSON.parse(storedData)
        setRetailerData(parsedData)
        console.log('Retailer Data:', parsedData)
      }
    } catch (error) {
      console.error('Error fetching retailer data:', error)
    } finally {
      setLoading(false)
    }
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!retailerData) {
    return <div>Please login to view your profile</div>
  }

  const handleUpdateStock = () => {
    // In a real app, this would open a modal or navigate to a stock update page
    alert("Update stock functionality would be implemented here")
  }

  const handleChangePassword = () => {
    // In a real app, this would open a modal or navigate to a password change page
    alert("Change password functionality would be implemented here")
  }

  const handleContactSupport = () => {
    // In a real app, this would open a support chat or form
    alert("Contact support functionality would be implemented here")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex  items-center">
          <button 
            onClick={() => window.history.back()} 
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back</span>
          </button>
          <div className="flex items-center">
            <div className="h-8 w-8 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold">
              LO
            </div>
          </div>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium">
            Update
          </button>
        </div>
     
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center space-x-4 mb-6">
          <div className="bg-gray-200 p-3 rounded-md">
            <Store className="h-6 w-6 text-gray-600" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">Retailer Profile</h1>
            <p className="text-sm text-gray-500">Last updated: {lastUpdated}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Store Information */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-900">Store Information</h2>
              <button className="flex items-center text-sm text-emerald-500 hover:text-emerald-600">
                <Edit className="h-4 w-4 mr-1" />
                Edit
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-500">Store Name</p>
                  <p className="mt-1">{storeInfo.storeName}</p>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-500">Contact Number</p>
                  <p className="mt-1">{storeInfo.contactNumber}</p>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-500">Store Address</p>
                  <p className="mt-1">{storeInfo.storeAddress}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Business Type</p>
                  <p className="mt-1">{storeInfo.businessType}</p>
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-500">Owner Name</p>
                  <p className="mt-1">{storeInfo.ownerName}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Email Address</p>
                  <p className="mt-1">{storeInfo.emailAddress}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Current Stock */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Current Stock</h2>

            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Small Notebooks</p>
                <p className="mt-1 text-lg font-medium">{stock.smallNotebooks}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Big Notebooks</p>
                <p className="mt-1 text-lg font-medium">{stock.bigNotebooks}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Thin Notebooks</p>
                <p className="mt-1 text-lg font-medium">{stock.thinNotebooks}</p>
              </div>

              <button
                onClick={handleUpdateStock}
                className="w-full mt-4 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Update Stock
              </button>
            </div>

            <div className="mt-8">
              <h3 className="text-md font-medium text-gray-900 mb-3">Quick Actions</h3>
              <div className="space-y-2">
                <button
                  onClick={handleChangePassword}
                  className="w-full flex justify-between items-center border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  <span>Change Password</span>
                  <Lock className="h-4 w-4" />
                </button>
                <button
                  onClick={handleContactSupport}
                  className="w-full flex justify-between items-center border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  <span>Contact Support</span>
                  <MessageCircle className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Order History */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-6">Order History</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.amount}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${order.statusColor}`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-emerald-500 hover:text-emerald-600 flex items-center">
                        <span>View Details</span>
                        <Eye className="ml-1 h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}

