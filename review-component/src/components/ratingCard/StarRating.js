import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { FaStar } from 'react-icons/fa';


const StarRating = props => {
    const [currentRating, setCurrentRating] = useState()


    const rateHandler =() =>{
        

    }


    return(
        <ReactStars 
            className="star"
            value={4.8}
            count={5}
            onChange={rateHandler}
            size={40}
            half={true}
            edit={false}
            emptyIcon={<i className="far fa-star" />}
            halfIcon={<i className="fa fa-star-half-alt" />}
            fullIcon={<i className="fa fa-star" />}
            color1={"#e4e5e9"}
            color2={"#CFCFCF"}
            // onChange={rateHandler}

         />
    )

};
  
export default StarRating;