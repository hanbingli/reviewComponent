
import React from 'react';
import ProConListItem from './ProConListItem';


const ProConList =(props) =>{
    const items= props.items;


    return(
        <React.Fragment>
        <ul className={props.className}>
          {items.map((i) => (
            <ProConListItem
            text={i}
            onPro={props.onPro} 
            onCon={props.onCon} 
            key={items.indexOf(i)}
            addedPros={props.addedPros} 
            addedCons={props.addedCons}
            stance = {props.stance}
            />
          ))}
        </ul>
      </React.Fragment>
            
    )
    
}

export default ProConList