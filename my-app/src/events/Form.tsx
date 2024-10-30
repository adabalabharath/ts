import React, { useContext, useState } from 'react'
import {Button, TextField} from '@mui/material'
import Tab from './Tab'
import { UserContext } from '../context/UserContextProvider'

type User={
    firstName:string,
    lastName:string,
    email:string
}

const Form = () => {
    const context=useContext(UserContext)

    const {user,setUser}=context

    const [users, setUsers] = useState<User[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prevUser:User) => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        setUsers(prevUsers => [...prevUsers, user]);
        setUser({ firstName: '', lastName: '', email: '' }); // Reset form
    };
  return (
    <>
   <TextField variant='outlined' label='FirstName' name='firstName' value={user.firstName} onChange={handleChange}/>
   <TextField variant='outlined' label='lastName' name='lastName' value={user.lastName} onChange={handleChange}/>
   <TextField variant='outlined' label='email' name='email' value={user.email} onChange={handleChange}/>
   <Button onClick={handleSubmit}>submit</Button>
   <Tab user={users}/>
   </>
  )
}

export default Form