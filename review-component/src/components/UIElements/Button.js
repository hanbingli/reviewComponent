import React from 'react';

import './Button.css';

const Button = props => {
    return (
       
            <button 
            className={`button button--${props.size || "default"} ${props.className}`}
            type={props.type}
            onClick={props.onClick}
            >
                {props.children}
            </button>
        
    )
}


export default Button;
