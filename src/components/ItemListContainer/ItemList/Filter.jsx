import { useState } from "react";

export const Filter = ({ children, product }) => {
  const [filterState, setFilterState] = useState("");

  const handleFilterChange = (e) => {
    setFilterState(e.target.value);
  };
  return children({ product, filterState, handleFilterChange });
};
