import React from 'react';
import { hexToRgb }from '@material-ui/core/styles';


const cardStyle = {
   textAlign: 'center',
   alignItems: 'center',
   padding: 0,
}

const textStyle = {
    fontWeight: 400,
    fontFamily: 'Helvetica',
    fontSize: 25
}

const imgStyle = {
   backgroundColor: hexToRgb('#2F366C'),
}

const CardComponent = (props) => {
    return(
        <div style={cardStyle}> 
            <p style={textStyle}>NASA's Astronomy Picture of the Day</p>
            <img src={props.apod[0]} style={imgStyle} />
            <p>&copy;{props.apod[1]}, {props.apod[2]}</p>
        </div>
    ); 
}



export default CardComponent;