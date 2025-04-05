import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

export default function NGOsPage() {
  return (
    <div className="p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Notebook Donation Program</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Help provide essential educational materials to students in need. Your donation of notebooks can make a
          significant impact on their learning journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="text-center">
          <p className="text-3xl font-bold text-green-500">12,450</p>
          <p className="text-sm text-muted-foreground">Notebooks Donated</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-green-500">45</p>
          <p className="text-sm text-muted-foreground">Schools Supported</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-green-500">25,000</p>
          <p className="text-sm text-muted-foreground">Target Notebooks</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search..." className="w-full pl-8" />
        </div>
        <Select defaultValue="all-locations">
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="All Locations" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-locations">All Locations</SelectItem>
            <SelectItem value="mumbai">Mumbai</SelectItem>
            <SelectItem value="delhi">Delhi</SelectItem>
            <SelectItem value="bangalore">Bangalore</SelectItem>
            <SelectItem value="chennai">Chennai</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all-types">
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="All Types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-types">All Types</SelectItem>
            <SelectItem value="school">School</SelectItem>
            <SelectItem value="ngo">NGO</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border p-4">
          <h3 className="font-semibold mb-2">Hope Foundation School</h3>
          <div className="text-sm mb-1">
            <span className="text-muted-foreground">Contact:</span> John Smith
          </div>
          <div className="text-sm mb-1">
            <span className="text-muted-foreground">Phone:</span> +91 98765 43210
          </div>
          <div className="text-sm mb-1">
            <span className="text-muted-foreground">Address:</span> 123 Education Street, Mumbai
          </div>
          <div className="text-sm mb-3">
            <span className="text-muted-foreground">Needed:</span> 500 notebooks
          </div>
          <Button className="w-full bg-green-500 hover:bg-green-600">Donate Now</Button>
        </div>

        <div className="bg-white rounded-lg border p-4">
          <h3 className="font-semibold mb-2">Bright Future NGO</h3>
          <div className="text-sm mb-1">
            <span className="text-muted-foreground">Contact:</span> Sarah Johnson
          </div>
          <div className="text-sm mb-1">
            <span className="text-muted-foreground">Phone:</span> +91 98765 43211
          </div>
          <div className="text-sm mb-1">
            <span className="text-muted-foreground">Address:</span> 456 NGO Road, Delhi
          </div>
          <div className="text-sm mb-3">
            <span className="text-muted-foreground">Needed:</span> 300 notebooks
          </div>
          <Button className="w-full bg-green-500 hover:bg-green-600">Donate Now</Button>
        </div>

        <div className="bg-white rounded-lg border p-4">
          <h3 className="font-semibold mb-2">Knowledge Tree School</h3>
          <div className="text-sm mb-1">
            <span className="text-muted-foreground">Contact:</span> Michael Brown
          </div>
          <div className="text-sm mb-1">
            <span className="text-muted-foreground">Phone:</span> +91 98765 43212
          </div>
          <div className="text-sm mb-1">
            <span className="text-muted-foreground">Address:</span> 789 School Lane, Bangalore
          </div>
          <div className="text-sm mb-3">
            <span className="text-muted-foreground">Needed:</span> 200 notebooks
          </div>
          <Button className="w-full bg-green-500 hover:bg-green-600">Donate Now</Button>
        </div>

        <div className="bg-white rounded-lg border p-4">
          <h3 className="font-semibold mb-2">Rainbow Kids School</h3>
          <div className="text-sm mb-1">
            <span className="text-muted-foreground">Contact:</span> Emma Wilson
          </div>
          <div className="text-sm mb-1">
            <span className="text-muted-foreground">Phone:</span> +91 98765 43213
          </div>
          <div className="text-sm mb-1">
            <span className="text-muted-foreground">Address:</span> 321 Rainbow Road, Chennai
          </div>
          <div className="text-sm mb-3">
            <span className="text-muted-foreground">Needed:</span> 400 notebooks
          </div>
          <Button className="w-full bg-green-500 hover:bg-green-600">Donate Now</Button>
        </div>

        <div className="bg-white rounded-lg border p-4">
          <h3 className="font-semibold mb-2">Sunshine Academy</h3>
          <div className="text-sm mb-1">
            <span className="text-muted-foreground">Contact:</span> David Lee
          </div>
          <div className="text-sm mb-1">
            <span className="text-muted-foreground">Phone:</span> +91 98765 43214
          </div>
          <div className="text-sm mb-1">
            <span className="text-muted-foreground">Address:</span> 567 Sun Street, Hyderabad
          </div>
          <div className="text-sm mb-3">
            <span className="text-muted-foreground">Needed:</span> 180 notebooks
          </div>
          <Button className="w-full bg-green-500 hover:bg-green-600">Donate Now</Button>
        </div>

        <div className="bg-white rounded-lg border p-4">
          <h3 className="font-semibold mb-2">Children First NGO</h3>
          <div className="text-sm mb-1">
            <span className="text-muted-foreground">Contact:</span> Lisa Chen
          </div>
          <div className="text-sm mb-1">
            <span className="text-muted-foreground">Phone:</span> +91 98765 43215
          </div>
          <div className="text-sm mb-1">
            <span className="text-muted-foreground">Address:</span> 890 NGO Circle, Pune
          </div>
          <div className="text-sm mb-3">
            <span className="text-muted-foreground">Needed:</span> 250 notebooks
          </div>
          <Button className="w-full bg-green-500 hover:bg-green-600">Donate Now</Button>
        </div>

        <div className="bg-white rounded-lg border p-4">
          <h3 className="font-semibold mb-2">Education First</h3>
          <div className="text-sm mb-1">
            <span className="text-muted-foreground">Contact:</span> Robert Clark
          </div>
          <div className="text-sm mb-1">
            <span className="text-muted-foreground">Phone:</span> +91 98765 43216
          </div>
          <div className="text-sm mb-1">
            <span className="text-muted-foreground">Address:</span> 432 Learn Lane, Kolkata
          </div>
          <div className="text-sm mb-3">
            <span className="text-muted-foreground">Needed:</span> 450 notebooks
          </div>
          <Button className="w-full bg-green-500 hover:bg-green-600">Donate Now</Button>
        </div>

        <div className="bg-white rounded-lg border p-4">
          <h3 className="font-semibold mb-2">Rising Stars School</h3>
          <div className="text-sm mb-1">
            <span className="text-muted-foreground">Contact:</span> Maria Garcia
          </div>
          <div className="text-sm mb-1">
            <span className="text-muted-foreground">Phone:</span> +91 98765 43217
          </div>
          <div className="text-sm mb-1">
            <span className="text-muted-foreground">Address:</span> 765 Star Road, Ahmedabad
          </div>
          <div className="text-sm mb-3">
            <span className="text-muted-foreground">Needed:</span> 320 notebooks
          </div>
          <Button className="w-full bg-green-500 hover:bg-green-600">Donate Now</Button>
        </div>
      </div>

      <div className="text-center text-xs text-muted-foreground mt-8">© 2024 NotebookAid. All rights reserved.</div>
    </div>
  )
}

