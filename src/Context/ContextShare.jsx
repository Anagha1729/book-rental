import React ,{useState,createContext}from 'react'

export const editBookResponseContext = createContext()
export const cartViewContext=createContext()

function ContextShare({ children }) {

    const [editBookResponse, setEditBookResponse] = useState({})
    const [cartResponse, setCartResponse] = useState({})

    return (
      <>
  
        <editBookResponseContext.Provider value={{ editBookResponse, setEditBookResponse }}>
  <cartViewContext.Provider value={{cartResponse,setCartResponse}}>
  
            {children}
            </cartViewContext.Provider>
        </editBookResponseContext.Provider>
        
      </>
    )
  }
  


export default ContextShare