import React from 'react';
import Avatar from './Avatar';

class Chirp extends React.Component {
    render() {
        return (
            <div className="container mt-2">
                <div className="row text-left">
                    <div className="card w-100">
                        <div className="card-header">
                            <div className="media">
                                <Avatar user={this.props.author} />
                                <div className="media-body">
                                    <h5 className="d-inline"> {this.props.author.name}</h5>
                                    <h6 className="text-muted">Chirped:</h6>
                                </div>
                            </div>
                        </div>
                        <p className="card-text p-1 m-1">{this.props.text}</p>
                        <h6 className="card-subtitle p-1 m-1 text-muted font-italic">- Chirped on {this.props.time}</h6>
                    </div>
                </div>
            </div>
        )
    }
}


export default Chirp;