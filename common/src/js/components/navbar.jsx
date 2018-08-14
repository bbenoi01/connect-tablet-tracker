import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
                <a className="navbar-brand" href="/">Tablet Tracker</a>
                <div className='justify-content-end'>
                    <ul className="navbar-nav justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Checkout</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/history">History</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/admin">Admin</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}