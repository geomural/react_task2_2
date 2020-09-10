import React from 'react';
import PropTypes from 'prop-types';

function IconSwitch(props) {
    const {icon, onSwitch } = props;
    
    return (
        <div id="switchDiv">
            <button id="switchBtn" onClick={onSwitch}>
                <span className="material-icons"> {icon} </span>
            </button>
        </div>
    )
}

IconSwitch.propTypes = {
    icon: PropTypes.string.isRequired,
    onSwitch: PropTypes.func.isRequired
}

export default IconSwitch;