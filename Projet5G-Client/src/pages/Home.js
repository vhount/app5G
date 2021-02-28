import React, { Component } from 'react';
import Map from '../components/Map';

import { Card, Container, Row, Col, Dropdown, ButtonGroup, Button } from 'react-bootstrap'
import './css/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import network from "../service/network";



class Home extends Component {

    constructor() {
        super()

        this.state = {
            departActuel:'Département',
            departAntennes: [],
            departement: [],
            countTotalZone: 0,
            countOrange: 0,
            countBouygues: 0,
            countSfr: 0,
            centerDepartement: {
                latitude: 46.98513637503125,
                longitude: 2.2939784357452986,
            }

        }

        this.updateData = this.updateData.bind(this);
        this.getAntennesDepart = this.getAntennesDepart.bind(this)
    }


    //pour afficher les departement sur dropdown

    async componentDidMount() {
        try {

            let { data } = await network.getDepartements();
            console.log(' cpt did Mount data', data)
            this.setState({ departement: data })
            console.log('[Home] departement',this.state.departement[0].name)
            console.log('[Home] departement',this.state.departement[0].code)
        } catch (error) {
            console.log('Error: ', error);
        }
    }

    updateData(objCount) {
        this.setState({
            countTotalZone: objCount.countTotalZone,
            countOrange: objCount.countOrange,
            countBouygues: objCount.countBouygues,
            countSfr: objCount.countSfr,
        })
    }

    //pour afficher les antennes de departement 
    async getAntennesDepart(deptCode,name) {
        try {
            console.log('Département:', deptCode);
            let { data } = await network.getAntennesDepartement(deptCode);
            console.log('datagetAntennesDepart', data)

            this.setState({
                countTotalZone: data.countOperators.countTotalZone,
                countOrange: data.countOperators.countOrange,
                countBouygues: data.countOperators.countBouygues,
                countSfr: data.countOperators.countSfr,
                departAntennes: data.data,
                centerDepartement: {
                    latitude: data.cordinatesDepartement.latitude,
                    longitude: data.cordinatesDepartement.longitude,

                },
                departActuel:name,
            })


        } catch (error) {
            console.log('Error: ', error);
        }
    }
   
    render() {
        console.log('dapartActuel',this.state.departActuel)
        return (

            <div className="container mb-5">
                <Row>
                    <Col>
                        <div className="container fluid mt-5">
                            {/* titre */}
                            <h2 className="slogan mt-5" >L'app qui vous aide à localiser la 5G partout en France ! </h2>
                            <p className="mb-2" >Avec sa carte interactive et ses <a href="/faq"><span className="text-info">GeoData</span></a>, <strong>On The Road 5G</strong> vous permet d'identifier la position des antennes 5G en France.</p>
                        </div>
                    </Col>
                </Row>

                {/* MAP */}
                <Container className="mt-5">
                    <Row className="justify-content-md-center">
                        {/* DEBUT MAP */}
                        <Col md="auto">
                            <Card className="">
                                <Card.Header className="bg-info text-white" as="h5">Entrez une adresse ou code postal pour la 5G à proximité</Card.Header>
                                <div className="card-body shadow text-white">
                                       <div className=" mt-n3 embed-responsive embed-responsive">
                                        <Map
                                            countFn={this.updateData}
                                            departAntennes={this.state.departAntennes}
                                            latitude={this.state.centerDepartement.latitude}
                                            longitude={this.state.centerDepartement.longitude}
                                        />
                                    </div>
                                </div>
                            </Card>
                            {/* END MAP */}
                        </Col>
                        {/* MENU DÉROULANTS RÉGIONS */}
                        <Col md={5}>
                            {/* DATA BOX LEFT */}
                            <div className="mb-4 mt-2 bg">
                                <div className="card-body">
                                    <Card.Title className="text-dark">Recherche par filtre</Card.Title>
                                    <Card.Text><span className="text-dark">Sélectionnez un département dans la liste</span></Card.Text>
                                    <Row>
                                        <Col className="mt-1"></Col>
                                    </Row>
                                    {/* MENU DÉROULANTS DÉPARTEMENTS */}
                                    <Dropdown as={ButtonGroup}>
                                        <Button variant="light border-info">  {this.state.departActuel} </Button>
                                        <Dropdown.Toggle split variant="info" id="dropdown-split-basic" />

                                        <Dropdown.Menu className="dropdown-scroll">
                                                {this.state.departement.map((elem, index) => {
                                                return <Dropdown.Item onClick={() => this.getAntennesDepart(elem.code,elem.name)} href="#/action-1">{elem.name} </Dropdown.Item>

                                            })}

                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            {/* BOTTOM COL for additional CONTENT */}
                            {/* DATA BOX RIGHT */}

                            <Card className="text-info mt-2">
                                <Card.Header className="bg-info text-white" as="h5">Infos Antennes</Card.Header>
                                <div className="card-body shadow text-white">
                                    <div className="embed-responsive embed-responsive">
                                        <div className="cardImg">
                                            <img className=" text-center" src="assets/info-antennes.png" width="134" height="90" alt="top card img" />
                                        </div>
                                    </div>
                                    {/*  DEBUT INFOS <Antennes/> */}
                                    <Card.Subtitle className="mb-3 mt-3"><span className="text-info">Nombre d'antennes à proximité</span><span className="text-secondary"> {this.state.countTotalZone}</span></Card.Subtitle>
                                    <Card.Text><span className="text-info">Orange</span><span className="text-secondary"> {this.state.countOrange}</span></Card.Text>
                                    <Card.Text><span className="text-info">Bouygues Telecom</span><span className="text-secondary"> {this.state.countBouygues}</span></Card.Text>
                                    <Card.Text><span className="text-info">SFR</span><span className="text-secondary"> {this.state.countSfr}</span></Card.Text>
                                    {/*  END INFOS <Antennes/> */}
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                {/* END MAP */}
            </div>
        );
    }
}

export default Home