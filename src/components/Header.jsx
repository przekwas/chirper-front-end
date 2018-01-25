import React from 'react';
import logo from '../logo.gif';

//Keeps the standard React header modified to my version of chirper
class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">This. Is. Chirper.</h1>
                </header>
            </React.Fragment>
        )
    }
}

export default Header;