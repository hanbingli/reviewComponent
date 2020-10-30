import React, { useState, useEffect } from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { useHistory } from 'react-router-dom';
import { useHttpClient } from '../hooks/http-hook';

import './RatingCard.css';

import ReactStars from "react-rating-stars-component";
import Button from '../UIElements/Button';



const RatingCard = props => {
    const articleId = props.articleId

    const history = useHistory();
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const [averageRating, setAverageRating] = useState(null);
    const [ratings, setRatings] = useState([]);

    const [ratings5, setRatings5] = useState(0);
    const [ratings4, setRatings4] = useState(0);
    const [ratings3, setRatings3] = useState(0);
    const [ratings2, setRatings2] = useState(0);
    const [ratings1, setRatings1] = useState(0);


    const ratingColumns = [
        {_id: 5, count:0},
        {_id: 4, count:0},
        {_id: 3, count:0},
        {_id: 2, count:0},
        {_id: 1, count:0}
    ];



  


    const addReviewHandler = (event) =>{
        event.preventDefault();
        history.push('/addReview');
  
    }

    useEffect(() => {
    
        const fetchRatings = async () => {
            try {
                    const responseData = await sendRequest(
                      `${process.env.REACT_APP_ASSET_URL}/api/reviews/${articleId}/rating`
                    );
                    console.log(responseData)
                    setAverageRating(responseData.average)
    
                    console.log(responseData.ratings)
                    setRatings5(responseData.ratings.find(r=> r._id === 5).count)
                    setRatings4(responseData.ratings.find(r=> r._id === 4).count)
                    setRatings3(responseData.ratings.find(r=> r._id === 3).count)
                    setRatings2(responseData.ratings.find(r=> r._id === 2).count)
                    setRatings1(responseData.ratings.find(r=> r._id === 1).count)
                    
                   
                    // ratingColumns[ratingColumns.findIndex(r=> r._id === )]
                    
                  } catch (err) {}
          };
          setRatings([ratings5, ratings4, ratings3, ratings2, ratings1])
          console.log(averageRating)
          console.log(ratings)

        fetchRatings();
      }, [sendRequest]);


    const data = {
        labels: ratings,
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
        <React.Fragment>

            {averageRating && (
                 <div className='reviewCard__outerBox' >

                 <div className='reviewCard__headerBox'>
                     <div className='reviewCard__titleBox'>
                         <h2 className='reviewCard__title'>Reviews</h2>
                     </div>
                     <div className='reviewCard__addReviewButtonBox'>
                         <Button className='reviewCard__addReviewButton' size='big' onClick = {addReviewHandler}>Write a review</Button>
                     </div>
                 </div>
         
                 <div className='reviewCard__ratingBox'>
                     <div className='reviewCard__ratingBox__left'>
                      <div className='reviewCard__ratingBox__average'>{averageRating.toFixed(1)}</div>
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
                                 value={averageRating}
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

            )}
     

      </React.Fragment>
    );
  };
  
  export default RatingCard;
  