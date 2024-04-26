import React from "react";
import { GoodsItem } from './GoodsItem';

function GoodsList(props) {
    const { goods = [], addToBasket = Function.prototype } = props;

    if (!goods.length) {
        return <h3>Not found</h3>;
    }

    return (
        <div className='goods'>
            {goods.map((item) => (
                <GoodsItem key={item.imbdID} {...item} addToBasket={addToBasket} />
            ))}
        </div>
    );
}

export { GoodsList };