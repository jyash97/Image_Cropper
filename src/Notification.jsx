import React from 'react';

const Notification = (props) => (
    props.show ? (
      <div className="notification">
        <p>{props.message}</p>
      </div>
    ) : (
      null
    )
);

export default Notification;
