import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Checkout from './containers/Checkout';
import Admin from './containers/Admin';

export default class App extends Component {


    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' component={Checkout}/>
                    {/* <Route exact path='/history' component={History}/> */}
                    <Route exact path='/admin' component={Admin}/>
                </div>
            </Router>
        );
    }
}