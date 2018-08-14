import React, { Component } from 'react';
import Navbar from '../indexes/navbarIndex';
import moment from 'moment';

export default class History extends Component {
    render() {
        const { historyItems } = this.props;

        return (
            <div>
                <Navbar />
                <br/>
                <div className="container">
                    <div className="col-sm-8 offset-2">
                        <div className="card">
                            <div className="card-header bg-danger"><b>Extended History</b></div>
                                <div className="container">
                                    <table className="table table-striped">
                                        <tbody>
                                            {historyItems.map(historyItem => {
                                                return (
                                                    <tr key={historyItem.id}>
                                                        <td>{historyItem.name}</td>
                                                        <td className="text-center">{moment(historyItem.date.split('T', 1), 'YYYY-MM-DD').format('MM-DD-YYYY')}</td>
                                                        <td className="text-right py-0">{historyItem.device}</td>
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
        );
    }
}