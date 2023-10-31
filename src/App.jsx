import React from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import Resturnt from './components/resturent/Resturnt.jsx'
import Products from './components/products/Products.jsx'
import Home from './components/home/Home.jsx'
import './App.css'
import { Route , Routes ,BrowserRouter} from 'react-router-dom'
export default function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navbar />
     <Routes className='m-auto'>
      <Route className='nav-link' path='/'  element={<Home />} />
      <Route className='nav-link ' path='/products'  element={<Products />} />
      <Route className='nav-link' path='/resturent' element={<Resturnt />} />
      <Route  path='*' element={ <h2>Sad</h2>} />
    </Routes>
    </BrowserRouter>
   
    </>
    
  )
}
