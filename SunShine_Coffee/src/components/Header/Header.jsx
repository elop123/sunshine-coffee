import React from 'react'
import img from '../../assets/images/header_image.jpg'
import s from './Header.module.scss'


export const Header = () => {
  return (
    <header className={s.headerStyle}>
        <img  className={s.headStyle} src={img} alt="header_image" />
        <h2 className={s.title}>We Love Coffee</h2>
        <h2>And all the people who make it</h2>
    </header>

  )
}
