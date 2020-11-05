import React from 'react';
import ReviewListItem from './ReviewListItem';

import './ReviewList.css'



const ReviewList = (props) => {
    const items= props.items;
    
    if (props.items.length === 0) {
      return (
        <div className="place-list center">
            <h2>No reviews found. Maybe create one?</h2>
        </div>
      )
    }
  
    return (
      <React.Fragment>
        <ul className="reviewList">
          {items.map((i) => (
            <ReviewListItem
            stars={i.rating}
              id={i._id}
              userName={i.creator}
              title={i.title}
              content={i.content}
              date={i.date}
              likes={i.likes}
              dislikes={i.dislikes}
              img={i.img}
             
            />
          ))}
        </ul>
      </React.Fragment>
    )
  }
  
  export default ReviewList
  