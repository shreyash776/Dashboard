import React, { createContext, useState } from 'react';


export const FilteredArrayContext = createContext({});


export const FilteredArrayProvider = ({ children }) => {
    const [filteredArray, setFilteredArray] = useState([]);


    return (
        <FilteredArrayContext.Provider value={{filteredArray, setFilteredArray}}>
            {children}
        </FilteredArrayContext.Provider>
    );
};
