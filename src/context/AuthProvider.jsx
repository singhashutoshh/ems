import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'


export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  // localStorage.clear()
 
      const [userData, SetuserData] = useState(null)

      useEffect(() => {
        setLocalStorage()
       const {employees} = getLocalStorage()
       SetuserData(employees)
      }, [])
      
      // const data = getLocalStorage()
      // console.log(data.employees);

  return (
    <div>
        <AuthContext.Provider value={[userData,SetuserData]} >
         {children}
        </AuthContext.Provider>
     </div>
  )
}

export default AuthProvider;