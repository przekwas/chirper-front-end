import React from 'react';

const Avatar = (props) => {
    return (
        <img className="Avatar rounded-circle border border-dark mr-2"
            src={require(`../headshot.jpg`)}
            alt="Suckit"
            style={{ height: `50px`, width: `50px` }}
        />
    )
}

export default Avatar;