import React from 'react';
import RCSlider from 'rc-slider'
import 'rc-slider/assets/index.css'
/* import './css/Slider.css' */

class Slider extends React.Component {
    render() {
        return (
            <RCSlider
                value={this.props.value}
                min={this.props.min}
                max={this.props.max}
                onChange={this.props.onChange}
            />
        )
    }
}
export default Slider;