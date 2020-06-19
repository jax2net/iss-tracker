import React from 'react';

const Person = (props) => {
    return(
        <React.Fragment>
        <a href={`https://en.wikipedia.org/wiki/${props.name}`}>{props.name}</a>
        <br />
        </React.Fragment>
    )
}

export default Person;
