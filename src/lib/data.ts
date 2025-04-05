export interface Product {
    id: string
    name: string
    price: number
    description: string
    image: string
    details?: string
    category?: string // Optional: Add categories later
  }
  
  export const products: Product[] = [
    {
      id: "small-notebook",
      name: "Small Notebook",
      price: 20,
      description: "100 pages of premium recycled paper, eco-friendly cover",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      details: "Our Small Notebook is perfect for quick notes...",
    },
    {
      id: "big-notebook",
      name: "Big Notebook",
      price: 30,
      description: "200 pages of premium recycled paper, durable binding",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      details: "The Big Notebook offers ample space...",
    },
    {
      id: "thin-notebook",
      name: "Thin Notebook",
      price: 15,
      description: "50 pages of premium recycled paper, lightweight design",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      details: "Our Thin Notebook is ultra-lightweight...",
    },
    {
      id: "premium-repurpose-notebook",
      name: "Premium Repurpose Notebook",
      price: 1999,
      description: "Luxury recycled paper notebook with leather cover",
      image: "https://images.unsplash.com/photo-1629196916199-60a8521c6f72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      details: "Our flagship Premium Repurpose Notebook...",
    },
    {
      id: "slim-repurpose-notebook",
      name: "Slim Repurpose Notebook",
      price: 1599,
      description: "Compact luxury notebook with recycled paper",
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      details: "The Slim Repurpose Notebook offers...",
    }
  ];