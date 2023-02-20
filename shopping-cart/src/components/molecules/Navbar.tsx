import { Dispatch, FC, SetStateAction } from "react";
import { Filters } from "./Filters"
import { Product } from "../../interfaces";



interface NavbarPros{
  products: Product[];
}


export const Navbar:FC<NavbarPros> = ({products}) => {
  return (
    <nav className="navbar">
      <h1>Shop 🛒</h1>
      <Filters products={products}/>
    </nav>
  )
}
