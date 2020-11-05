import React from 'react';
import ReviewProConListItem from './ReviewProConListItem';



const ReviewProConList = (props) => {


    const items= props.items;
    
    if (!items) {
      return (
        <div className="proCon-list">
        </div>
      )
    }
  
    return (
      <React.Fragment>
        <ul className={props.className}>
          {items.map((i) => (
            <ReviewProConListItem
                text={i}
                stance={props.stance}
            />
          ))}
        </ul>
      </React.Fragment>
    )
  }
  
  export default ReviewProConList
  

