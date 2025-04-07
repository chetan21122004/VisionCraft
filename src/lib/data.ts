export interface Product {
  id: string
  name: string
  price: number
  description: string
  image: string
  details?: string
}

export const products: Product[] = [
  {
    "id": "5e5610fa-735e-400b-af3c-137700ccd166",
    "name": "Big",
    "price": 30,
    "description": "150+ pgs with A4 size book",
    "image": "https://m.media-amazon.com/images/I/61oUmsL+mzL._SX522_.jpg"
  },
  {
    "id": "d6fa0c08-d308-42d4-89ba-3698975a05bd",
    "name": "Small", "price": 20,
    "description": "around 100pgs and A4 size or 150+ pgs but small size",
    "image": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRcLHvV5xhGYzB8n9Q-z5DzF0_L6nJjCB6pOInzhWYQ5gtwCitKPQvHKAHeQnp_T71dKgqPXchjwIru8xxQ1GucTZ7DA8bDWa0TH9ZlsVN1bblBn2JGs4V-l_YyX7o62Lnj4oE2QLU&usqp=CAc"
  },
  {
    "id": "f16bee18-15da-465f-8df7-42a4df9d097c",
    "name": "Thin ",
    "price": 15,
    "description": "100 pgs or less than 100pgs, Good for the small assignments,Good for ",
    "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTuvJxzbykoCkNNpLJ-fQBLNxXxcdLY7cNWeJ9eSdFXd71ZOXxjenKK9vM8j0EcuRoZBjbjXh-JD1OgcVoR5drvLnSWxmkI1bPgRcPUK1oJMewgT1Ub_MJL0Z6XwWqRkcWp1Hlc0OzrSw&usqp=CAc"
  }

]