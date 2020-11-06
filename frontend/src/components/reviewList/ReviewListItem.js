import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import moment from 'moment';
import ReviewProConList from './ReviewProConList';
import ImgModal from '../UIElements/ImgModal';
import Backdrop from '../UIElements/Backdrop';

import './ReviewListItem.css';






const ReviewListItem = (props) => {
    const history = useHistory();
    const [likes, setLikes] = useState(props.likes);
    const [dislikes, setDislikes] = useState(props.dislikes);
    const [zoomImg, setZoomImg] = useState(false);

    const [like, setLike] = useState(false);
    const [dislike, setDislike] = useState(false);

    const convertedDate = moment(props.date).format('YYYY-MM-DD');
    const reviewId = props.id;

    const zoomImgHandler =()=>{
        setZoomImg(true)
    }

    const cancelZoomImgHandler =()=>{
        setZoomImg(false)
    }
    
    const likeReview = async () => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_ASSET_URL}/api/reviews/${reviewId}/like`,
                {
                    method: 'PATCH',
                    });
            const responseData = await response.json();
            console.log(responseData);
            setLike(true);
            setLikes(prev => prev +1)
            alert('You liked this review!')


        } catch (err) {
            console.log(err)

        }
    }

    const cancelLikeReview = async () => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_ASSET_URL}/api/reviews/${reviewId}/likeC`,
                {
                    method: 'PATCH',
                    });
            const responseData = await response.json();
            console.log(responseData);
            setLike(false);
            setLikes(prev => prev -1)
            alert('You canceled your like!')
            history.push('/')

        } catch (err) {
            console.log(err)

        }
    }


    const dislikeReview = async () => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_ASSET_URL}/api/reviews/${reviewId}/dislike`,
                {
                    method: 'PATCH',
                    });
            const responseData = await response.json();
            console.log(responseData);
            setDislike(true);
            setDislikes(prev => prev +1)
            alert('You disliked this review!')


        } catch (err) {
            console.log(err)

        }
    }

    const cancelDislikeReview = async () => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_ASSET_URL}/api/reviews/${reviewId}/dislikeC`,
                {
                    method: 'PATCH',
                    });
            const responseData = await response.json();
            console.log(responseData);
            setDislike(false);
            setDislikes(prev => prev -1)
            alert('You canceled your like!')
            history.push('/')

        } catch (err) {
            console.log(err)

        }
    }



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
             <p className='reviewItem_info'> {props.userName} | {convertedDate}</p>  
        </div>

        <div className='reviewItem_proConBox'>   
         <ReviewProConList stance={true}  items={props.pros} className='reviewItem_proList'/>
         <ReviewProConList stance={false}  items={props.cons} className='reviewItem_conList'/>
           
        </div>



        <div className='reviewItem__commentBox'>
              <p className='reviewItem__comment'>  {props.content}</p>
        </div>

            <div className='reviewItem__commentImgBox'>
            <button className='zoomImgButton' onClick={zoomImgHandler}>
                <img className='reviewItem__img' src={props.img} /> 
            </button>
            {
                zoomImg && (
                   <Backdrop onClick={cancelZoomImgHandler} src={props.img} />
                   

                )
            }
            {
                zoomImg && (
                   <ImgModal src={props.img} />

                )
            }
           
           
             </div>

        

        <div className='reviewItem__footerBox'>

                {!like && <FaThumbsUp  className='icon_thumbs thumbsUp_false' onClick={likeReview} />}
                {like && <FaThumbsUp  className='icon_thumbs thumbsUp_true' onClick={cancelLikeReview} />}
                <div className='likeCount'>{likes}</div>

                {!dislike && <FaThumbsDown className='icon_thumbs thumbsDown_false' onClick={dislikeReview} />}
                {dislike && <FaThumbsDown className='icon_thumbs thumbsDown_true' onClick={cancelDislikeReview} />}
                <div className='likeCount'>{dislikes}</div>

              
        </div>

    </li>
)


}

  
export default ReviewListItem;