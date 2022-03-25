import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Book.css'

const Book = (props) => {
    const {book, handleAddToCart} = props
    const {name, img, price} = props.book;
    
    // console.log(props);
    return (
        <div className='book'>
            <div >
                <img src={img} alt=""/>
                <div className='book-info'>
                <h3>{name}</h3>
                <p>Only for: {price}</p>
                </div>
            </div>
            <button onClick={() => handleAddToCart(book)} className='btn-cart'><p>Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </p>
            </button>
            <div>
                
            </div>
        </div>
    );
};

export default Book;