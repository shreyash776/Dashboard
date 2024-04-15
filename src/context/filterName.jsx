import React, { createContext, useState } from 'react';


export const FilterNameContext = createContext();


export const FilterNameProvider = ({ children }) => {
    const [filterName, setFilterName] = useState("sector");


    return (
        <FilterNameContext.Provider value={{ filterName, setFilterName }}>
            {children}
        </FilterNameContext.Provider>
    );
};
