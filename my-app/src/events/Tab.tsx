import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'

type User={

        firstName:string,
        lastName:string,
        email:string
    
}
type props={
    user:User[]
}
const Tab = ({user}:props) => {
  return (
    <Table>
     <TableHead>
        <TableRow>
        <TableCell>First Name</TableCell>
        <TableCell>Last Name</TableCell>
        <TableCell>Email</TableCell>
        </TableRow>
     </TableHead>
     <TableBody>
        {user.map(x=>{
            return(<>
            <TableRow>
            <TableCell>{x.firstName}</TableCell>
            <TableCell>{x.lastName}</TableCell>
            <TableCell>{x.email}</TableCell>
            </TableRow>
            </>)
        })}
     </TableBody>
    </Table>
  )
}

export default Tab