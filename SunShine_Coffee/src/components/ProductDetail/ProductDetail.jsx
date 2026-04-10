import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import s from './ProductDetail.module.scss'
import { useCart } from 'react-use-cart'


export const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { addItem } = useCart();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:8081/products/${id}`);
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

    return product ? (
        <div className={s.productDetailContainer}>
            <h2 className={s.productName}>{product.name}</h2>
            <div className={s.productContent}>
                <img src={product.image} alt={product.name} className={s.productImage} />
                <div className={s.descStyle}>
                    <p className={s.price}><strong>Roast Level:</strong> {product.roast}</p>
                    <p className={s.price}>{product.price} DKK</p>
                    <p className={s.description}>{product.description}</p>
                    <button className={s.buttonStyle} onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    ) : null;
};
