import { useState } from 'react'
import './bootstrap.min.css'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';

import History from './Pages/History'
import Home from './Pages/Home'
import Landing from './Pages/Landing'
import Header from './Components/Header'
import Footer from './Components/Footer'
import {Routes,Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
// import Login from './Pages/Login';
// import Register from './Pages/Register';

function App() {
  

  return (
    <>

      
      <Header/>
      <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/history' element={<History/>}/>
      {/* <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/> */}
      </Routes>
      <Footer/>
      <ToastContainer/>

    </>
  )
}

export default App
