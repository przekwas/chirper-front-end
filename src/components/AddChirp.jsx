import React, { Component } from 'react';

const AddChirp = () => {
    let chirp =
        <div className="container">
            <div className="row justify-content-center">
                <div className="col">
                    <form>
                        <div className="form-group">
                            <label htmlFor="chirpText">Chirp!</label>
                            <input type="text" className="form-control" id="chirpText" aria-describedby="emailHelp" placeholder="Type your Chirp here!" />
                            <button type="submit" className="btn btn-primary">Chirp it!</button>
                            <small id="emailHelp" className="form-text text-muted">Be heard.</small>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    return chirp;
}

export default AddChirp;