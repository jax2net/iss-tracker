// @TODO Clean up import statements
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { WebMapView } from './components/WebMapView';
import CardComponent from './components/CardComponent';
import PersonList from './components/PersonList';
import CountUp from 'react-countup';
import './styles/App.css'
import { Row, Container, Col } from 'react-bootstrap';
require('dotenv')

const titleStyle = {
    fontFamily: 'Helvetica',
    fontSize: 30,
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 75
}

const coordsStyle = {
    fontFamily: 'Helvetica',
    fontSize: 50,
    textAlign: 'center',
}

const mapStyle = {
    width: 600,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    
}

const App = () => {
    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);
    const [numPersons, setNumPersons] = useState(0);
    const [personsList, setPersonsList] = useState([]);
    const [apod, setApod] = useState('');

    // GET COORDS OF ISS
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


    // GET INFO ABOUT HOW MANY PEOPLE ARE IN SPACE
    useEffect(() => {
        axios.get('http://api.open-notify.org/astros.json')
            .then(res => {
                let list = [];
                setNumPersons(() => res.data.number);
                res.data.people.map(pr => list.push(pr.name));
                setPersonsList(() => list);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    // NASA APOD
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`)
            .then(res => {
                setApod(() => [res.data.url, res.data.copyright, res.data.date]);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])



    return (
        <React.Fragment>
            <div style={titleStyle}>The International Space Station is at</div>
            <div style={coordsStyle}>[
            {/* LATITUDE */}
                <CountUp
                    start={-90}
                    end={lat}
                    duration={.75}
                />,
            {/* LONGITUDE */}
                <CountUp
                    start={-180}
                    end={long}
                    duration={.75}
                />
        ]</div>
        <Container>
            <Row className="text-center">
                <Col xs={4}><WebMapView lat={lat} long={long} /></Col>
            </Row>
        </Container>

            <div style={titleStyle}>There are {numPersons} people aboard the ISS right now. They are:</div>
            <br />

            <PersonList list={personsList} />

            <CardComponent
                apod={apod}
            />
        </React.Fragment>

    );
}

export default App;