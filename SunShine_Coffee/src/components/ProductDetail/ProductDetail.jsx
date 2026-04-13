import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import s from './ProductDetail.module.scss'
import { useCart } from 'react-use-cart'
import coffee1 from '../../assets/images/coffee1.jpg'
import coffee2 from '../../assets/images/coffee2.jpg'
import coffee3 from '../../assets/images/coffee3.jpg'
import coffee4 from '../../assets/images/coffee4.jpg'
import coffee5 from '../../assets/images/coffee5.jpg'

const imageMap = {
  'Espresso Blend': coffee1,
  'Colombian Supremo': coffee2,
  'Ethiopian Yirgacheffe': coffee3,
  'Brazilian Santos': coffee4,
  'Guatemala Antigua': coffee5
}

export const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { addItem } = useCart();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://sunshine-coffee-api.onrender.com/products/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch product');
                }
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                setError(error.message);
            }
            setLoading(false);
        };

        fetchProduct();
    }, [id]);

    if (loading) return <p>Loading product details...</p>;
    if (error) return <p>Error: {error}</p>;

    const handleAddToCart = () => {
        addItem(product);
        alert(`${product.name} was added to  your cart successfully!`);
    };
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
    return product ? (
        <div className={s.productDetailContainer}>
            <h2 className={s.productName}>{product.name}</h2>
            <div className={s.productContent}>
                <img src={imageMap[product.name]}
                                      alt={product.name}
                                      className={s.productImage} />
                <div className={s.descStyle}>
                    <div>
                    <p className={s.description}>{product.description}</p>
                    <p className={s.price}>Roast: <span className={s.roastCircles}>{roastBeans(product.roast)}</span></p>
                    <p className={s.price}><strong>{product.price} DKK</strong></p>
                    </div>
                    <button className={s.buttonStyle} onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    ) : null;
};
