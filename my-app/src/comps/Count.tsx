import React from 'react'

type user={
  name:string,
  age:number
}

type props={
    count:number
    user:user[],
    app:React.ReactNode
}

const Count = ({count,user}:props) => {
  console.log(user)
  return (
    <>{count}</>

  )
}

export default Count