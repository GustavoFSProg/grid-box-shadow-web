import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Cart from './Cart'
import { CartProvider } from './cartContext'
import Profile from './Profile'

function Routers() {

  return (
    <CartProvider >

    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  )
}

export default Routers