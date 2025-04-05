"use client"

import type React from "react"

import { useState } from "react"
import { Upload, Check } from "lucide-react"
import { Dialog, DialogContent } from "../ui/dialog"

interface UploadNotebookModalProps {
  isOpen: boolean
  onClose: () => void
}

export function UploadNotebookModal({ isOpen, onClose }: UploadNotebookModalProps) {
  const [dragActive, setDragActive] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [price, setPrice] = useState("")
  const [caption, setCaption] = useState("")

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0])
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log({ file, price, caption })
    onClose()
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Upload Image</label>
              <div
                className={`border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center ${
                  dragActive ? "border-emerald-500 bg-emerald-50" : "border-gray-300"
                }`}
                onDragEnter={handleDrag}
                onDragOver={handleDrag}
                onDragLeave={handleDrag}
                onDrop={handleDrop}
              >
                {file ? (
                  <div className="text-center">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Check className="w-6 h-6 text-emerald-500" />
                    </div>
                    <p className="text-sm font-medium text-gray-900">{file.name}</p>
                    <button type="button" className="text-xs text-emerald-600 mt-1" onClick={() => setFile(null)}>
                      Remove
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                      <Upload className="w-6 h-6 text-gray-400" />
                    </div>
                    <p className="text-sm text-center">
                      <span className="text-emerald-500 font-medium">Upload a file</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 mt-1">PNG, JPG, GIF up to 10MB</p>
                    <input
                      type="file"
                      className="hidden"
                      id="file-upload"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                    <label
                      htmlFor="file-upload"
                      className="mt-3 inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md text-emerald-700 bg-emerald-100 hover:bg-emerald-200 cursor-pointer"
                    >
                      Select File
                    </label>
                  </>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                Price
              </label>
              <input
                type="text"
                id="price"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
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

