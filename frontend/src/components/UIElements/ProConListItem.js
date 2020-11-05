import React, { useState } from 'react';


const ProConListItem =(props) =>{
    console.log(props.stance)
    
    const text= props.text;
    const addedPros= props.addedPros;
    const addedCons= props.addedCons;
    const stance = props.stance;
    const [clicked, setClicked] = useState(false)
    

    const addProHandler =(e) =>{
        e.preventDefault();
        if(clicked){
            e.preventDefault();
            const index = addedPros.indexOf(text);
            console.log(index)
           addedPros.splice(index, 1);
           console.log(addedPros)
           props.onPro(addedPros)
           setClicked(false)
        }

            addedPros.push(text);
            
            console.log(addedPros)
            props.onPro(addedPros)
            setClicked(true)

    

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
                <button className={'proConItem'+clicked} 
                onClick={addProHandler} >{props.text}
                </button>

                )

            }
            {
                !stance && ( 
                    <button className={'proConItem'+clicked} 
                    onClick={addConHandler} >{props.text}
                    </button>
    
                    )
            }

        </React.Fragment>
   
            
    )
    
}

export default ProConListItem;