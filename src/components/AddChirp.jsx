import React, { Component } from 'react';
import Chirp from './Chirp';

const AddChirp = () => {
    let chirp =
        <div className="container border rounded mt-2">
            <div className="row">
                <div className="col">
                    <form>
                        <div className="form-group p-1 m-1">
                            <label htmlFor="chirpText">What're your thoughts today?</label>
                            <input type="text" className="form-control p-1 m-1" id="chirpText" placeholder="Type your Chirp here!" />
                            <button type="submit" className="btn btn-primary w-100 p-1 m-1">Chirp it!</button>
                            <small id="emailHelp" className="form-text text-muted">Be heard.</small>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    return chirp;
}

export default AddChirp;