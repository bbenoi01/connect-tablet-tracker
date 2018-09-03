import React, { Component } from 'react';
import {
    updateEmployeeSelect
} from './whoActions';

export default class Who extends Component {
    constructor(props) {
        super(props);

        this.handleNameSelect = this.handleNameSelect.bind(this);


    }

    handleNameSelect(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateEmployeeSelect(value));
    }

    render() {
        const { employees } = this.props;

        return (
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
        );
    }
}