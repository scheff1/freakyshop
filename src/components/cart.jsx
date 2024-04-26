import React from "react";
import cart from '../img//cart.svg';

function Cart(props) {
    const { quantity = 0, handleBasketShow = Function.prototype } = props;
    return (
        <div className='cart'>
            <img className='cart-img' src={cart} onClick={handleBasketShow}/>
            {quantity ? <span>{quantity}</span> : null}
        </div>
    );
}

export { Cart };