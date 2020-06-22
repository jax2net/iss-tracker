import React from 'react';
import Person from './Person';
import { hexToRgb } from '@material-ui/core';

const listStyle = {
    fontFamily: 'Helvetica',
    fontSize: 20,
    textAlign: 'center',
    padding: 10
}

const PersonList = (props) => {

    const list = props.list.map(name => <Person name={name} />)

    return(
        <React.Fragment>
        <div style={listStyle}>{list}</div>
        </React.Fragment>
    )
}

export default PersonList;
