import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import Who from '../../components/Who';
import What from '../../components/What';
import History from '../../components/History';
import {
    findHistoryItems,
    findEmployees,
    findDevices,
    addNewHistoryItem
} from './checkoutActions'

export default class Checkout extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

    }

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(findHistoryItems());
        dispatch(findEmployees());
        dispatch(findDevices());
    }

    handleClick(e) {
        const { dispatch, name, device, date, time, timestamp } = this.props;
        dispatch(addNewHistoryItem(name, device, date, time, timestamp));
    }

    render() {
        return (
            <div>
                <Navbar />
                <br/>
                <div className="container">
                    <form action="" onSubmit={this.handleClick} id='checkoutForm'>
                        <div className="row">
                            <Who />
                            <What />
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-sm-2 offset-5">
                                <button type='submit' className="btn btn-danger form-control">Enter</button>
                            </div>
                        </div>
                    </form>
                    <br/>
                    <div className="row">
                        <History />
                    </div>
                </div>
            </div>
        );
    }
}