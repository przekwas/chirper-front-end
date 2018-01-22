import React, { Component } from 'react';

const Chirp = (props) => {
    let item =
        <div className="container border rounded mt-2">
            <div className="row">
                <div className="col text-left p-2 m-2">
                <h5>{props.text}</h5>
                </div>
            </div>
        </div>
    return item;
}

export default Chirp;