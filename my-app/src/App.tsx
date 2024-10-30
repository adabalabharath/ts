import { useState } from 'react'
import Counter from './comps/Counter'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter/>
    </>
  )
}

export default App
