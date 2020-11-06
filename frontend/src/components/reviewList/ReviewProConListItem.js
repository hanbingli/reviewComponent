import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';



const ReviewProConListItem = (props) => {
    const stance = props.stance
    const text = props.text;


  
    return (
        <React.Fragment>
            {stance && (
                  <li className="reviewProConListItem">
                      <FaPlus className="reviewProConIcons" />
                    <div className ="proConText" >{props.text}</div>
                 </li>
                
            )}
            {!stance && (
                  <li className="reviewProConListItem">
                      <FaMinus className="reviewProConIcons" />
                      <div className ="proConText">{props.text}</div>
                 </li>
            
                
            )}


        </React.Fragment>

      

    )
  }
  
  export default ReviewProConListItem
  
