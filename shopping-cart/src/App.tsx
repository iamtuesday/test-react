import { products as initialProducts } from "./mock/products.json";
import { ProductList } from "./components/organims";
import { useState } from "react";
import { Product } from "./interfaces";
import { Navbar } from "./components/molecules";

interface FilterState {
  category: string;
  minPrice: number;
}

interface ProductsState {
  products: Product[];
  filters: FilterState;
}

const App = () => {
  const [products, setProducts] =
    useState<ProductsState["products"]>(initialProducts);
  const [filters, setFilters] = useState<ProductsState["filters"]>({
    category: "all",
    minPrice: 0,
  });

  const filterProducts = (products: Product[]) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };
  const filteredProducts = filterProducts(products);
  return (
    <>
      <Navbar products={products} onChangeFilters={setFilters}/>
      <ProductList products={filteredProducts} />
    </>
  );
};

export default App;
