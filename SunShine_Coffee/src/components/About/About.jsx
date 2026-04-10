import React from 'react'
import img1 from '../../assets/images/Rectangle 2 (1).png'
import img2 from '../../assets/images/Rectangle 3 (1).png'
import img3 from '../../assets/images/Rectangle 4.png'
import s from './About.module.scss'

export const About = () => {
  return (
    <section className={s.salesStyle}>
      <article className={s.salesItem}>
        <h3 className={s.title}>The right beans</h3>
        <p className={s.text}>Our journey begins with a deep-rooted connection to the land, 
          as we seek out farmers who uphold environmentally-friendly practices and prioritize 
          the well-being of their communities. Through personal relationships and respect,
           we collaborate closely with these farmers, understanding their methods and values.</p>
        <img src={img1} alt="beans" />
      </article>
      <article className={s.salesItem}>
        <h3 className={s.title}>Carefully handled</h3>
        <p className={s.text}>Each bean is carefully handpicked at the peak of ripeness, ensuring 
          optimal flavor and aroma. We embrace diversity in our selection, cherishing the unique 
          characteristics of each region and varietal. From the lush mountainsides to the sun-kissed 
          valleys, we traverse the landscapes in search of perfection.</p>
        <img src={img2} alt="sack" />
      </article>
      <article className={s.salesItem}>
        <h3 className={s.title}>From us to you</h3>
        <p className={s.text}>Our commitment to organic farming means that our beans are free from 
          harmful chemicals, allowing the natural flavors to shine through. We believe in transparency 
          and traceability, providing our customer.We do everything for your coffee, so you can enjouy it in everyday in your life.It is your perfect coffee.</p>
        <img src={img3} alt="coffee" />
      </article>
    </section>
  )
}
