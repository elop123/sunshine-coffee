import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { Outlet, useLocation} from 'react-router-dom'
import { Footer } from '../../components/Footer/Footer'
import {Header } from '../../components/Header/Header'
import Cookie from '../../components/Cookie/Cookie'


export const MainLayout = () => {
const location = useLocation();

console.log("Current Path:", location.pathname)

// Check the current route 
const isLoginPage = location.pathname === '/login'
const isShippingPage = location.pathname === '/shipping'
const isCheckOutPage = location.pathname === '/checkout'


  return (
   <>
   <Navbar/>
   {!isLoginPage && !isShippingPage && !isCheckOutPage && <Header />} 
   <Outlet/>
   <Footer/>
   <Cookie />
   </>
  )
}
