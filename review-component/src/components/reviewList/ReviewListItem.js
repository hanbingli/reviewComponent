import React from 'react';
import ReactStars from "react-rating-stars-component";
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

import './ReviewListItem.css';






const ReviewListItem = (props) => {





return(
    <li className='reviewItem__outerBox' >

        <div className='reviewItem_headerBox'>
            <div className='reviewCard__starBox'>
                <ReactStars 
                            className="reviewStar"
                            edit={false}
                            count ={props.stars}
                            value={props.stars}
                            size={20}
                            />
            </div>
            <div className='reviewItem__titleBox'>
                <h2 className = 'reviewItem__title'>{props.title}</h2>     
            </div>
        </div>

        <div className='reviewItem_infoBox'>   
             <p className='reviewItem_info'> {props.userName} | {props.date}</p>  
        </div>

        <div className='reviewItem__commentBox'>
              <p className='reviewItem__comment'>  {props.content}</p>
        </div>

        <div className='reviewItem__footerBox'>
            <FaThumbsUp />
            <FaThumbsDown />
              
        </div>

    </li>
)


}

  
export default ReviewListItem;