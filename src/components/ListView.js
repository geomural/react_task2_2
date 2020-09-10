import React from 'react';
import PropTypes from 'prop-types';
import ShopItem from './ShopItem';

function ListView(props) {
    const items = props;
    console.log("items:", items);
    return (
        <div id="listDiv">
            <table>
                <tbody>
                    { items.items.map(element => <ShopItem item={element} />) }
                </tbody>
            </table>
        </div>
    );
}

ListView.propTypes = {
    items: PropTypes.array.isRequired
}
export default ListView;