import React,{useState} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Create from './Components/Create'
export const API_URL='https://65977d72668d248edf22e4bd.mockapi.io/users';
import Edit from './Components/Edit'
import UserContext from './utils/UserContextComponent'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<UserContext><Home /></UserContext> } />
        <Route path='create' element={ <UserContext><Create  /></UserContext> }/>
        <Route path='edit' element={<UserContext> <Edit  /></UserContext>  }/>
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App