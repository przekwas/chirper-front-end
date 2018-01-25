import React from 'react';

//Component to make avatar with my headshot atm until I learn how to add users w/ custom avatars
const Avatar = (props) => {
    return (
        <img className="Avatar rounded-circle border border-dark mr-3"
            src={require(`../headshot.jpg`)}
            alt={props.user}
            style={{ height: `50px`, width: `50px` }}
        />
    )
}

export default Avatar;