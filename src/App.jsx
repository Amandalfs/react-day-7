import { useState } from 'react'
import Menu from './componetes/menu/menu.jsx';
import'./componetes/menu/EstiloMenu.css';
/* import'./componetes/AssinaturaNewsletter/EstiloAssinaturaNewsletter.css'; */

import AssinaturaNewsletter from './componetes/AssinaturaNewsletter/AssinaturaNewsletter.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu/>
      <AssinaturaNewsletter/>
    </>
  )
}

export default App
