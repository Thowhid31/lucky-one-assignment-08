import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div className='cart-div'>
            <div>
            <button className='btn-cart-section'>Choose For Me</button><br></br>
            <button className='btn-cart-section'>Choose Again</button>
            </div>
        </div>
    );
};

export default Cart;