import React, { Component } from 'react';
import {
    removeEmployee
} from './repsActions';

export default class Reps extends Component {
    constructor(props) {
        super(props);

        this.handleRemoveEmployeeClick = this.handleRemoveEmployeeClick.bind(this);
    }

    handleRemoveEmployeeClick(e) {
        const { dispatch } = this.props;
        const { id } = e.target;
        e.preventDefault();
        dispatch(removeEmployee(id));
    }

    render() {
        const { employees } = this.props;

        return (
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
        );
    }
}