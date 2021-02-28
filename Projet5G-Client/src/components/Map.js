import React, { Component } from "react";
import MapGL, { Marker, NavigationControl, GeolocateControl } from "react-map-gl";
//import "mapbox-gl/dist/mapbox-gl.css";
import Geocoder from "react-map-gl-geocoder";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import DeckGL, { GeoJsonLayer } from "deck.gl";
import network from '../service/network';
import Slider from './Slider'

const MAPBOX_TOKEN = "pk.eyJ1IjoibGluYXJlbnRlcmlhIiwiYSI6ImNraWVtcGt3YzBiaHYyd3F1N3RwaTJ4bmUifQ.PQQhMArvDGe1rg60nyjsVQ"

// Style bar zoom + & -
const navStyle = {
    position: 'absolute',
    top: 40,
    left: 0,
    padding: '10px'
};

// style button geolocate
const geolocateStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px'
};

class Map extends Component {

    constructor(props) {
        super(props);

        this.state = {
            viewport: {
                width: 550,
                height: 500,
                latitude: this.props.latitude,
                longitude: this.props.longitude,
                zoom: 4.5
            },
            searchResultLayer: null,
            dataAntennas: [],
            zoneAllData: {},
            radiusMaxMeters: 0,
        };

        this.onChangeMaxMeters = this.onChangeMaxMeters.bind(this);

    }

    mapRef = React.createRef();
    geocoderContainerRef = React.createRef();

    componentDidUpdate(prevProps) {

        console.log('[Map]', prevProps)
        console.log('Map', this.props.departAntennes)
        if (this.props.departAntennes.length !== prevProps.departAntennes.length) {
            this.setState({
                dataAntennas: this.props.departAntennes,
                viewport: {
                    width: 550,
                    height: 500,
                    latitude: this.props.latitude,
                    longitude: this.props.longitude,
                    zoom: 8
                },
            })
        }
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resize);
    }

    // Geocoder display
    handleViewportChange = viewport => {
        this.setState({
            viewport: { ...this.state.viewport, ...viewport }
        });
    };

    // Geocoder zoom in on researched location
    handleGeocoderViewportChange = viewport => {
        const geocoderDefaultOverrides = { transitionDuration: 1000 };

        return this.handleViewportChange({
            ...viewport,
            ...geocoderDefaultOverrides
        });
    };

    onChangeMaxMeters = async (value) => {
        // console.log('onChange', this.state.radiusMaxMeters)
        try {
            const lat = this.state.searchResultLayer.state.features.pointFeatures[0].geometry.coordinates[0]
            const long = this.state.searchResultLayer.state.features.pointFeatures[0].geometry.coordinates[1]
            const mxM = value

            const { data } = await network.getAntennesFromPoint(lat, long, mxM)

            this.setState({
                dataAntennas: data.data,
                zoneAllData: data.countOperators,
                radiusMaxMeters: mxM
            })

            this.props.countFn(data.countOperators)

        } catch (error) {
            console.log('Error: ', error);
        }
    }

    //searchbar results
    handleOnResult = async event => {
        this.setState({
            searchResultLayer: new GeoJsonLayer({
                id: "search-result",
                data: event.result.geometry,
                getFillColor: [255, 0, 0, 128],
                getRadius: 1000,
                pointRadiusMinPixels: 10,
                pointRadiusMaxPixels: 10
            })
        })

        const lat = this.state.searchResultLayer.state.features.pointFeatures[0].geometry.coordinates[0]
        const long = this.state.searchResultLayer.state.features.pointFeatures[0].geometry.coordinates[1]
        const mxM = this.state.radiusMaxMeters;

        try {
            const { data } = await network.getAntennesFromPoint(lat, long, mxM)
            console.log('data [map.js]', data);

            this.setState({
                dataAntennas: data.data,
                zoneAllData: data.countOperators
            })
            console.log('dataCount', data.countOperators)

            this.props.countFn(data.countOperators)

        } catch (error) {
            console.log('Error: ', error);
        }
    }

    render() {

        const { viewport, searchResultLayer } = this.state;
        console.log('raduis', this.state.radiusMaxMeters)

        return (
            <div>
                <div
                    ref={this.geocoderContainerRef}
                    style={{
                        height: 55,
                        width: "100",
                        background: "light",
                        paddingLeft: 3,
                        display: "flex",
                        alignItems: "center"
                    }}
                />

                <div className="mb-3 mt-2" style={{ width: 500, paddingLeft: 45 }} >
                    <Slider
                        value={this.state.radiusMaxMeters}
                        min={0}
                        max={10000}
                        onChange={this.onChangeMaxMeters} />
                </div>

                <DeckGL
                    {...viewport}
                    layers={[searchResultLayer]}
                    style={{ width: "100" }} />

                {/* Map Display */}
                <MapGL
                    ref={this.mapRef}
                    {...viewport}
                    onViewportChange={this.handleViewportChange}
                    mapboxApiAccessToken={MAPBOX_TOKEN}
                    mapStyle='mapbox://styles/linarenteria/ckij9zb1202jz19o66c8yjjnx'
                >

                    {/* Data Access & Marker */}
                    {this.state.dataAntennas.map((elem, index) => {
                        return (<Marker key={index}
                            latitude={elem.latitude}
                            longitude={elem.longitude}>
                            <img src='./media/antenna_pin_red.png' alt='antennes' />
                        </Marker>)
                    })}

                    {/* Search bar */}
                    <Geocoder
                        mapRef={this.mapRef}
                        containerRef={this.geocoderContainerRef}
                        onResult={this.handleOnResult}
                        onViewportChange={this.handleGeocoderViewportChange}
                        mapboxApiAccessToken={MAPBOX_TOKEN}
                    />

                    {/* Style bar zoom + & - */}
                    <div style={navStyle}>
                        <NavigationControl />
                    </div>

                    {/* style button geolocate */}
                    <div style={geolocateStyle}>
                        <GeolocateControl />
                    </div>
                </MapGL>
            </div>
        );
    }
}
export default Map;
