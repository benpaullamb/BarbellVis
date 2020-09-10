import React, { Component } from 'react';

export default class Plate extends Component {

    constructor(props) {
        super(props);

        this.plateOptions = [
            {
                weight: 25,
                width: 7.2,
                height: 40,
                background: 'red'
            },
            {
                weight: 20,
                width: 7.2,
                height: 40,
                background: 'blue'
            },
            {
                weight: 15,
                width: 6.2,
                height: 38,
                background: 'yellow'
            },
            {
                weight: 10,
                width: 4.4,
                height: 34,
                background: 'green'
            },
            {
                weight: 5,
                width: 2.4,
                height: 26,
                background: 'white'
            },
            {
                weight: 2.5,
                width: 2.4,
                height: 18.9,
                background: 'red'
            },
            {
                weight: 1.25,
                width: 2.4,
                height: 15.3,
                background: 'blue'
            },
            {
                weight: 0.5,
                width: 1,
                height: 10.6,
                background: 'yellow'
            }
        ];
    }

    render() {
        const plate = this.plateOptions.find(option => option.weight === this.props.weight);
        const weightStyle = {
            width: `${plate.width * this.props.sizeMultiplier}px`,
            height: `${plate.height * this.props.sizeMultiplier}px`,
            background: plate.background
        };

        return (
            <div className="barbell__plate" style={weightStyle}></div>
        );
    }
}