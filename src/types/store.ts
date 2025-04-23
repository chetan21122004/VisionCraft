export interface Notebook {
    type: string
    price: number
    stock: string
  }
  
  export interface Store {
    id: string
    name: string
    distance: number
    address: string
    phone: string
    isOpen: boolean
    notebooks: Notebook[]
  }
  
  