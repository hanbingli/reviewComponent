import React, { useState } from 'react';


const ProConListItem =(props) =>{


    return(
    <button className='proConItem' onClick={props.onClick(props.text)} >{props.text}</button>
            
    )
    
}

export default ProConListItem;