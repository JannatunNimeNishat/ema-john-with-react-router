import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
//css
import './Orders.css'
import { removeFromDb } from '../../utilities/fakedb';
const Orders = () => {
    const savedCart = useLoaderData();
    const [cart,setCart] = useState(savedCart)

    const handleRemoveFromCart = (id) =>{
        const newCart = cart.filter(product => product.id !== id);
        setCart(newCart)
        removeFromDb(id)
    }
    console.log(cart);
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product => <ReviewItem
                    key={product.id}
                    product={product}
                    handleRemoveFromCart={handleRemoveFromCart}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;