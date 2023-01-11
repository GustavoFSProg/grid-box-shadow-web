import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Cart from './Cart'
import Profile from './Profile'

function Routers() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routers