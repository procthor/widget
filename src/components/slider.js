import React, { Component } from 'react';


class Slider extends Component {


    handleChange(event) {

        const n = [];
        n['mortgage'] = 0;
        n['bills'] = 1;
        n['spend'] = 2;

    }



    render() {
        const name = [];
        name['mortgage'] = 'Mortgage';
        name['bills'] = 'Bills';
        name['spend'] = 'General spendings';
        return (

            <div className="slider">
                <label>{name[this.props.name]}</label>
                <input
                    id={this.props.name}
                    name={this.props.name}
                    type="range"
                    min="0"
                    onChange={this.props.onChange}
                    value={this.props.value}
                    max={this.props.max}
                    step="1" />

            </div>


        );
    }
}

export default Slider;
