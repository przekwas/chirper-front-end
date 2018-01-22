import React from 'react';

class AddChirp extends React.Component {
    constructor() {
        super();
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.value);
    }

    render() {
        return (
            <div className="container border rounded mt-2">
                <div className="row">
                    <div className="col">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group p-1 m-1">
                                <label htmlFor="chirp-text">What're your thoughts today?</label>
                                <input type="text" className="form-control p-1 m-1" id="chirp-text" value={this.state.value} onChange={this.handleChange} placeholder="Type your Chirp here!" />
                                <button type="submit" className="btn btn-primary w-100 p-1 m-1">Chirp it!</button>
                                <small id="branding" className="form-text text-muted">Be heard.</small>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddChirp;