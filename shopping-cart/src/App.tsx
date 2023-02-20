import { products as initialProducts } from "./mock/products.json";
import { Cart, ProductList } from "./components/organims";
import { FC, useState } from "react";
import { Product } from "./interfaces";
import { Navbar } from "./components/molecules";
import { useFilters } from "./hooks/useFilters";
import { Footer } from "./components/ui";
import { IS_DEVELOPMENT } from "./config/config";

const App = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const {  filterProducts, setFilters } = useFilters();
  const filteredProducts = filterProducts(products);

  return (
    <>
      <Navbar products={products}  />
      <Cart />
      <ProductList products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </>
  );
};

export default App;
