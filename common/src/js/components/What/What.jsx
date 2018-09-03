import React, { Component } from 'react';
import {
    updateDeviceSelect
} from './whatActions';

export default class What extends Component {
    constructor(props) {
        super(props);

        this.handleDeviceSelect = this.handleDeviceSelect.bind(this);

    }

    handleDeviceSelect(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateDeviceSelect(value));
    }

    render() {
        const { deviceListItems } = this.props;

        return (
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
        );
    }
}