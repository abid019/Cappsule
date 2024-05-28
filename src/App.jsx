import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchPage from './page/SearchPage'
import Product from './components/Product'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <SearchPage/>      
    </>
  )
}

export default App
