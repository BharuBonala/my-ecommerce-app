import React from 'react'

import "./App.css"
import AllProductsPage from './AllProductsPage'
import ProductDetailsPage from './ProductDetailsPage'
import CartPage from './CartPage'
import AccountPage from './AccountPage'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from './HomePage'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" Component={HomePage}/>
      <Route exact path="/products" Component={AllProductsPage}/>
      <Route exact path="/productdetails" Component={ProductDetailsPage}/>
      <Route exact path="/cart" Component={CartPage}/>
      <Route exact path="/account" Component={AccountPage}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App