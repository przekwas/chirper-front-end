import React from 'react';

class Avatar extends React.Component {
    render() {
        return (
            <img className="Avatar"
                src={this.props.user.avatarSrc}
                alt={this.props.user.name}
                style={{ height: `50px`, width: `50px`, display: `inline` }}
            />
        )
    }
}

export default Avatar;