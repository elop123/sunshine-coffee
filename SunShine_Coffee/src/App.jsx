import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainLayout } from './Layout/MainLayout/MainLayout'
import { Home } from './pages/Home/Home'
import { Products } from './pages/Products/Products'
import { Login } from './pages/Login/Login'
import { Shipping } from './pages/Shipping/Shipping'
import {CartProvider} from 'react-use-cart'
import Checkout from './pages/CheckoutPage/Checkout'
import './App.css';
import Background from './components/Background/Background'
import { SingleProduct } from './pages/SingleProduct/SingleProduct'

function App() {
  return (
    <CartProvider>
    <Router>
      <Background>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />  
          <Route path="/products" element={<Products />} />  
          <Route path="/products/:id" element={<SingleProduct />} /> 
          <Route path="/login" element={<Login />} />  
          <Route path="/shipping" element={<Shipping />} />  
          <Route path="/checkout" element={<Checkout />} />  
        </Route>
      </Routes>
      </Background>
    </Router>
    </CartProvider>
  );
}

export  default App