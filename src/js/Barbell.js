import React, { Component } from 'react';
import Plate from './Plate';
import { calcPlates } from './plate-calc';

export default class Barbell extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {plates} = calcPlates(this.props.totalWeight, false);
        const leftPlates = [];
        const rightPlates = [];

        for(let i = 0; i < plates.length; ++i) {
            
            let k = plates.length - 1 - i;

            for(let j = 0; j < (plates[i].count / 2); ++j) {
                
                leftPlates.push(<Plate weight={plates[k].weight} key={`left-plate-${k}-${j}`}/>);
                rightPlates.push(<Plate weight={plates[i].weight} key={`right-plate-${i}-${j}`}/>);
            }
        }

        return (
            <div className="barbell">
                <div className="barbell__left" style={{ background: this.props.color }}>
                    {leftPlates}
                </div>
                
                <div className="barbell__bar" style={{ background: this.props.color }}></div>
                
                <div className="barbell__right" style={{ background: this.props.color }}>
                    {rightPlates}
                </div>
            </div>
        );
    }
}