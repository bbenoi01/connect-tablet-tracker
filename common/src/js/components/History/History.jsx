import React, { Component } from 'react';

export default class History extends Component {
    render() {
        const { historyItems } = this.props;
        
        return (
            <div className="col-sm-6 offset-3">
                <div className="card">
                    <div className="card-header bg-danger"><b>History</b></div>
                        <div className="container">
                            <table className="table table-striped">
                                <tbody>
                                    {historyItems.map(historyItem => {
                                        return (
                                            <tr key={historyItem.timestamp}>
                                                <td>{historyItem.name}</td>
                                                <td className="text-center">{historyItem.date} <t style={{fontSize: 'smaller'}}>{historyItem.time}</t></td>
                                                {/* <td className="text-center" style={{fontSize: 'smaller'}}> {historyItem.time}</td> */}
                                                <td className="text-right">{historyItem.device}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                </div>
            </div>
        );
    }
}