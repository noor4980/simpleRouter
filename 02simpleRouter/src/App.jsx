import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductDetails from './components/ProductDetails'
import Account from './components/Account'
import UserDetails from './components/UserDetails'

function App() {
  const [list, setList] = useState([])

  const addlist = (username, password, email, confirmPassword) => {
    const newUser = { username, password, email, confirmPassword };
        setList([newUser])
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home addlist={addlist} /></>
    },
    {
      path: "/userdetails",
      element: <><Navbar /><UserDetails list={list} /></>
    },
    {
      path: "/productdetails",
      element: <><Navbar /><ProductDetails list={list} /></>
    },
    {
      path: "/account",
      element: <><Navbar /><Account /></>
    }
  ])
 
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
