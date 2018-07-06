import React from 'react';

const charcomponent = (props) => {
    const style = {
        'display':'inline-block',
        'padding':'16px',
        'border':'1px solid black'
    };

    let myChar = props.char;

    return (
        <div 
            style={style}
            onClick={props.click}>{myChar}</div>
    );

}

export default charcomponent;