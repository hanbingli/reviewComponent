import React, { useState } from 'react';


const ProConListItem =(props) =>{
    // console.log(props.stance)
    
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
        }else{ 
            addedPros.push(text);
            
            console.log(addedPros)
            props.onPro(addedPros)
            setClicked(true)

        }

           

    

    }
    const addConHandler =(e) =>{
        e.preventDefault();

            e.preventDefault();
            if(clicked){
                e.preventDefault();
                const index = addedCons.indexOf(text);
                console.log(index)
               addedCons.splice(index, 1);
               console.log(addedCons)
               props.onCon(addedCons)
               setClicked(false)
            }else{ 
                addedCons.push(text);
                
                console.log(addedCons)
                props.onCon(addedCons)
                setClicked(true)
    
            }
    

    

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