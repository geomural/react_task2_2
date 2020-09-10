import React from 'react';
import PropTypes from 'prop-types';

function ShopCard(props) {
    console.log("ShopCard(props) ", props);
    const card = props.card;

    return (
        <div className="card">        
            <div className="cardInfo">
                <span className="cardName"> {card.name.toUpperCase()} </span>
                <br />
                <span className="colorName"> {card.color} </span>
                <div className="bottomInfo">
                    <span className="price"> ${card.price} </span>
                    <button className="cardBtn" variant="outline-danger"> ADD TO CART </button>
                </div>            
            </div>
            <img src={card.img} alt=""></img>
        </div>
    )
}

ShopCard.propTypes = {
     card: PropTypes.object.isRequired
}
export default ShopCard;