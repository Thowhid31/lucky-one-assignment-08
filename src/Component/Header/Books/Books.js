import React from 'react';
import Book from '../../Book/Book';
import Cart from '../../Cart/Cart';
import './Books.css'

const Books = () => {
    const books = [
        { id: 1, name: 'Wimpy Kid V-01', img: 'https://static.wikia.nocookie.net/doawk/images/d/d8/9781419729454-350x522.jpg', price: "$100" },
        { id: 2, name: 'Wimpy Kid V-02', img: 'https://static.wikia.nocookie.net/doawk/images/d/d8/9781419729454-350x522.jpg', price: "$101" },
        { id: 3, name: 'Wimpy Kid V-03', img: 'https://static.wikia.nocookie.net/doawk/images/d/d8/9781419729454-350x522.jpg', price: "$102" },
        { id: 4, name: 'Wimpy Kid V-04', img: 'https://static.wikia.nocookie.net/doawk/images/d/d8/9781419729454-350x522.jpg', price: "$103" },
        { id: 5, name: 'Wimpy Kid V-05', img: 'https://static.wikia.nocookie.net/doawk/images/d/d8/9781419729454-350x522.jpg', price: "$104" },
        { id: 6, name: 'Wimpy Kid V-06', img: 'https://static.wikia.nocookie.net/doawk/images/d/d8/9781419729454-350x522.jpg', price: "$105" },
        { id: 7, name: 'Wimpy Kid V-07', img: 'https://static.wikia.nocookie.net/doawk/images/d/d8/9781419729454-350x522.jpg', price: "$106" },
        { id: 8, name: 'Wimpy Kid V-08', img: 'https://static.wikia.nocookie.net/doawk/images/d/d8/9781419729454-350x522.jpg', price: "$107" },
        { id: 9, name: 'Wimpy Kid V-09', img: 'https://static.wikia.nocookie.net/doawk/images/d/d8/9781419729454-350x522.jpg', price: "$108" },
        { id: 10, name: 'Wimpy Kid V-10', img: 'https://static.wikia.nocookie.net/doawk/images/d/d8/9781419729454-350x522.jpg', price: "$109" }
    ]
    return (
        <div>
            <div className='books-container'>
                <div className='onebook-container'>
                    {
                        books.map(book => <Book key={book.id}
                            book={book}></Book>)
                    }
                </div>
                <div className='cart-container'>
                    <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default Books;