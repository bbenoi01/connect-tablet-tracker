import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import Reps from '../../components/Reps';
import AddReps from '../../components/AddReps';
import Devices from '../../components/Devices';
import AddDevices from '../../components/AddDevices';
import {
    findDevices,
    findEmployees
} from './adminActions';


export default class Admin extends Component {

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(findEmployees());
        dispatch(findDevices());
    }

    render() {
        return (
            <div>
                <Navbar />
                <br/>
                <div className="container">
                    <div className="row">
                        <Reps />
                        <AddReps />
                    </div>
                    <br/>
                    <div className="row">
                        <Devices />
                        <AddDevices />
                    </div>
                </div>
            </div>
        );
    }
}