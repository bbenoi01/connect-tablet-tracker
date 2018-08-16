import React, { Component } from 'react';
import Navbar from '../indexes/navbarIndex';
import {
    updateDeviceSelect,
    updateEmployeeSelect,
    addNewHistoryItem,
    findHistoryItems
} from '../actions/checkoutActions';

export default class Checkout extends Component {
    constructor(props) {
        super(props);

        this.handleNameSelect = this.handleNameSelect.bind(this);
        this.handleDeviceSelect = this.handleDeviceSelect.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    handleNameSelect(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateEmployeeSelect(value));
    }

    handleDeviceSelect(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateDeviceSelect(value));
    }

    handleClick(e) {
        const { dispatch, name, device, date, time } = this.props;
        dispatch(addNewHistoryItem(name, device, date, time));
    }

    render() {
        const { employees, deviceListItems, historyItems } = this.props;

        return (
            <div>
                <Navbar />
                <br/>
                <div className="container">
                    <form action="" onSubmit={this.handleClick} id='checkoutForm'>
                        <div className="row">
                            <div className="col-sm-5">
                                <div className="card">
                                    <div className="card-header bg-danger">
                                        <b>Who</b>
                                    </div>
                                    <div className="card-body text-center" id='checkoutBody'>
                                        <select name="rep" id="rep" onChange={this.handleNameSelect}>
                                            <option value="">Who Is It</option>
                                            {employees.map(employee =>
                                                <option key={employee.id} value={employee.firstName + ' ' + employee.lastName}>{employee.firstName} {employee.lastName}</option>
                                            )}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-5 offset-2">
                                <div className="card">
                                    <div className="card-header bg-danger">
                                        <b>What</b>
                                    </div>
                                    <div className="card-body text-center" id='checkoutBody'>
                                        <select name="device" id="device" onChange={this.handleDeviceSelect}>
                                            <option value="">What Is It</option>
                                            {deviceListItems.map(deviceListItem =>
                                                <option key={deviceListItem.id} value={deviceListItem.model}>{deviceListItem.model}</option>
                                            )}
                                        </select>
                                    </div>
                                </div>
                            </div>
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
                        <div className="col-sm-6 offset-3">
                            <div className="card">
                                <div className="card-header bg-danger"><b>History</b></div>
                                    <div className="container">
                                        <table className="table table-striped">
                                            <tbody>
                                                {historyItems.map(historyItem => {
                                                    return (
                                                        <tr key={historyItem.id}>
                                                            <td>{historyItem.name}</td>
                                                            <td className="text-center">{historyItem.date}{historyItem.time}</td>
                                                            <td className="text-right">{historyItem.device}</td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
