import React from 'react';

const notificationStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginTop: 10
}

const Notification = ({ message }) => {
    return (
        <div style={notificationStyle}>
            {message}
        </div>
    );
}

export default Notification;