import React, { createContext, useState } from 'react'

type props={
    children:React.ReactNode
}

type User={
    firstName:string,
    lastName:string,
    email:string
}

type ContextType={
    user:User,
    setUser:React.Dispatch<React.SetStateAction<User>>
}
export const UserContext=createContext({} as ContextType)

const UserContextProvider = ({children}:props) => {

    const [user,setUser]=useState<User>({
        firstName:'',
        lastName:'',
        email:''
    })
   
  return (
    <UserContext.Provider value={{user,setUser}}>{children}</UserContext.Provider>
  )
}

export default UserContextProvider