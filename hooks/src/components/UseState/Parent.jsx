import React, { createContext, useState } from 'react'
export const Appcontext = createContext()

export const AppContext = createContext()

const Parent = ({children}) => {
    const [mainCount,setMainCount]= useState(50000)
    const [isDark,setisDark] = useState(true)
    const decreaseCount =()=>{
        setMainCount(mainCount-1000)
    }

  return <AppContext.Provider value={{mainCount,setMainCount,decreaseCount,isDark,setisDark}}>
    {children}
  </AppContext.Provider>
}

export default Parent

