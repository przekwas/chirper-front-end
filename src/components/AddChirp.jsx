import React from 'react';
import ChirpList from './ChirpList';

//component to add the form to add chirps
class AddChirpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chirps: []
        }

        this.addChirps = this.addChirps.bind(this);
    }

    addChirps(event) {
        let chirpArray = this.state.chirps;

        //prevents users from spamming the page with blank chirps
        if (this._inputElement.value !== "") {
            chirpArray.unshift({
                text: this._inputElement.value,
                key: Date.now()
            });

            this.setState({
                chirps: chirpArray
            });

            this._inputElement.value = "";
        }

        //prevents the submit form from refreshing the page
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <div className="container border rounded mt-2" style={{ backgroundColor: `#FFFFFF` }}>
                    <div className="row">
                        <div className="col">
                            <form onSubmit={this.addChirps}>
                                <div className="form-group p-1 m-1">
                                    <label htmlFor="chirp-text">What're your thoughts today?</label>
                                    <input type="text" className="form-control p-1 m-1 bg-light" id="chirp-text" ref={(a) => this._inputElement = a} placeholder="Type your Chirp here!" />
                                    <button type="submit" className="btn btn-primary w-100 p-1 m-1">Chirp it!</button>
                                    <small id="branding" className="form-text text-muted">Be heard.</small>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <ChirpList entries={this.state.chirps} />
            </React.Fragment>
        )
    }
}

export default AddChirpForm;