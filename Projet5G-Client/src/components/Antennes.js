import React, { Component } from 'react';

import network from "../service/network";


class Antennes extends Component {

    state = {
        countAntennes: 0,
        dataAntennas: [],
        departement:[]
    }

    async componentDidMount() {
        try {
            let { data } = await network.getAntennesFromPoint(2.35183, 48.85658, 1000)
            //Appel à utiliser avant de finir de coder le back
            // const data = network.getUsers()
           // console.log('data [Antennes.js]', data);

            // const finalData = data.map((elem) => {
            //     return {
            //         id: elem._id,
            //         operateur: elem.operateur,
            //         ville: elem.ville,
            //         adr: elem.adr,
            //         cp: elem.cp,
            //         latitude: elem.loc.coordinates[0],
            //         longitude: elem.loc.coordinates[1]
            //     }
            // })

            // console.log('finalData', finalData)

            this.setState({ dataAntennas: data})

            const countAntennes = (await network.getCountAntennes()).data
            console.log('data antennes.js', countAntennes);
            //     //Appel à utiliser avant de finir de coder le back
            //     // const data = network.getUsers()

            // this.setState({ countAntennes })
           
            // let { data } = await network.getDepartements();
            // console.log('data',data)
            // this.setState({departement:data })
        
        } catch (error) {
            console.log('Error: ', error);
        }
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Number of Antennas</h1>
                        <h2>{this.state.countAntennes}</h2>
                    </div>
                    <div className="col-12">
                        <h1>operateur of Antennes</h1>
                        {/* <Map>{this.state.dataAntennas}</Map> */}
                        <h2>{this.state.dataAntennas.map((elem, index) => {
                            return elem.operateur
                        })}</h2>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Antennes;