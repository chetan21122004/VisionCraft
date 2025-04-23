"use client"


import { useState, useEffect } from "react"
import { Send } from "lucide-react"


export default function CommentSection({ storeId }) {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState("")
  const [userName, setUserName] = useState("")

  // Load comments from localStorage on component mount
  useEffect(() => {
    const savedComments = localStorage.getItem(`store-${storeId}-comments`)
    if (savedComments) {
      setComments(JSON.parse(savedComments))
    }

    const savedUserName = localStorage.getItem("user-name")
    if (savedUserName) {
      setUserName(savedUserName)
    }
  }, [storeId])

  // Save comments to localStorage when they change
  useEffect(() => {
    localStorage.setItem(`store-${storeId}-comments`, JSON.stringify(comments))
  }, [comments, storeId])

  // Save username to localStorage when it changes
  useEffect(() => {
    if (userName) {
      localStorage.setItem("user-name", userName)
    }
  }, [userName])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newComment.trim() || !userName.trim()) return

    const newCommentObj = {
      id: Date.now().toString(),
      author: userName,
      text: newComment,
      date: new Date().toLocaleDateString(),
    }

    setComments([...comments, newCommentObj])
    setNewComment("")
  }

  return (
    <div className="mt-4 pt-4 border-t">
      <h3 className="font-medium text-gray-800 mb-3">Comments</h3>

      {comments.length === 0 ? (
        <p className="text-sm text-gray-500 italic mb-4">No comments yet. Be the first to comment!</p>
      ) : (
        <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
          {comments.map((comment) => (
            <div key={comment.id} className="bg-gray-50 p-3 rounded-lg">
              <div className="flex justify-between items-start">
                <span className="font-medium text-sm">{comment.author}</span>
                <span className="text-xs text-gray-500">{comment.date}</span>
              </div>
              <p className="text-sm mt-1">{comment.text}</p>
            </div>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-2">
        {!userName && (
          <input
            type="text"
            placeholder="Your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            required
          />
        )}
        <div className="flex">
          <input
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="flex-1 px-3 py-2 text-sm border rounded-l-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            required
          />
          <button
            type="submit"
            className="bg-emerald-500 text-white px-3 py-2 rounded-r-md hover:bg-emerald-600 transition-colors"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  )
}

