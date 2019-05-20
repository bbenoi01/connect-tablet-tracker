import React, { Component } from 'react';
import {
    removeDevice
} from './deviceActions';

export default class Devices extends Component {
    constructor(props) {
        super(props);

        this.handleRemoveDeviceClick = this.handleRemoveDeviceClick.bind(this);
    }

    handleRemoveDeviceClick(e) {
        const { dispatch } = this.props;
        const { id } = e.target;
        e.preventDefault();
        dispatch(removeDevice(id));
    }
    
    render() {
        const { devices } = this.props;

        return (
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
        );
    }
}