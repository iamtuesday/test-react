import { useState } from "react";
import { Product } from "../interfaces";
import { useFiltersContext } from "../context/filters.context";

export const useFilters = () => {
  // const [filters, setFilters] = useState<ProductsState["filters"]>({
  //   category: "all",
  //   minPrice: 0,
  // });

  const {filters, setFilters} = useFiltersContext();

  const filterProducts = (products: Product[]) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  return {
    filters,
    filterProducts,
    setFilters,
  };
};
