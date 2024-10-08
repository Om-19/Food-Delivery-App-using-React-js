import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          < Route path='/' element={<Home />} />
        </Routes>
      </div>
    </>
  )
}

export default App
