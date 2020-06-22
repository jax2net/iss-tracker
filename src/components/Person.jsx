import React from 'react';
import { hexToRgb } from '@material-ui/core';

const PersonStyle = {
    padding: 2.5,
    backgroundColor: hexToRgb('#2F366C'),
    textDecoration: 'none',
    color: 'whitesmoke' 
}

const Person = (props) => {
    return(
        <React.Fragment>
        <a style={PersonStyle} href={`https://en.wikipedia.org/wiki/${props.name}`}>{props.name}</a>
        <br />
        <br />
        </React.Fragment>
    )
}

export default Person;
