import React, { useState } from 'react';


const ProConListItem =(props) =>{
    console.log(props.stance)
    const text= props.text;
    const addedPros= props.addedPros;
    const addedCons= props.addedCons;
    const stance = props.stance;
    

    const addProHandler =(e) =>{
        e.preventDefault();

            addedPros.push(text);
            console.log(addedPros)
            props.onPro(addedPros)

    

    }
    const addConHandler =(e) =>{
        e.preventDefault();

            addedCons.push(text);
            console.log(addedCons)
            props.onCon(addedCons)

    

    }


    return(
        <React.Fragment>
            {
                stance && ( 
                <button className='proConItem' 
                onClick={addProHandler} >{props.text}
                </button>

                )

            }
            {
                !stance && ( 
                    <button className='proConItem' 
                    onClick={addConHandler} >{props.text}
                    </button>
    
                    )
            }

        </React.Fragment>
   
            
    )
    
}

export default ProConListItem;