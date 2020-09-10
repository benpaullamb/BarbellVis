import 'core-js/stable';
import 'regenerator-runtime/runtime';
import '../styles/style.scss';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Barbell from './Barbell';

class App extends Component {

    render() {
        return (
            <div className="container">
                <h1 className="title">BarbellVis</h1>

                <div className="main">
                    <Barbell totalWeight={98.5} color="gray"/>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));