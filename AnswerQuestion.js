import React from 'react';
import PropTypes from 'prop-types';

function Answerformat(props){
return(
    <li className="Options">
    <input type="radio" 
    name="radiobuttons"
    className="radiogroups"
    checked={props.answerType === props.answer }
    id={props.answerType}
    value={props.answerType}
    disabled={props.disabled}
    onChange={props.answerselected}>
    </input>
    <label className="customlabel" htmlFor={props.answerType}>
    {props.answercontent}
    </label>
    </li>
);
}

Answerformat.PropTypes = {
    answerType: PropTypes.string.isRequired,
    answercontent: PropTypes.string.isRequired,
    answerselected: PropTypes.string.isRequired,
    disabled: PropTypes.string.isRequired,
};

export default Answerformat;