import React from 'react';
import Chirp from './Chirp';

class ChirpList extends React.Component {
    constructor(props) {
        super(props);
        this.createChirps = this.createChirps.bind(this);
    }

    createChirps(item) {
        return <li key={item.key} className="list-group-item" style={{ border: `none` }}><Chirp text={item.text} /></li>
    }

    render() {

        let chirpEntries = this.props.entries;
        let listItems = chirpEntries.map(this.createChirps);

        return (
            <div className="wrapper">
                <ul className="list-group">
                    {listItems}
                </ul>
            </div>
        )
    }
}

export default ChirpList;

// {
//     this.props.data.map((element) => {
//         return <li key={element.id} className="list-group-item" style={{ border: `none` }}><Chirp text={element.text} /></li>

//     })
// }