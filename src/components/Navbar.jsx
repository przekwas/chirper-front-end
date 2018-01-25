import React from 'react';

//Adds a bootstrap navbar to the top of the page - currently useless but will add functionality later
const NavBar = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-dark" style={{ backgroundColor: `#222` }}>
                <a className="navbar-brand text-white">
                    <img src={require("../logo.gif")} width="30" height="30" className="d-inline-block align-top mr-3" alt="derp" />
                    Chirper</a>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        </React.Fragment>
    )
}

export default NavBar;