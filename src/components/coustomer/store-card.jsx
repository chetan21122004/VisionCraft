"use client"

import { useState } from "react"
import { MapPin, Phone, MessageSquare, ArrowRight } from "lucide-react"
import CommentSection from "./comment-section"



export default function StoreCard({ store }) {
  const [showComments, setShowComments] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      <div className="relative">
        <div className="bg-gray-200 h-32 flex items-center justify-center">
          <div className="bg-gray-300 rounded-full h-16 w-16 flex items-center justify-center text-gray-500">Image</div>
        </div>
        <div
          className={`absolute top-2 right-2 px-2 py-1 text-xs font-medium rounded ${store.isOpen ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}
        >
          {store.isOpen ? "Open" : "Closed"}
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-lg font-semibold">{store.name}</h2>
        <p className="text-sm text-gray-500 mb-2">{store.distance} km away</p>

        <div className="flex items-start mb-1">
          <MapPin className="h-4 w-4 text-gray-400 mr-2 mt-0.5" />
          <p className="text-sm text-gray-600">{store.address}</p>
        </div>
        <div className="flex items-center mb-4">
          <Phone className="h-4 w-4 text-gray-400 mr-2" />
          <p className="text-sm text-gray-600">{store.phone}</p>
        </div>

        {/* Notebook Types Table */}
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 font-medium">Notebook Type</th>
                <th className="text-left py-2 font-medium">Price</th>
                <th className="text-left py-2 font-medium">Stock</th>
              </tr>
            </thead>
            <tbody>
              {store.notebooks.map((notebook) => (
                <tr key={notebook.type} className="border-b last:border-b-0">
                  <td className="py-2">{notebook.type}</td>
                  <td className="py-2">₹{notebook.price}</td>
                  <td
                    className={`py-2 ${notebook.stock === "Out of stock" ? "text-red-500" : notebook.stock.includes("left") && Number.parseInt(notebook.stock) <= 5 ? "text-orange-500" : "text-green-500"}`}
                  >
                    {notebook.stock}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-2">
          <a
            href={`tel:${store.phone}`}
            className="bg-emerald-500 text-white text-center py-2 px-3 rounded flex items-center justify-center text-sm hover:bg-emerald-600 transition-colors"
          >
            <Phone className="h-4 w-4 mr-1" />
            <span>Call Store</span>
          </a>
          <a
            href={`https://wa.me/${store.phone.replace(/[^0-9]/g, "")}`}
            className="bg-green-500 text-white text-center py-2 px-3 rounded flex items-center justify-center text-sm hover:bg-green-600 transition-colors"
          >
            <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>WhatsApp</span>
          </a>
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(store.address)}`}
            className="bg-blue-500 text-white text-center py-2 px-3 rounded flex items-center justify-center text-sm hover:bg-blue-600 transition-colors"
          >
            <ArrowRight className="h-4 w-4 mr-1" />
            <span>Directions</span>
          </a>
        </div>

        {/* Comments Toggle Button */}
        <button
          onClick={() => setShowComments(!showComments)}
          className="w-full mt-3 flex items-center justify-center text-sm text-gray-600 hover:text-gray-800 transition-colors"
        >
          <MessageSquare className="h-4 w-4 mr-1" />
          <span>{showComments ? "Hide Comments" : "Show Comments"}</span>
        </button>

        {/* Comments Section */}
        {showComments && <CommentSection storeId={store.id} />}
      </div>
    </div>
  )
}

