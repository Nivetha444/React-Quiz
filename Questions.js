import React from 'react';
import PropTypes from 'prop-types';

function Question() {
 return(
     <h1 className="question">{Props.content}</h1>    
 );
}

Question.PropTypes = {
    content : PropTypes.string.isRequired
};

export default Question;