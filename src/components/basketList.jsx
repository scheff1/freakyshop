import React from "react";
import { BasketItem } from "./basketitem";

function BasketList(props) {
    const { order = [], handleBasketShow = Function.prototype, removeFromBasket = Function.prototype, incQuantity = Function.prototype, decQuantity = Function.prototype, } = props;
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);
    return (
        <div className="basket-list">
            <div className="collection">
                <p className="cart-head">Корзина</p>
                {order.length ? (
                    order.map((item) => < BasketItem key={item.id}removeFromBasket={removeFromBasket}incQuantity={incQuantity}decQuantity={decQuantity}{...item} />)
                ) : (
                    <p className="cart-empty">Корзина пуста</p>
                )}
                <div className="total-block">
                    <p className="final-price">Общая стоимость заказа:</p>
                    <p className="final-price">{totalPrice} V</p>
                </div>
            </div>
        </div>
    );
}

export { BasketList };