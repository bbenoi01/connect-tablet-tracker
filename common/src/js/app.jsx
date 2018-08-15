import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { 
    findDevices,
    findEmployees,
    findHistoryItems
} from './actions/appActions';
import Admin from './indexes/adminIndex';
import Checkout from './indexes/checkoutIndex';
// import History from './indexes/historyIndex';

export default class App extends Component {


    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(findHistoryItems());
        dispatch(findEmployees());
        dispatch(findDevices());
    }

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