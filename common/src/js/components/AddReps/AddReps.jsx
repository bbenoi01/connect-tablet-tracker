import React, { Component } from 'react';
import {
    updateFirstName,
    updateLastName,
    addEmployee
} from './addRepsActions';

export default class AddReps extends Component {
    constructor(props) {
        super(props);

        this.handleFirstNameInput = this.handleFirstNameInput.bind(this);
        this.handleLastNameInput = this.handleLastNameInput.bind(this);
        this.handleAddEmployeeClick = this.handleAddEmployeeClick.bind(this);


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

    handleAddEmployeeClick(e) {
        const { dispatch, firstName, lastName } = this.props;
        dispatch(addEmployee(firstName, lastName));
        document.getElementById('employeeForm').reset();
    }

    render() {
        return (
            <div className="col-sm-5 offset-2">
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
                            <a href='#/admin' className="btn" onClick={this.handleAddEmployeeClick}>Submit</a>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}