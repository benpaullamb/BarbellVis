import React, { Component } from 'react';
import Plate from './Plate';
import { getPlates } from './weight-utils';

export default class Barbell extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sizeMultiplier: 1
        };

        this.barbellRef = React.createRef();
        this.dimensions = {
            centreWidth: 131,
            centreHeight: 2.8,
            groupHeight: 40,
            outerHeight: 5
        };
    }

    componentDidMount() {
        const multiplier = this.barbellRef.current.clientWidth / this.dimensions.centreWidth;
        this.setState({
            sizeMultiplier: multiplier
        });
    }

    render() {
        const {plates} = getPlates(this.props.totalWeight, this.props.availablePlates);

        const rightPlates = this.createRightPlates(plates);
        const leftPlates = this.createLeftPlates(plates);

        const { groupStyle, outerStyle, centreStyle } = this.getStyles();

        return (
            <div className="barbell" style={groupStyle}>
                <div className="barbell__left" style={outerStyle}>{leftPlates}</div>
                
                <div className="barbell__bar" ref={this.barbellRef} style={centreStyle}></div>
                
                <div className="barbell__right" style={outerStyle}>{rightPlates}</div>
            </div>
        );
    }

    createLeftPlates(plates) {
        const leftPlates = [];
        for(let i = plates.length - 1; i >= 0; --i) {
            for(let j = 0; j < (plates[i].count / 2); ++j) {
                
                leftPlates.push(<Plate weight={plates[i].weight} sizeMultiplier={this.state.sizeMultiplier}
                    key={`left-plate-${i}-${j}`}/>);
            }
        }
        return leftPlates;
    }

    createRightPlates(plates) {
        const rightPlates = [];
        for(let i = 0; i < plates.length; ++i) {
            for(let j = 0; j < (plates[i].count / 2); ++j) {
                
                rightPlates.push(<Plate weight={plates[i].weight} sizeMultiplier={this.state.sizeMultiplier} 
                    key={`right-plate-${i}-${j}`}/>);
            }
        }
        return rightPlates;
    }

    getStyles() {
        const groupStyle = { 
            height: `${this.dimensions.groupHeight * this.state.sizeMultiplier}px` 
        };
        const outerStyle = { 
            background: this.props.color,
            height: `${this.dimensions.outerHeight * this.state.sizeMultiplier}px` 
        };
        const centreStyle = { 
            background: this.props.color,
            height: `${this.dimensions.centreHeight * this.state.sizeMultiplier}px` 
        };

        return { groupStyle, outerStyle, centreStyle };
    }
}