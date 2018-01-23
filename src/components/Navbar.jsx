import React from 'react';

const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-dark" style={{ backgroundColor: `#222` }}>
                <a class="navbar-brand" href="#">
                    <img src={require("../logo.gif")} width="30" height="30" class="d-inline-block align-top mr-3" alt="derp" />
                    Chirper</a>
                <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
            </form>
            </nav>
        </div>
            )
}

export default NavBar;