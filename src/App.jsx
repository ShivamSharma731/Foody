import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {Route,Routes} from 'react-router-dom'
import Cart from "./pages/Cart/Cart"
import Home from "./pages/Home/Home"
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder"
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import Login from './components/Login/Login'

const App = () => {

  const [showlogin,setShowLogin] = useState(false);

  return (
    <>
    {showlogin?<Login setShowLogin={setShowLogin}/>:<></>}
    <div className="app">
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
   <Route path ="/" element={<Home/>}></Route>
   <Route path ="/cart" element={<Cart/>}></Route>
   <Route path ="/order" element={<PlaceOrder/>}></Route>
      </Routes>
    </div>
    <Footer />
    </>
    
  )
}
 
export default App
