"use client"

import { useState, useEffect } from "react"
import { Upload, Check } from "lucide-react"
import { Dialog, DialogContent } from "../ui/dialog"



export function UploadNotebookModal({ isOpen, onClose }) {
  const [imageUrl, setImageUrl] = useState("")
  const [price, setPrice] = useState("")
  const [caption, setCaption] = useState("")
  const [weight, setWeight] = useState("")
  const [collegeData, setCollegeData] = useState(null)

  useEffect(() => {
    try {
      const storedData = localStorage.getItem('AuthCollege')
      if (storedData) {
        const parsedData = JSON.parse(storedData)
        setCollegeData({
          id: parsedData.id,
          name: parsedData.name
        })
        console.log('College Data:', parsedData)
      }
    } catch (error) {
      console.error('Error fetching college data:', error)
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!collegeData || !collegeData.id) {
      alert('College data not found or invalid. Please login again.')
      return
    }

    if (!imageUrl) {
      alert('Please provide an image URL')
      return
    }

    if (!weight || parseFloat(weight) <= 0) {
      alert('Please provide a valid weight')
      return
    }

    if (!price || parseInt(price) <= 0) {
      alert('Please provide a valid price')
      return
    }

    try {
      const notebookData = {
        college_id: collegeData.id,
        college_name: collegeData.name,
        caption: caption.trim(),
        notebook_image: imageUrl,
        weight_kg: parseFloat(weight),
        total_price: parseInt(price),
        status: 'pending'
      }
      
      console.log('Sending data:', notebookData);
      
      if (!notebookData.college_id || !notebookData.college_name) {
        throw new Error('College information is missing or invalid');
      }

      const response = await fetch('/api/collegeRoutes/upload-notebook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(notebookData)
      })

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to upload notebook data')
      }

      console.log('Upload successful:', data);
      alert('Notebook uploaded successfully!')
      
      // Reset form
      setImageUrl("")
      setPrice("")
      setCaption("")
      setWeight("")
      onClose()
      
    } catch (error) {
      console.error('Upload error:', error)
      alert(`Failed to upload notebook: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white p-0 rounded-lg">
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-emerald-500 rounded-md flex items-center justify-center text-white mr-3">
              <Upload className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold">Upload Notebook</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">
                Image URL
              </label>
              <input
                type="url"
                id="imageUrl"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Enter image URL"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                required
              />
              <p className="text-xs text-gray-500 mt-1">Enter a valid image URL</p>
            </div>

            <div className="mb-4">
              <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
                Weight (kg)
              </label>
              <input
                type="number"
                id="weight"
                step="0.1"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Enter weight in kg"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
              <p className="text-xs text-gray-500 mt-1">Enter the weight of notebooks in kilograms</p>
            </div>

            <div className="mb-4">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                Price (₹)/kg
              </label>
              <input
                type="number"
                id="price"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
              <p className="text-xs text-gray-500 mt-1">Enter the price for your notebook</p>
            </div>

            <div className="mb-4">
              <label htmlFor="caption" className="block text-sm font-medium text-gray-700 mb-1">
                Caption
              </label>
              <input
                type="text"
                id="caption"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="e.g., Slightly used, good condition"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                required
                maxLength={100}
              />
              <p className="text-xs text-gray-500 mt-1">Brief description for your notebook (max 100 characters)</p>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center justify-center px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors"
              >
                <Check className="w-4 h-4 mr-2" /> Upload Notebook
              </button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}

