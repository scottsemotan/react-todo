import React from 'react';

function Description(props) {
    return (
        <div>
            <h3>This is my todo list to help me organize my life day to day. I drive a {props.car}</h3>
        </div>
    );
}

export default Description;