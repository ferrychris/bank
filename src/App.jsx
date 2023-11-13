import React from 'react'
import './index.css'
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/home'

import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Footer from './components/footer'
import Contact from './pages/Contact'
import { DashboardOverview } from './components/Dashboardfams'
import { Analytics } from './components/Analytics'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
   
    <Routes>
          <Route path="/" index element={<Home/>}/>
          <Route path="/Home" element={<Home/>}/>
        
         <Route path="/Dashboard" element={<Dashboard/>}/>
         <Route path="/Login" element={<Login/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path='/' element={<DashboardOverview/>}/>
              <Route path='Analytics' element={<Analytics/>}/>
    
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App