import React from 'react'
import s from './Shop.module.scss'
import { Link } from 'react-router-dom'

export const Shop = () => {
  return (
   <section className={s.sectionStyle}>
    <h2 className={s.titleStyle}>Shop now</h2>
    <div className={s.textStyle}>
    <p className={s.text} >Our delicious coffees wil get you brewing the best cup of coffee you ever tasted in no 
        time at all. And the best part of it? It is totally organic, fair trade and sustainably 
        sourced. So get brewing</p>
    <Link to="/products">
    <button className={s.buttonStyle}>Go to products</button>
    </Link>
    </div>
   </section>
  )
}
