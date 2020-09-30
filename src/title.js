import React from 'react';

function Title(props) {
    return (
        <div>
            <h1 style={divStyle}>My name is {props.name} and I am {props.age} years old?</h1>
        </div>
    );
}

//Define the style in CSS
const divStyle = {
    color: 'blue',

};

export default Title;
