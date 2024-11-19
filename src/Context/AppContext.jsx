import React from 'react'
import { createContext } from 'react';

export const AppContext = createContext()
const AppContextProvider = (props) => {
    const currencySymbol = '$';
    const name = "Sunset Boulevard"

    const value = {
        currencySymbol,
        name,
        
        // Add other necessary context values here
    }

  return (
    <AppContext.Provider value={value} >
        {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;