import React from 'react';
import PropTypes from 'prop-types';

function ShopItem(props) {
    const { item } = props;
    console.log("shop item", item);
    return (
        <tr className="itemListRow">
            <div className="test">
                <div className="divAsTd">
                    <img src={item.img} alt=""></img>
                </div>
                <div className="divAsTd">
                    <span className="cardName"> {item.name.toUpperCase()} </span>
                </div>
                <div className="divAsTd">
                    <span className="colorName"> {item.color} </span>
                </div>
                <div className="divAsTd">
                    <span className="price"> ${item.price} </span>
                </div>
                <div className="divAsTd">
                    <button className="cardBtn" variant="outline-danger"> ADD TO CART </button>
                </div>
            </div>
        </tr>
    )
}

ShopItem.propTypes = {
    item: PropTypes.object.isRequired
}
export default ShopItem;