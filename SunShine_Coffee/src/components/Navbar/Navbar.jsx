import React from 'react'
import s from './Navbar.module.scss'
import icon1 from '../../assets/images/Shopping Cart.png'
import icon2 from '../../assets/images/Male User.png'
import logo from '../../../src/assets/images/Coffee.png'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import { useState } from 'react'
import Modal from '../Modal/Modal'

export const Navbar = () => {
  const { totalItems, items } = useCart()
  const [isModalOpen, setIsModalOpen]= useState(false)
 
const toggleModal = () =>{
  setIsModalOpen(!isModalOpen)
}

  return (
    <nav className={s.navbarStyle}>
      <div className={s.titleContainer}>
      <Link to="/">
      <h1 className={s.titleStyle}>SunShine Coffee</h1>
      </Link>
      </div>
            <div className={s.icons}>
            <div  className={s.cartIcon}>
            <img src={icon1} alt="shoppingCart" onClick={toggleModal}/>
            <span className={s.cartCount}>{totalItems}</span> 
            </div>
            <Link to="/login">
            <img src={icon2} alt="user" />
            </Link >
            </div>
            <div className={s.circle}>
            <Link to="/">
           <img src={logo} alt="coffee-logo" className={s.coffeeLogo} />
           </Link>
        </div>
        <Modal isModalOpen={isModalOpen} toggleModal={toggleModal} items={items} />
    </nav>
  )
}

