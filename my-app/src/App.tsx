import { useState } from 'react'
import Counter from './comps/props/Counter'
import Form from './events/Form'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Form/>
    </>
  )
}

export default App
