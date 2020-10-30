import React from 'react';
import { useForm } from "react-hook-form";
import StarRating from './UIElements/StarRating';
import Button from './UIElements/Button';

import './AddReviewPage.css';


const AddReviewPage = () =>{

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => console.log(data);

    const rateHandler =(rating) =>{
        console.log(rating)
        
    }






    return(
        <React.Fragment>
            <div className='reviewPageContainer' >
            <h1>Leave your review</h1>
            <form className='reviewForm' onSubmit={handleSubmit(onSubmit)}>
                <h2>Your rating</h2>
                    <StarRating onChange={rateHandler}  />
                <div className='reviewInfoBox'>
                    <div className='reviewTitleBox'>
                    <label htmlFor="title">Please enter a title for your review</label>
                    <input type="text" id="title" className='input input_title' ref={register({ required: true, maxLength: 30 })} />
                    </div>

                    <div className='reviewContentBox'>
                    <label htmlFor="content">How do you find the article?</label>
                    <input type="text" id="name" className='input input_content'  ref={register({ required: true })} />
                    </div>
                </div>

                <div className='reviewProfileBox'>
                <h2>Your profile</h2>
                    <label htmlFor="name">Your Username:</label>
                    <input type="text" id="name" className='input input_name' ref={register({ required: true })} />
                    <label htmlFor="email">Your Email:</label>
                    <input type="email" id="email" className='input input_email' ref={register({ required: true })} />
                </div>
                {errors.name && errors.name.type === "required" && <span>This is required</span>}
                {errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span> }

                <Button type="submit" className='addReviewButton' >
                    ADD REVIEW
                </Button>
            </form>
            </div>


        </React.Fragment>

    )


}


export default AddReviewPage;