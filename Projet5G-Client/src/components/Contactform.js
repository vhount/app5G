import React, { Component } from 'react'

import { Card, Container, Row, Col, Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

class Contactform extends Component {

    render() {

        return (

            <Container>
                <Row>
                    <Col></Col>
                    <Col md={7}>
                        <Card className="mb-5">
                            <Card.Body className="bg-white text-info shadow">
                                <Form className="text-left">

                                    <Form.Group>
                                        <label htmlFor="validationServer03 colFormLabel" className="required">Nom</label>
                                        <input type="text" className="form-control" placeholder="votre nom" />
                                    </Form.Group>

                                    <Form.Group>
                                        <label for="email" className="required">Email *</label>
                                        <input type="email" class="form-control" placeholder="exemple@mail.com" id="email" />
                                    </Form.Group>

                                    <Form.Group>
                                        <label htmlFor="validationServer02 colFormLabel" className="required">Sujet</label>
                                        <input type="text" className="form-control" placeholder="votre sujet" />
                                    </Form.Group>

                                    <Form.Group>
                                        <label htmlFor="exampleFormControlTextarea1 colFormLabel">Message</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </Form.Group>
                                </Form>
                                <Button className="text-center" variant="info">Envoyer</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
}

export default Contactform