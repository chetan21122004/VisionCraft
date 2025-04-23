import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {  Search } from "lucide-react"

export default function OrdersPage() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold">Manage Orders</h1>
          <p className="text-muted-foreground">View and manage orders from customers and retailers</p>
        </div>
      
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg border p-4">
          <div className="flex items-center gap-2 mb-1">
            <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
              <span className="text-green-600 text-xs">✓</span>
            </div>
            <span className="text-sm text-muted-foreground">Customer Orders</span>
          </div>
          <p className="text-2xl font-bold">24</p>
        </div>
        <div className="bg-white rounded-lg border p-4">
          <div className="flex items-center gap-2 mb-1">
            <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-blue-600 text-xs">✓</span>
            </div>
            <span className="text-sm text-muted-foreground">Retailer Orders</span>
          </div>
          <p className="text-2xl font-bold">12</p>
        </div>
        <div className="bg-white rounded-lg border p-4">
          <div className="flex items-center gap-2 mb-1">
            <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center">
              <span className="text-purple-600 text-xs">✓</span>
            </div>
            <span className="text-sm text-muted-foreground">Total Orders</span>
          </div>
          <p className="text-2xl font-bold">284</p>
        </div>
        <div className="bg-white rounded-lg border p-4">
          <div className="flex items-center gap-2 mb-1">
            <div className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center">
              <span className="text-indigo-600 text-xs">✓</span>
            </div>
            <span className="text-sm text-muted-foreground">Active Retailers</span>
          </div>
          <p className="text-2xl font-bold">18</p>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search orders..." className="w-full bg-white pl-8" />
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="all-order-types">
            <SelectTrigger className="w-[180px] bg-white">
              <SelectValue placeholder="All Order Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-order-types">All Order Types</SelectItem>
              <SelectItem value="customer">Customer</SelectItem>
              <SelectItem value="retailer">Retailer</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all-types">
            <SelectTrigger className="w-[180px] bg-white">
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-types">All Types</SelectItem>
              <SelectItem value="premium-hardcover">Premium Hardcover</SelectItem>
              <SelectItem value="spiral-premium">Spiral Premium</SelectItem>
              <SelectItem value="classic-hardcover">Classic Hardcover</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="bg-white rounded-lg border overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4 font-medium text-sm">Order</th>
              <th className="text-left py-3 px-4 font-medium text-sm">Customer</th>
              <th className="text-left py-3 px-4 font-medium text-sm">Type</th>
              <th className="text-left py-3 px-4 font-medium text-sm">Price</th>
              <th className="text-left py-3 px-4 font-medium text-sm">Status</th>
              <th className="text-left py-3 px-4 font-medium text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-3 px-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-red-100 rounded flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-red-600"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M7 7h10" />
                      <path d="M7 12h10" />
                      <path d="M7 17h10" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">#ORD-2024</div>
                    <div className="text-xs text-muted-foreground">Jan 15, 2024</div>
                  </div>
                </div>
              </td>
              <td className="py-3 px-4">John Smith (Retailer)</td>
              <td className="py-3 px-4">Premium Hardcover</td>
              <td className="py-3 px-4">$49.99</td>
              <td className="py-3 px-4">
                <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                  Pending
                </span>
              </td>
              <td className="py-3 px-4">
                <Button variant="link" size="sm" className="text-blue-600">
                  View Details
                </Button>
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-gray-100 rounded flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-gray-600"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M7 7h10" />
                      <path d="M7 12h10" />
                      <path d="M7 17h10" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">#ORD-2023</div>
                    <div className="text-xs text-muted-foreground">Jan 15, 2024</div>
                  </div>
                </div>
              </td>
              <td className="py-3 px-4">Sarah Johnson (Retailer)</td>
              <td className="py-3 px-4">Spiral Premium</td>
              <td className="py-3 px-4">$39.99</td>
              <td className="py-3 px-4">
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                  Approved
                </span>
              </td>
              <td className="py-3 px-4">
                <Button variant="link" size="sm" className="text-blue-600">
                  View Details
                </Button>
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-amber-100 rounded flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-amber-600"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M7 7h10" />
                      <path d="M7 12h10" />
                      <path d="M7 17h10" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">#ORD-2022</div>
                    <div className="text-xs text-muted-foreground">Jan 14, 2024</div>
                  </div>
                </div>
              </td>
              <td className="py-3 px-4">Michael Brown (Customer)</td>
              <td className="py-3 px-4">Classic Hardcover</td>
              <td className="py-3 px-4">$44.99</td>
              <td className="py-3 px-4">
                <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                  Completed
                </span>
              </td>
              <td className="py-3 px-4">
                <Button variant="link" size="sm" className="text-blue-600">
                  View Details
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex items-center justify-between px-4 py-3 border-t">
          <div className="text-sm text-muted-foreground">Showing 1 to 3 of 24 results</div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

