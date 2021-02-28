import React, { Component } from 'react'

import './css/Equipe.css'
import 'bootstrap/dist/css/bootstrap.min.css'

class Equipe extends Component {

    render() {

        return (

            <div className="container">
                {/* titre */}
                <h2 className="slogan mt-5" >Notre raison d'être :</h2>
                <h2>informer sur la couverture la 5G en France, à proximité de chez vous !</h2>
                <div className="container mt-5">
                    <div className="col">
                        <div className="row">
                            {/*  flip card one */}
                            <div className=" col-md-4 card-container ">
                                <div className="card-flip">
                                    {/*  card front */}
                                    <div className="card front bg-white shadow mx-auto">
                                        <img src="assets/person-1.jpg" circle className="profile-pic" alt="Lina" />
                                        <div className="card-block text-center">
                                            <h4>Lina</h4>
                                            <span>Frontend Dev</span>
                                        </div>
                                    </div>
                                    {/*  flip card back */}
                                    <div className="card back bg-info shadow mx-auto">
                                        <img src="assets/person-1.png" circle className="profile-pic" alt="Lina" />
                                        <div className="card-block text-center">
                                            <span> Force </span>
                                            <h4>Lire la doc</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  end card one */}

                            {/*  flip card two */}
                            <div className=" col-md-4 card-container">
                                <div className="card-flip ">
                                    {/*  card front */}
                                    <div className="card front bg-white shadow mx-auto">
                                        <img src="assets/person-2.jpg" circle className="profile-pic" alt="Ornella" />
                                        <div className="card-block text-center">
                                            <h4>Ornella</h4>
                                            <span>Backend Dev</span>
                                        </div>
                                    </div>
                                    {/*  flip card back */}
                                    <div className="card back bg-info shadow mx-auto">
                                        <img src="assets/person-2.png" circle className="profile-pic" alt="Ornelloosh" />
                                        <div className="card-block text-center">
                                            <span>Force</span>
                                            <h4>Coder à 2</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  end card two */}

                            {/*  flip card three */}
                            <div className=" col-md-4 card-container">
                                <div className="card-flip ">
                                    {/*  card front */}
                                    <div className="card front bg-white shadow mx-auto">
                                        <img src="assets/person-3.jpg" circle className="profile-pic" alt="Lydia" />
                                        <div className="card-block text-center">
                                            <h4>Lydia</h4>
                                            <span>Backend Dev</span>
                                        </div>
                                    </div>
                                    {/*  flip card back */}
                                    <div className="card back bg-info shadow mx-auto">
                                        <img src="assets/person-3.png" circle className="profile-pic" alt="Lydoosh" />
                                        <div className="card-block text-center">
                                            <span>Force</span>
                                            <h4>L'algo</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  end card three */}

                            {/*  flip card four */}
                            <div className="col-md-4 offset-md-2 card-container">
                                <div className="card-flip ">
                                    {/*  card front */}
                                    <div className="card front bg-white shadow mx-auto">
                                        <img src="assets/person-4.jpg" circle className="profile-pic" alt="Safia" />
                                        <div className="card-block">
                                            <h4> Safia </h4>
                                            <span>Fullstack Dev</span>
                                        </div>
                                    </div>
                                    {/*  flip card back */}
                                    <div className="card back bg-info shadow mx-auto">
                                        <img src="assets/person-4.png" circle className="profile-pic" alt="Safoosh" />
                                        <div className="card-block">
                                            <span>Force</span>
                                            <h4>Côté back</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  end card four */}

                            {/*  flip card five */}
                            <div className="col-md-4 card-container">
                                <div className="card-flip ">
                                    {/*  card front */}
                                    <div className="card front bg-white shadow mx-auto">
                                        <img src="assets/person-5.jpg" circle className="profile-pic" alt="Val" />
                                        <div className="card-block text-center">
                                            <h4>Val</h4>
                                            <span>Chef de projet</span>
                                        </div>
                                    </div>
                                    {/*  flip card back */}
                                    <div className="card back bg-info shadow mx-auto">
                                        <img src="assets/person-5.png" circle className="profile-pic" alt="Valoosh" />
                                        <div className="card-block text-center">
                                            <span>Force</span>
                                            <h4>Côté client</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  end card five */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Equipe
