import React from 'react'
import s from './Testimonies.module.scss'

export const Testimonies = () => {
  return (
    <section className={s.names}>
        <h2 className={s.titleStyle}>Testimonies</h2>
        <div className={s.articles}>
        <article className={s.nameStyle}>
        <h3 className={s.name}>John</h3>
        <p >"SunShine Coffee really delivers a great product. 
        I love their coffe and the guided flow is great..."</p>
        </article>
        <article className={s.nameStyle}>
        <h3 className={s.name}>Eva</h3>
        <p className={s.text}>"SunShine Coffee really delivers a great product. 
        I love their coffe and the guided flow is great..."</p>
        </article>
        <article className={s.nameStyle}>
        <h3 className={s.name}>Peter</h3>
        <p className={s.text}>"SunShine Coffee really delivers a great product. 
        I love their coffe and the guided flow is great..."</p>
        </article>
        <article className={s.nameStyle}>
        <h3 className={s.name}>Michelle</h3>
        <p >"SunShine Coffee really delivers a great product. 
        I love their coffe and the guided flow is great..."</p>
        </article>  
        </div>
    </section>
  )
}
