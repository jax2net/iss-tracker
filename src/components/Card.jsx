import React from 'react';

const Card = (props) => {
    //console.log(props);
   return( <React.Fragment>
    <p>There are currently </p>
       {props.num}
    <p> people in space.</p>
    </React.Fragment>)
}



export default Card;
