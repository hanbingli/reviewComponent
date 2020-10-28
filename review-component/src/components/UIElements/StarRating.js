import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";


const StarRating = props => {
    const [currentRating, setCurrentRating] = useState()


    return(
        <ReactStars 
            className="star"
            value={0}
            count={5}
            onChange={props.onChange}
            size={40}
            half={true}
            edit={true}
            emptyIcon={<i className="far fa-star" />}
            halfIcon={<i className="fa fa-star-half-alt" />}
            fullIcon={<i className="fa fa-star" />}
            color1={"#e4e5e9"}
            color2={"#CFCFCF"}
         />
    )

};
  
export default StarRating;