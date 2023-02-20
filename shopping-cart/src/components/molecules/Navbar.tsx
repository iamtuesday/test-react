import { Dispatch, FC, SetStateAction } from "react";
import { Filters } from "./Filters"
import { Product } from "../../interfaces";

interface FilterState {
  category: string;
  minPrice: number;
}

interface NavbarPros{
  products: Product[];
  onChangeFilters: Dispatch<SetStateAction<FilterState>>
}


export const Navbar:FC<NavbarPros> = ({products, onChangeFilters}) => {
  return (
    <nav className="navbar">
      <h1>Shop 🛒</h1>
      <Filters products={products} onChangeFilters={onChangeFilters}/>
    </nav>
  )
}
