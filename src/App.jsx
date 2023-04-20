import { useState } from 'react'
import Menu from './componetes/menu/menu.jsx';
import'./componetes/menu/EstiloMenu.css';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu></Menu>
    </>
  )
}

export default App
