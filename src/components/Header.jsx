import React from 'react';
import logo from '../logo.gif';

class Header extends React.Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">This. Is. Chirper.</h1>
                </header>
            </div>
        )
    }
}

export default Header;