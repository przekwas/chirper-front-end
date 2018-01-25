import React from 'react';
import Chirp from './Chirp';

//Component that maps out the array of chirps and adds them as list items to an unordered list.  Key ids are current dates
class ChirpList extends React.Component {
    constructor(props) {
        super(props);
        this.createChirps = this.createChirps.bind(this);
    }

    createChirps(item) {
        return <li key={item.key} className="list-group-item" style={{ border: `none`, backgroundColor: `#DCDCDC` }}><Chirp text={item.text} name='Luke' time={item.key} /></li>
    }

    render() {

        let chirpEntries = this.props.entries;
        let listItems = chirpEntries.map(this.createChirps);

        return (
            <React.Fragment>
                <ul className="list-group">
                    {listItems}
                </ul>
            </React.Fragment>
        )
    }
}

export default ChirpList;