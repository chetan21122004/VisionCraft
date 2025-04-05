import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowUpIcon, ArrowDownIcon, Edit, RefreshCw, Trash2 } from "lucide-react"

export default function InventoryPage() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Inventory Management</h1>
        <Button className="bg-green-500 hover:bg-green-600">
          <span className="mr-2">+</span> Add New Item
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Small Notebooks</h3>
                <p className="text-2xl font-bold mt-1">247</p>
                <div className="flex items-center text-xs text-green-500 mt-1">
                  <ArrowUpIcon className="h-3 w-3 mr-1" />
                  <span>12% from last month</span>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Edit className="h-4 w-4 text-green-500" />
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Big Notebooks</h3>
                <p className="text-2xl font-bold mt-1">183</p>
                <div className="flex items-center text-xs text-red-500 mt-1">
                  <ArrowDownIcon className="h-3 w-3 mr-1" />
                  <span>6.5% from last month</span>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Edit className="h-4 w-4 text-green-500" />
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Thin Notebooks</h3>
                <p className="text-2xl font-bold mt-1">156</p>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <span>Same as last month</span>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Edit className="h-4 w-4 text-green-500" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white rounded-lg border p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4">Update Notebook</h2>
        <div className="grid gap-4">
          <div>
            <label className="text-sm font-medium mb-1 block">Notebook Type</label>
            <Select defaultValue="small-notebooks">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select notebook type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small-notebooks">Small Notebooks</SelectItem>
                <SelectItem value="big-notebooks">Big Notebooks</SelectItem>
                <SelectItem value="thin-notebooks">Thin Notebooks</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Quantity</label>
            <Input type="number" placeholder="Enter quantity" />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Notes</label>
            <Textarea placeholder="Add any additional notes" />
          </div>
          <div className="flex justify-end gap-2 mt-2">
            <Button variant="outline">Cancel</Button>
            <Button className="bg-green-500 hover:bg-green-600">Update</Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg border p-4">
          <h3 className="text-md font-semibold mb-3">Quick Actions</h3>
          <div className="flex items-start gap-4">
            <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center mt-1">
              <RefreshCw className="h-4 w-4 text-teal-600" />
            </div>
            <div>
              <h4 className="font-medium">Update Quantity</h4>
              <p className="text-sm text-muted-foreground">Modify stock levels for any item</p>
            </div>
          </div>
          <div className="flex items-start gap-4 mt-4">
            <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center mt-1">
              <Trash2 className="h-4 w-4 text-red-600" />
            </div>
            <div>
              <h4 className="font-medium">Remove Old Entries</h4>
              <p className="text-sm text-muted-foreground">Clean up outdated inventory items</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border p-4">
          <h3 className="text-md font-semibold mb-3">System Status</h3>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm">All systems operational</span>
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-green-500 mr-1"></div>
            </div>
          </div>
          <div className="text-xs text-muted-foreground mt-4">Last updated: Today at 14:32</div>
          <div className="flex justify-end mt-2">
            <Button variant="ghost" size="sm" className="text-xs">
              Total items: 586
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
                className="h-3 w-3 ml-1"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

