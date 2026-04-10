import React from 'react'
import { Shop } from '../../components/Shop/Shop'
import { About } from '../../components/About/About'
import { Testimonies } from '../../components/Testimonies/Testimonies'
import './Home.module.scss'



export const Home = () => {
  return (
   <>
   
    <About />
    <Shop />
    <Testimonies />
   </>

  )
}
