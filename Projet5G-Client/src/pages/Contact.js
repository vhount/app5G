import React, { Component } from 'react'

import Contactform from '../components/Contactform.js'
import 'bootstrap/dist/css/bootstrap.min.css'

class Contact extends Component {

    render() {

        return (

            <div className="container">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col mb-2">
                            <h2 className="text-dark">Contact</h2>
                            <p className="mb-5">Une remarque, une suggestion ? N'hésitez-pas à nous contacter pour en savoir plus.</p>
                        </div>
                    </div>
                    <Contactform />
                </div>
            </div>
        );
    }
}

export default Contact