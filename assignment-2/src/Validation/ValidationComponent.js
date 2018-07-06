import React from 'react';

const validate = (props) => {
    const minLength = 5;
    const textLength = props.inputLength;
    let message = null;
    if(textLength > 0 && textLength < minLength) {
        message = (<p>Text is too short</p>);
    } else if(textLength >= minLength) {
        message = (<p>Text is long enough!</p>);
    } else {
        message = null;
    }
    return message;
}

export default validate