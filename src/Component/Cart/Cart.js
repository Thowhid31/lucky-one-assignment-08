
import './Cart.css'

const Cart = ({handleChooseForMe, handleChooseAgain}) => {

    return (
        <div className='cart-div'>
            <div>
            <button onClick={handleChooseForMe} className='btn-cart-section'>Choose For Me</button><br></br>
            <button onClick={handleChooseAgain} className='btn-cart-section'>Choose Again</button>
            </div>
        </div>
    );
};

export default Cart;