import React from "react";

function GoodsItem(props) {
    const { id, name, description, price, full_background, addToBasket = Function.prototype, } = props;

    const defaultImage = 'https://i.pinimg.com/736x/1f/0d/52/1f0d52e65e9794414b1e73c039f5e2e2.jpg';

    const handleImageError = (event) => {
        event.target.src = defaultImage;
    };
    
    return (
        <div className="card" id={id}>
            <div className="card-image">
                <div className="nft">
                    <img className="image-box" src={full_background} onError={handleImageError} alt={name}/>
                </div>
                <span className="card-title">{name}</span>
            </div>
            <div className="card-content">
                {description ? <p>{description}</p> : <p>undfined</p>}
            </div>
            <div className="card-action">
                <button className="btn" onClick={() => addToBasket({id, name, price,})}>To cart...</button>
                <span className="price">{price} V</span>
            </div>
        </div>
    );
}

export { GoodsItem };