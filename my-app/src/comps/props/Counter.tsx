import React, { useState } from 'react'
import Count from './Count'
import App from '../../App'

const Counter = () => {
    const [count,setCount]=useState<number>(0)
    const user=[{
        name:'hareen',
        age:24
    }]
  return (
    <div>
        <button onClick={()=>setCount(count-1)}>-</button>
        <Count count={count} user={user} app={<App/>}/>
        <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}

export default Counter