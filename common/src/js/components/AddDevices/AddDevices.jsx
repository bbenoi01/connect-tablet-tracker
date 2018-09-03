import React, { Component } from 'react';
import {
    updateOS,
    updateModel,
    addDevice
} from './addDevicesActions';

export default class AddDevices extends Component {
    constructor(props) {
        super(props);

        this.handleOSInput = this.handleOSInput.bind(this);
        this.handleModelInput = this.handleModelInput.bind(this);
        this.handleAddDeviceClick = this.handleAddDeviceClick.bind(this);

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

    handleAddDeviceClick(e) {
        const { dispatch, OS, model } = this.props;
        dispatch(addDevice(OS, model));
        document.getElementById('deviceForm').reset();
    }

    render() {
        return (
            <div className="col-sm-5 offset-2">
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
                            <a href='#/admin' className="btn" onClick={this.handleAddDeviceClick}>Submit</a>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}