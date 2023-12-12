import React, { createContext, useState } from 'react'
  
export const LangC=createContext()
export default function LangContext({children}) {
 
    const [Lang,setLang]=useState("FR")
  return (
    <div>
      <LangC.Provider value={{Lang,setLang}} >
        {children}
      </LangC.Provider>
    </div>
  )
}
