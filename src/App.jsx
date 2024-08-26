import { useState } from 'react'
import './bootstrap.min.css'
import './App.css'
import History from './Pages/History'
import Home from './Pages/Home'
import Landing from './Pages/Landing'
import Header from './Components/Header'
import Footer from './Components/Footer'
import {Routes,Route} from 'react-router-dom'

function App() {
  

  return (
    <>

      
      <Header/>
      <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/history' element={<History/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
