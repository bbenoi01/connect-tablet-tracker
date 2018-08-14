import React, { Component } from 'react';
import Navbar from '../indexes/navbarIndex';
import {
    updateFirstName,
    updateLastName,
    addEmployee,
    removeEmployee,
    updateOS,
    updateModel,
    addDevice,
    removeDevice
} from '../actions/adminActions';

export default class Admin extends Component {
    constructor(props) {
        super(props);

        this.handleFirstNameInput = this.handleFirstNameInput.bind(this);
        this.handleLastNameInput = this.handleLastNameInput.bind(this);
        this.handleRemoveEmployeeClick = this.handleRemoveEmployeeClick.bind(this);
        this.handleAddEmployeeClick = this.handleAddEmployeeClick.bind(this);
        this.handleOSInput = this.handleOSInput.bind(this);
        this.handleModelInput = this.handleModelInput.bind(this);
        this.handleRemoveDeviceClick = this.handleRemoveDeviceClick.bind(this);
        this.handleAddDeviceClick = this.handleAddDeviceClick.bind(this);

    }

    handleFirstNameInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateFirstName(value));
    }

    handleLastNameInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateLastName(value));
    }

    handleRemoveEmployeeClick(e) {
        const { dispatch } = this.props;
        const { id } = e.target;
        e.preventDefault();
        dispatch(removeEmployee(id));
    }

    handleAddEmployeeClick(e) {
        const { dispatch, firstName, lastName } = this.props;
        e.preventDefault();
        dispatch(addEmployee(firstName, lastName));
    }

    handleOSInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateOS(value));
    }

    handleModelInput(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateModel(value));
    }

    handleRemoveDeviceClick(e) {
        const { dispatch } = this.props;
        const { id } = e.target;
        e.preventDefault();
        dispatch(removeDevice(id));
    }

    handleAddDeviceClick(e) {
        const { dispatch, OS, model } = this.props;
        e.preventDefault();
        dispatch(addDevice(OS, model));
    }

    render() {
        const { employees, devices } = this.props;
        return (
            <div>
                <Navbar />
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5">
                            <div className="card">
                                <div className="card-header bg-danger">
                                    <b>Reps</b>
                                </div>
                                <div className="card-body" id='adminBody'>
                                    {employees.map(employee =>
                                        <div className="col" key={employee.id}>
                                            <div className="card">
                                                <div className="card-body" style={{paddingBottom: '0'}}>
                                                    <div>
                                                        <div className="justify-content-start">
                                                            <p><b>Name:</b> {employee.firstName} {employee.lastName}</p>
                                                        </div>
                                                    </div>
                                                    <a href="#" onClick={this.handleRemoveEmployeeClick} className="btn" id={employee.id}>Remove</a>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-2">
                        </div>
                        <div className="col-sm-5">
                            <div className="card">
                                <div className="card-header bg-danger">
                                    <b>Add Employee</b>
                                </div>
                                <div className="card-body">
                                    <form id='employeeForm'>
                                        <div className="form-group">
                                            <label htmlFor="firstName">First Name</label>
                                            <input type="text" className="form-control" name='firstName' id='firstName' onChange={this.handleFirstNameInput}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="lastName">Last Name</label>
                                            <input type="text" className="form-control" name='lastName' id='lastName' onChange={this.handleLastNameInput}/>
                                        </div>
                                        <a href='#' className="btn" onClick={this.handleAddEmployeeClick}>Submit</a>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-sm-5">
                            <div className="card">
                                <div className="card-header bg-danger">
                                    <b>Devices</b>
                                </div>
                                <div className="card-body" id='adminBody'>
                                    {devices.map(device => 
                                        <div className="col" key={device.id}>
                                            <div className="card">
                                                <div className="card-body" style={{paddingBottom: '0'}}>
                                                    <div>
                                                        <div className="justify-content-start">
                                                            <p><b>Device:</b> {device.model}</p>
                                                        </div>
                                                    </div>
                                                    <a href="#" onClick={this.handleRemoveDeviceClick} className='btn' id={device.id}>Remove</a>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-2">
                        </div>
                        <div className="col-sm-5">
                            <div className="card">
                                <div className="card-header bg-danger">
                                    <b>Add Device</b>
                                </div>
                                <div className="card-body">
                                    <form id='deviceForm'>
                                        <div className="form-group">
                                            <label htmlFor="os">Operating Stysem</label>
                                            <input type="text" className="form-control" name='os' id='os' onChange={this.handleOSInput}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="model">Make/Model</label>
                                            <input type="text" className="form-control" name='model' id='model' onChange={this.handleModelInput}/>
                                        </div>
                                        <a href='#' className="btn" onClick={this.handleAddDeviceClick}>Submit</a>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}