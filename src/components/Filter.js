import React, { Component } from 'react';
import Slider, { createSliderWithTooltip } from 'rc-slider';

const SliderWithTooltip = createSliderWithTooltip(Slider);

export default class Filter extends Component {
    render() {
        const { title, min, max, onChange } = this.props;

        return (
            <div className="filter">
                {title && <h3 className="filter-title">{title}</h3>}

                <SliderWithTooltip
                    tipProps={{ overlayClassName: 'foo' }}
                    min={min}
                    max={max}
                    onChange={(value) => onChange(value)}
                />
            </div>
        )
    }
}
