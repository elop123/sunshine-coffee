import React from 'react'
import s from './Modal.module.scss'
import { useNavigate } from 'react-router-dom'
import { useCart } from 'react-use-cart'

const Modal = ({ isModalOpen, toggleModal, items }) => {
  const navigate = useNavigate()
  const { updateItemQuantity, removeItem } = useCart()

  const goToCheckout = () => {
    toggleModal(); 
    navigate('/checkout'); 
  }

  // Calculate subtotal
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const tax = (subtotal * 0.25).toFixed(2) 
  const total = (parseFloat(subtotal) + parseFloat(tax)).toFixed(2)

  return (
    <div className={`${s.modal} ${isModalOpen ? s.showModal : ''}`}>
      <button className={s.closeButton} onClick={toggleModal}>X</button>
      <h2 className={s.cartTitle}>Shopping Cart</h2>
      <div className={s.cartItems}>
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.id} className={s.cartItem}>
              <p className={s.text}>{item.name}</p>
              <div className={s.quantityControl}>
                <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                <span className={s.quantityButton}>{item.quantity}</span>
                <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                <button className={s.removeButton} onClick={() => removeItem(item.id)}>remove</button>
              </div>
              <p className={s.text}>{item.price * item.quantity} DKK</p>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
        <div className={s.summary}>
          <div className={s.summaryRow}>
            <span className={s.text}>Tax (25%)</span>
            <span className={s.text}>{tax} DKK</span>
          </div>
          <div className={s.summaryRow}>
            <span className={s.text}>Total</span>
            <span className={s.text}>{total} DKK</span>
          </div>
        </div>
        <button className={s.checkoutButton} onClick={goToCheckout}>Go to Checkout</button>
      </div>
    </div>
  )
}

export default Modal
