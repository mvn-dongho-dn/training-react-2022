import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './AboutUs'
import Home from './Home'
import ProductDetail from './ProductDetail'
import Products from './Products'

export default function Features() {
  return (
    <>
      <Routes>
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}
