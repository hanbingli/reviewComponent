
import React from 'react';
import ProConListItem from './ProConListItem';


const ProConList =(props) =>{
    const items= props.items;


    return(
        <React.Fragment>
        <ul className="proConList">
          {items.map((i) => (
            <ProConListItem
            text={i}
            onClick={props.onClick}
            />
          ))}
        </ul>
      </React.Fragment>
            
    )
    
}

export default ProConList