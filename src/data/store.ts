import type { Store } from "@/types/store"

export const stores: Store[] = [
  {
    id: "1",
    name: "Central Stationery Store",
    distance: 0.8,
    address: "123 Main Street, Downtown Area, City",
    phone: "+1 (234) 567-890",
    isOpen: true,
    notebooks: [
      { type: "Small", price: 20, stock: "25 left" },
      { type: "Big", price: 30, stock: "5 left" },
      { type: "Thin", price: 15, stock: "Out of stock" },
    ],
  },
  {
    id: "2",
    name: "City Books & Stationery",
    distance: 1.2,
    address: "456 Oak Street, Business District, City",
    phone: "+1 (234) 567-891",
    isOpen: true,
    notebooks: [
      { type: "Small", price: 20, stock: "40 left" },
      { type: "Big", price: 30, stock: "15 left" },
      { type: "Thin", price: 15, stock: "3 left" },
    ],
  },
  {
    id: "3",
    name: "Metro Stationery Hub",
    distance: 1.5,
    address: "789 Pine Street, Metro Area, City",
    phone: "+1 (234) 567-892",
    isOpen: true,
    notebooks: [
      { type: "Small", price: 20, stock: "30 left" },
      { type: "Big", price: 30, stock: "20 left" },
      { type: "Thin", price: 15, stock: "8 left" },
    ],
  },
  {
    id: "4",
    name: "Super Stationery Store",
    distance: 1.8,
    address: "321 Elm Street, Suburb Area, City",
    phone: "+1 (234) 567-893",
    isOpen: true,
    notebooks: [
      { type: "Small", price: 20, stock: "35 left" },
      { type: "Big", price: 30, stock: "4 left" },
      { type: "Thin", price: 15, stock: "12 left" },
    ],
  },
  {
    id: "5",
    name: "Mega Book Store",
    distance: 2.1,
    address: "567 Maple Street, East Area, City",
    phone: "+1 (234) 567-894",
    isOpen: false,
    notebooks: [
      { type: "Small", price: 20, stock: "45 left" },
      { type: "Big", price: 30, stock: "22 left" },
      { type: "Thin", price: 15, stock: "18 left" },
    ],
  },
  {
    id: "6",
    name: "Student Supply Center",
    distance: 2.5,
    address: "890 Cedar Street, West Area, City",
    phone: "+1 (234) 567-895",
    isOpen: true,
    notebooks: [
      { type: "Small", price: 20, stock: "6 left" },
      { type: "Big", price: 30, stock: "25 left" },
      { type: "Thin", price: 15, stock: "Out of stock" },
    ],
  },
]

