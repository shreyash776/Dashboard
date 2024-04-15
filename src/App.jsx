import React from "react";

import Layout from "./components/Layout";
import { FilterProvider } from "./context/filter";
import { FilterNameProvider } from "./context/filterName";
import { FilteredArrayProvider } from "./context/filteredArray";
import "./index.css";

const App = () => {
  return (
    <FilterNameProvider>
      <FilterProvider>
        <FilteredArrayProvider>
          <Layout />
        </FilteredArrayProvider>
      </FilterProvider>
    </FilterNameProvider>
  );
};
export default App;
