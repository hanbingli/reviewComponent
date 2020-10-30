import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import StarRating from './UIElements/StarRating';
import Button from './UIElements/Button';
import { useHistory } from 'react-router-dom';

import './AddReviewPage.css';


const AddReviewPage = (props) => {
    const articleId = props.articleId;


    const history = useHistory();

    const { register, handleSubmit, errors } = useForm();
    const [rating, setRating] = useState(0);



    const onSubmit = async (data) => {
        console.log(data);

        try {
            const response = await fetch(
                `${process.env.REACT_APP_ASSET_URL}/api/reviews/${articleId}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        title: data.title,
                        content: data.content,
                        creator: data.creator,
                        creatorEmail: data.creatorEmail,
                        rating: rating

                    })
                }

            );
            const responseData = await response.json();
            console.log(responseData);
            alert('Review added successfully!')
            history.push('/')



        } catch (err) {
            console.log(err)

        }



    }

    const rateHandler = (r) => {
        setRating(r)
        console.log(rating)

    }








    return (
        <React.Fragment>
            <div className='reviewPageContainer' >
                <h1>Leave your review</h1>
                <form className='reviewForm' onSubmit={handleSubmit(onSubmit)}>
                    <h2>Your rating</h2>
                    <StarRating onChange={rateHandler} type="number" id="rating" name='rating' />
                    <div className='reviewInfoBox'>
                        <div className='reviewTitleBox'>
                            <label htmlFor="title">Please enter a title for your review</label>
                            <input type="text" id="title" name="title" className='input input_title' ref={register({ required: true, maxLength: 30 })} />
                        </div>

                        <div className='reviewContentBox'>
                            <label htmlFor="content">How do you find the article?</label>
                            <input type="text" id="content" name="content" className='input input_content' ref={register({ required: true })} />
                        </div>
                    </div>

                    <div className='reviewProfileBox'>
                        <h2>Your profile</h2>
                        <label htmlFor="name">Your Username:</label>
                        <input type="text" id="name" name="creator" className='input input_name' ref={register({ required: true })} />
                        <label htmlFor="email">Your Email:</label>
                        <input type="email" id="email" name="creatorEmail" className='input input_email' ref={register({ required: true })} />
                    </div>
                    {errors.name && errors.name.type === "required" && <span>This is required</span>}
                    {errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span>}

                    <Button type="submit" className='addReviewButton' >
                        ADD REVIEW
                </Button>
                </form>
            </div>


        </React.Fragment>

    )


}


export default AddReviewPage;