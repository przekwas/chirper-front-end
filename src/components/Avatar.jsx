import React from 'react';

class Avatar extends React.Component {
    render() {
        return (
            <img className="Avatar rounded-circle border border-dark mr-2"
                src={require(`../headshot.jpg`)}
                alt={this.props.user.name}
                style={{ height: `50px`, width: `50px` }}
            />
        )
    }
}

export default Avatar;