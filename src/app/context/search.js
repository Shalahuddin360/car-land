"use client"
import { createContext, useContext, useState } from "react";
// createContext
export const SearchContext = createContext();
//provider
export const SearchContextProvider = ({children})=>{
    const [searchActive,setSearchActive] = useState(false)


    /**
     * const context = {
     * name : 'Shalahuddin'
     * id:20181039
     * }
     */
    return <SearchContext.Provider value={{searchActive,setSearchActive}}>
     {children}
    </SearchContext.Provider>
};

export const useSearchContext =()=> useContext(SearchContext)