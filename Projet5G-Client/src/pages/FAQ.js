import React, { Component } from 'react'

import Accordion from 'react-bootstrap/Accordion'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import { Card, Button, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

class FAQ extends Component {

    render() {

        return (

            <div className="container">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col mb-2">
                            <h2 className="text-dark">FAQ</h2>
                            <p>N'hésitez-pas à nous soumettre vos questions, les plus récurrentes seront ajoutées ici.</p>
                        </div>
                    </div>
                    <div className="mb-5">
                        <Button href="/Contact" variant="info" size="sm">Envoyez vos questions</Button>
                    </div>
                    {/* ------------------ DEBUT - WHITE CARD BG SHADOW -----------------------------*/}
                    <div className="container">
                        <div className="card-body bg-white shadow">
                            {/* ------------------ DEBUT - ACCORDION -----------------------------*/}
                            <Accordion>
                                {/* ---- Q & A - N°1 ----*/}
                                <Card style={{ backgroundColor: 'LightCyan' }} border="info">
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="Link text-info" eventKey="0">
                                            Comment fonctionne la 5G ?
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <Card.Text className="justify-content-md-center"><strong>La 5G repose en partie sur les ondes millimétriques.</strong> Ces ondes étaient au départ utilisées principalement par l’armée en France, mais les fréquences ont été réattribuées aux opérateurs lors d’enchères en septembre 2020. La plupart des opérateurs intégrent leurs réseaux 4G et 5G pour une expérience la plus continue possible. Le but de la 5G étant, en plus de faire grimper le débit, de diminuer autant que possible le temps de latence, l’infrastructure s’appuie sur un réseau fibre et des serveurs cache au plus près des utilisateurs.</Card.Text>
                                            <Card.Text><strong>La partie radio du réseau s’appuie sur une variété de dispositifs.</strong> Ils sont semblables à ceux utilisés pour les réseaux 4G. Avec une différence : il devient possible d’installer une multitude de petites cellules mmWave dans les zones denses. Ces small cells s’appuient sur les ondes millimétriques pour fournir un réseau très localisé – à faible portée. Ces small cells sont évidemment installées dès qu’une saturation est détectée dans une partie du réseau. Pour assurer la continuité de la connexion, des antennes plus grosses s’appuyant sur la technologie MIMO sont progressivement installées sur des points hauts. Leur taille et facteur de forme est difficilement discernable de celui des antennes cellulaires actuelles.</Card.Text>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                {/* ---- Q & A - N°2 ----*/}
                                <Card style={{ backgroundColor: 'LightCyan' }} border="info">
                                    <Card.Header bg="info">
                                        <Accordion.Toggle as={Button} variant="link text-info" eventKey="1">
                                            Quels sont les avantages de la 5G ?
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>
                                            <Card.Text><strong>Le débit 5G va permettre d’aller vite, beaucoup plus vite :</strong> des débits de 10 Gbit/s contre 100 Mb/s aujourd’hui. Pour vous donner un ordre d’idée, ce débit peut se comparer avec le réseau fibre standard disponible aujourd’hui chez vous.</Card.Text>
                                            <Card.Text><strong>La latence réduite : </strong>la latence désigne le délai entre une action et le déclenchement d'une réaction. Plus concrètement, si vous avez déjà joué à des multijoueurs online, vous connaissez l’importance du temps de latence ! Ce temps de réaction réduit est crucial pour le développement des véhicules autonomes ou encore des dispositifs médicaux connectés.</Card.Text>
                                            <Card.Text><strong>La connectivité massive :</strong> cela veut simplement dire que beaucoup d’utilisateurs pourront être connectés en simultanés sans que votre vitesse de connexion s’en ressente. Si vous avez assisté à un événement sportif dans un stade, vous connaissez l’impact de cette connectivité massive sur la lenteur d'un réseau cellulaire.</Card.Text>
                                            <Card.Text><strong>Les objets connectés :</strong> tous vos objets du quotidien vont pouvoir être connectés simplement & à moindre coût au réseau. C’est l’explosion des volumes de données transmises ! Concrètement, c’est, entre autres, votre voiture, l’éclairage public, les transports en commun, les dispositifs médicaux, les systèmes de sécurités qui vont être connectés au réseau et partager des informations.</Card.Text>
                                            <Card.Text><strong>Plus économe et écologique :</strong> la 5G est plus efficiente c’est à dire plus efficace en termes de performance tout en consommant moins d’énergie. L'impact sur l'autonomie des batteries sera significatif.</Card.Text>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                {/* ---- Q & A - N°3 ----*/}
                                <Card style={{ backgroundColor: 'LightCyan' }} border="info">
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link text-info" eventKey="2">
                                            Quelle est la différence entre la 4G et la 5G ?
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body>
                                            <Container className="text-center" style={{ width: 660, height: 'auto' }}>
                                                <ResponsiveEmbed aspectRatio="16by9">
                                                    <iframe title="5G versus 4G video" width="560" height="315" src="https://www.youtube.com/embed/Z2lVlmQELt4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                </ResponsiveEmbed>
                                            </Container>
                                            <Card.Text className="mt-3"><strong>En résumé, comparé à la 4G, le réseau 5G offrira :</strong> une vitesse de connexion 100 fois plus rapide que la 4G, atteignant jusqu'à 100 Gbit/s. ... Grâce à la 5G, beaucoup d'utilisateurs pourront ainsi être connectés simultanément sans que la vitesse de connexion diminue.</Card.Text>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                {/* ---- Q & A - N°4 ----*/}
                                <Card style={{ backgroundColor: 'LightCyan' }} border="info">
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link text-info" eventKey="3">
                                            Faut-il acheter un téléphone compatible 5G ?
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body>
                                            <Container className="text-center" style={{ width: 660, height: 'auto' }}>
                                                <ResponsiveEmbed aspectRatio="16by9">
                                                    <iframe title="5G compatible phone video" width="560" height="315" src="https://www.youtube.com/embed/101mrARROXM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                </ResponsiveEmbed>
                                                <Card.Text className="mt-3"><strong>En résumé, si vous avez l’intention d’acheter un smartphone qui supporte la 5G,</strong> le motif qui doit emporter votre décision doit être orienté sur ses performances, la qualité de son écran, son autonomie ou même la sympathie que vous avez pour la marque. En fait, sa compatibilité avec l’ultra haut débit mobile ne devrait occuper qu’une place mineure dans votre grille de critères, en tout cas à court terme.</Card.Text>
                                            </Container>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                {/* ---- END Q & A - N°4 ----*/}
                                {/* ---- Q & A - N°5 ----*/}
                                <Card style={{ backgroundColor: 'LightCyan' }} border="info">
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link text-info" eventKey="4">
                                            La 5G est-elle dangereuse pour la santé ?
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="4">
                                        <Card.Body>
                                            <Card.Text><strong>La question inquiète mais...</strong> jusqu’à preuve du contraire, la réponse est non. Toutes les études scientifiques un peu sérieuses vont dans ce sens. Mais, comme pour la 4G et le WiFi, seul l'avenir nous le dira, faute de disposer d'analyses préalables sur le long terme.</Card.Text>
                                            <Card.Text><strong>Que disent les études ?</strong> En 2011, l'OMS a qualifié les ondes électromagnétiques comme peut-être cancérogènes pour l'homme. Mais, la recherche n'a pas pu établir de lien de cause à effet. En France, des études sur la 5G sont en cours, mais elles semblent exclure un quelconque danger de la 5G sur la santé. Au moins à court terme.</Card.Text>
                                            <Card.Text><strong>De l'avis de nombreux spécialistes</strong> ce n'est pas tant les ondes de la 5G ou de la 4G qui représentent un danger pour la santé, mais plutôt le téléphone mobile. La différence de niveaux d’exposition entre un téléphone mobile, une personne et les antennes relais, est très élevée, de l’ordre de cent ou mille fois plus élevé pour le téléphone mobile.</Card.Text>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                {/* ---- END Q & A - N°5 ----*/}
                                {/* ---- DEBUT Q & A - N°6 ----*/}
                                <Card style={{ backgroundColor: 'LightCyan' }} border="info">
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link text-info" eventKey="5">
                                            C'est quoi les GeoData ?
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="5">
                                        <Card.Body>
                                            <Container className="text-center" style={{ width: 660, height: 'auto' }}>
                                                <ResponsiveEmbed aspectRatio="16by9">
                                                    <iframe title="À quoi servent les Geodata" width="560" height="315" src="https://www.youtube.com/embed/tAeX_7pRydU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                </ResponsiveEmbed>
                                            </Container>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                {/* ---- END Q & A - N°6 ----*/}
                            </Accordion>
                            {/* ------------------ END - ACCORDION -----------------------------*/}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FAQ