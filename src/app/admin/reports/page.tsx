"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, FileText, BarChart, PieChart, LineChart } from "lucide-react"

export default function ReportsPage() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Reports</h1>
        <Button className="bg-green-500 hover:bg-green-600">
          <Download className="mr-2 h-4 w-4" /> Export Reports
        </Button>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <Select defaultValue="this-month">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="this-month">This Month</SelectItem>
            <SelectItem value="last-month">Last Month</SelectItem>
            <SelectItem value="last-3-months">Last 3 Months</SelectItem>
            <SelectItem value="last-6-months">Last 6 Months</SelectItem>
            <SelectItem value="this-year">This Year</SelectItem>
            <SelectItem value="custom">Custom Range</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="overview" className="mb-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="donations">Donations</TabsTrigger>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Donations</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12,450</div>
                <p className="text-xs text-muted-foreground">+18% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <BarChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹71,369</div>
                <p className="text-xs text-muted-foreground">+12% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Schools Supported</CardTitle>
                <PieChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45</div>
                <p className="text-xs text-muted-foreground">+5 from last month</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Donations</CardTitle>
              </CardHeader>
              <CardContent className="h-80 flex items-center justify-center">
                <LineChart className="h-16 w-16 text-muted-foreground" />
                <p className="text-muted-foreground">Monthly donation chart would appear here</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Notebook Distribution</CardTitle>
              </CardHeader>
              <CardContent className="h-80 flex items-center justify-center">
                <PieChart className="h-16 w-16 text-muted-foreground" />
                <p className="text-muted-foreground">Notebook distribution chart would appear here</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="donations" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Donation Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Detailed donation reports would appear here</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="inventory" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Inventory Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Detailed inventory reports would appear here</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="orders" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Order Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Detailed order reports would appear here</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-4">Recent Reports</h2>
        <div className="bg-white rounded-lg border overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium text-sm">Report Name</th>
                <th className="text-left py-3 px-4 font-medium text-sm">Type</th>
                <th className="text-left py-3 px-4 font-medium text-sm">Date</th>
                <th className="text-left py-3 px-4 font-medium text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4">Monthly Donation Summary</td>
                <td className="py-3 px-4">Donations</td>
                <td className="py-3 px-4">Jan 31, 2024</td>
                <td className="py-3 px-4">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Download className="h-4 w-4" />
                    <span className="sr-only">Download</span>
                  </Button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4">Inventory Status Report</td>
                <td className="py-3 px-4">Inventory</td>
                <td className="py-3 px-4">Jan 15, 2024</td>
                <td className="py-3 px-4">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Download className="h-4 w-4" />
                    <span className="sr-only">Download</span>
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4">Quarterly Sales Analysis</td>
                <td className="py-3 px-4">Orders</td>
                <td className="py-3 px-4">Dec 31, 2023</td>
                <td className="py-3 px-4">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Download className="h-4 w-4" />
                    <span className="sr-only">Download</span>
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

