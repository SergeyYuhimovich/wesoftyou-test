import React, { Component } from 'react';
import Slider, { createSliderWithTooltip } from 'rc-slider';

const SliderWithTooltip = createSliderWithTooltip(Slider);

class Filter extends Component {
    _onValueChange = (value) => {
        this.props.onChange(value);
    };

    render() {
        const { title, min, max } = this.props;

        return (
            <div className="filter">
                {title && <h3 className="filter-title">{title}</h3>}

                <SliderWithTooltip
                    tipProps={{ overlayClassName: 'foo' }}
                    min={min}
                    max={max}
                    onChange={this._onValueChange}
                />
            </div>
        )
    }
}

export default Filter;