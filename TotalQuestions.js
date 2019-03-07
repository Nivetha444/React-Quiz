import React from 'react';
import PropTypes from 'prop-types';

function QusetionCounter() {
    return(
        <div className="count">
        Question <span>{props.counter}</span> Outof <span>{props.total}</span>
        </div>
    );
}

QusetionCounter.PropTypes = {
    counter: PropTypes.number.isRequired,
    total:PropTypes.number.isRequired
};

export default QusetionCounter;