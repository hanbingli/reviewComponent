import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';



const ReviewProConListItem = (props) => {
    const stance = props.stance
    const text = props.text;


  
    return (
        <React.Fragment>
            {stance && (
                  <li className="reviewProConListItem">
                      <FaPlus className="proConIcons" />
                    {props.text}
                 </li>
                
            )}
            {!stance && (
                  <li className="reviewProConListItem">
                      <FaMinus className="proConIcons" />
                    {props.text}
                 </li>
                
            )}


        </React.Fragment>

      

    )
  }
  
  export default ReviewProConListItem
  
