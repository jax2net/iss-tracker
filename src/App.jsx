import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { WebMapView }from './components/WebMapView';
import Card from './components/Card';

const App = () => {

    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);
    const [persons, setPersons] = useState(0);

    useEffect(() => {
        axios.get('http://api.open-notify.org/iss-now.json')
            .then(res => {
                let { iss_position } = res.data;
                setLat(() => iss_position.latitude);
                setLong(() => iss_position.longitude);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    useEffect(() => {
        axios.get('http://api.open-notify.org/astros.json')
            .then (res => {
                setPersons(() => res.data.number);
            })
            .catch (err => {
                console.log(err);
            })
    }, [])



    return(
        <React.Fragment>
            <h1>Where is the International Space Station?</h1>
            The ISS is at latitude {lat} and longitude {long}
            <WebMapView lat={lat} long={long}/>
            <Card num={persons}/>
        </React.Fragment>

    );

}

export default App;
