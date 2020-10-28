import React, { useState } from 'react';
import { HorizontalBar } from 'react-chartjs-2';

import './RatingCard.css';

import StarRating from './StarRating';
import ReactStars from "react-rating-stars-component";
import Button from '../UIElements/Button';
import { FaRegCalendarMinus } from 'react-icons/fa';





const RatingCard = props => {

    const [currentRating, setCurrentRating] = useState()

    const data = {
        labels: props.array,
        datasets: [
          {
            data:props.array,
            backgroundColor: '#FFD700',
            borderColor: '#FFD700',
            borderWidth: 0,
          },
        ],
      }
      

      const options = {
        title: {
            display:false
        },
        legend: {
            display:false
        },
        gridLines: {
            display:false
        },
        ticks: {
            display:false
        },
        scaleLabel: {
            display:false
        },
        animation: {
            duration: 0 // general animation time
        },
        hover: {
            animationDuration: 0 // duration of animations when hovering an item
        },

        scales: {
            xAxes: [{
                        gridLines: {
                            display:false
                        },
                        display:false
                    }],
                    
            yAxes: [{
                        gridLines: {
                            display:false
                        },
                        position: 'right'  
                    }]
            }

      }


    return (
      <div className='reviewCard__outerBox' >

        <div className='reviewCard__headerBox'>
            <div className='reviewCard__titleBox'>
                <h2 className='reviewCard__title'>Reviews</h2>
            </div>
            <div className='reviewCard__addReviewButtonBox'>
                <Button className='reviewCard__addReviewButton' size='big' >Write a review</Button>
            </div>
        </div>
        <div className='reviewCard__ratingBox'>
            <div className='reviewCard__ratingBox__left'>
                <div className='reviewCard__ratingBox__average'>4.8</div>
                <div className='reviewCard__ratingBox__starsArray'>
                <div className='starsArray'>
                    <ReactStars 
                            className="starsArray"
                            edit={false}
                            value={5}
                            size={20}
                            />
                </div>
                <div className='starsArray'>
                    <ReactStars 
                            className="starsArray"
                            edit={false}
                            count ={4}
                            value={4}
                            size={20}
                            />
                </div>
                <div className='starsArray'>
                    <ReactStars 
                            className="starsArray"
                            edit={false}
                            count ={3}
                            value={3}
                            size={20}
                            />
                </div>
                <div className='starsArray'>
                    <ReactStars 
                            className="starsArray"
                            edit={false}
                            count ={2}
                            value={2}
                            size={20}
                            />
                </div>
                <div className='starsArray'>
                    <ReactStars 
                            className="starsArray"
                            edit={false}
                            count ={1}
                            value={1}
                            size={20}
                            />
                </div>
                </div>
            </div>
            <div className='reviewCard__ratingBox__right'>
                <div className='ratingStars'>
                    {/* <FaStar size = {100} /> */}
                    <ReactStars 
                        className="star"
                        value={4.8}
                        count={5}
                        size={40}
                        half={true}
                        edit={false}
                        emptyIcon={<i className="far fa-star" />}
                        halfIcon={<i className="fa fa-star-half-alt" />}
                        fullIcon={<i className="fa fa-star" />}
                        color1={"#e4e5e9"}
                        color2={"#CFCFCF"}
                        />
                </div>
                <div className='ratingColumns'>
                    <HorizontalBar data={data} options={options} width="90%" height="23rem" />
                </div>
                    
            </div>
        </div>

      </div>
    );
  };
  
  export default RatingCard;
  