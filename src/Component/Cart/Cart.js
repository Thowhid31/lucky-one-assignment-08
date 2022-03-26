import React, { useState } from 'react';
import './Cart.css'

const Cart = (props) => {
    const {choose, handleChooseForMe} = props
    const [again, setAgain] = useState([])

    const againHandler = ( ) => {
        const newAgain = []
        setAgain(newAgain)
    }

    

    

    
    return (
        <div className='cart-div'>
            <div>
            <button onClick={() => handleChooseForMe(choose.name)} className='btn-cart-section'>Choose For Me</button><br></br>
            <button onClick={()=>againHandler(again.name)} className='btn-cart-section'>Choose Again</button>
            </div>
        </div>
    );
};

export default Cart;