import React, { useEffect, useState } from 'react'
import s from './Product.module.scss'
import { useCart } from 'react-use-cart'
import { Link } from 'react-router-dom'

export const Product = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [cart, setCart] = useState([])
    const { addItem } = useCart()
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch('http://localhost:8081/products')
          if (!response.ok) {
            throw new Error('Failed to fetch products')
          }
          const data = await response.json()
          setProducts(data.slice(0, 6))
          //console.log(data)
        } catch (error) {
          setError(error.message)
        } 
          setLoading(false)
        
      }
  
      fetchProducts()
    }, [])
  
    if (loading) return <p>Loading products...</p>
    if (error) return <p>Error: {error}</p>

  const handleAddToCart = (product) => {
      addItem(product); 
      console.log(`Added : ${product.name}, ${product.price} DKK`)
  }

    // Function for coffee beans roast level
    const roastBeans = (roastLevel) => {
      const brownColor = '#B46538';
      const blackColor = '#000'; 
      const totalCircles = 5; 
  
      return Array.from({ length: totalCircles }, (_, index) => (
        <span
          key={index}
          className={s.roastCircle}
          style={{
            backgroundColor: index < roastLevel ? brownColor : blackColor,
          }}
        ></span>
      ));
    };
  

    return (
      <section className={s.productContainer}>
        <h2 className={s.title}>Our picks for you</h2>
        <div className={s.productStyle}>
          {products.map((product) => (
            <div key={product.id} className={s.cardStyle} >
              <Link to={`/products/${product.id}`}>
              <h3 className={s.productName}>{product.name}</h3>
              </Link>
              <Link to={`/products/${product.id}`}>
              <img src={product.image} alt={product.name} />
              </Link>
              <p className={s.price}>Roast: <span className={s.roastCircles}>{roastBeans(product.roast)}</span></p>
              <p className={s.price}>{product.price} DKK</p>
              <button className={s.buttonStyle} onClick={() => handleAddToCart(product)}>Add to cart</button>
            </div>
          ))}
        </div>
      </section>
    )
  }