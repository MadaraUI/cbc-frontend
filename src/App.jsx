import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminPage from './pages/adminPage.jsx'
import HomePage from './pages/homePage.jsx'


function App() {

  return (
   <BrowserRouter>
   <div className='w-full h-[100vh] '>

    <Routes path="/">
      <Route path="/*" element={<HomePage/>}/>
      <Route path="/register" element={<h1>Register page</h1>}/>
      <Route path="/admin/*" element={<AdminPage/>}/>
      

    </Routes>

   </div>
   </BrowserRouter>
  )
}

export default App
