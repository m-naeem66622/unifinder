import React, { createContext, useContext, useState } from 'react'

const ListContext = createContext();

function ListProvider({ children }) {
    const [list, setList] = useState([])
  return (
      <ListContext.Provider value={{list, setList}}>
          {children}
    </ListContext.Provider>
  )
}

export const useListContext = ()=>useContext(ListContext)

export default ListProvider