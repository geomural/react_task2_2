import React from 'react';
import PropTypes from 'prop-types';
import ShopCard from './ShopCard';

function CardsView(props) {
    const cards = props.cards;
    let columnsCounter = 1;    
    let cards1column = [];
    let cards2column = [];
    let cards3column = [];
    cards.forEach(c => {
        if (columnsCounter === 1) {
            cards1column.push(<ShopCard card={c} />);
        } else if (columnsCounter === 2) {
            cards2column.push(<ShopCard card={c} />);
        } else {
            cards3column.push(<ShopCard card={c} />);
            columnsCounter = 0;
        }
        columnsCounter++;   
    });
    return (
        <table id="cardTable">
            <tbody>
                <tr>
                    <td id="1">{cards1column}</td>
                    <td id="2">{cards2column}</td>
                    <td id="3">{cards3column}</td>
                </tr>    
            </tbody>            
        </table>
    );
}

CardsView.propTypes = {
    cards: PropTypes.array.isRequired
}
export default CardsView;