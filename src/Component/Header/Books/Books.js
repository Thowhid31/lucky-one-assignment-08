import React from 'react';
import Book from '../../Book/Book';
import Cart from '../../Cart/Cart';
import './Books.css'

const Books = () => {
    const books = [
        { id: 1, name: 'Wimpy Kid V-01', img: 'https://static.wikia.nocookie.net/doawk/images/d/d8/9781419729454-350x522.jpg', price: "$100" },
        { id: 2, name: 'Wimpy Kid V-02', img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1360095964l/1809465._SX318_.jpg', price: "$101" },
        { id: 3, name: 'Wimpy Kid V-03', img: 'https://images-na.ssl-images-amazon.com/images/I/51xlOX2o9-L._SX321_BO1,204,203,200_.jpg', price: "$102" },
        { id: 4, name: 'Wimpy Kid V-04', img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388178896l/6578293.jpg', price: "$103" },
        { id: 5, name: 'Wimpy Kid V-05', img: 'https://kbimages1-a.akamaihd.net/38c32f36-2484-41c3-94b0-1644714daac6/1200/1200/False/diary-of-a-wimpy-kid-the-ugly-truth-book-5.jpg', price: "$104" },
        { id: 6, name: 'Wimpy Kid V-06', img: 'https://kbimages1-a.akamaihd.net/c209bfe7-14d5-4153-8e3b-2a3685f8f254/1200/1200/False/diary-of-a-wimpy-kid-cabin-fever-book-6.jpg', price: "$105" },
        { id: 7, name: 'Wimpy Kid V-07', img: 'https://images-na.ssl-images-amazon.com/images/I/51nApVju+7L.jpg', price: "$106" },
        { id: 8, name: 'Wimpy Kid V-08', img: 'https://images-na.ssl-images-amazon.com/images/I/51WVlYqD1RL._SX339_BO1,204,203,200_.jpg', price: "$107" },
        { id: 9, name: 'Wimpy Kid V-09', img: 'https://images-na.ssl-images-amazon.com/images/I/81HQLooCFwL.jpg', price: "$108" },
        { id: 10, name: 'Wimpy Kid V-10', img: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1413/9780141377094.jpg', price: "$109" },
        { id: 11, name: 'Wimpy Kid V-11', img: 'https://i5.walmartimages.com/asr/289fc334-0f01-4b3b-bbe5-98307fb7e291.0991dbfacb8969a2b0ce3605e36fba4c.jpeg', price: "$110" }
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