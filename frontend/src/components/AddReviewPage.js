import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { FaPlus, FaMinus } from 'react-icons/fa';


import StarRating from './UIElements/StarRating';
import Button from './UIElements/Button';
import ProConList from './UIElements/ProConList'



import './AddReviewPage.css';


const url = `https://api.Cloudinary.com/v1_1/dkg3jv28n/image/upload`



const AddReviewPage = (props) => {
    const articleId = props.articleId;


    const [reviewImg, setReviewImg] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPros, setShowPros] = useState(false);
    const [showCons, setShowCons] = useState(false);

    const [addedPros, setAddedPros] = useState([]);
    const [addedCons, setAddedCons] = useState([]);



    const history = useHistory();

    const { register, handleSubmit, errors } = useForm();
    const [rating, setRating] = useState(0);

    const plusOnclickHandler =(e) =>{
        e.preventDefault()
        
        setShowPros(!showPros)
    }
    const minusOnclickHandler =(e) =>{
        e.preventDefault()
        setShowCons(!showCons)
    }

    const addProHandler=(text) =>{

        setAddedPros(text);
        console.log(addedPros)


    }

    const cancelProHandler=(text) =>{

        setAddedPros( (prevPros) =>text);
        console.log(addedPros)


    }

    const addConHandler=(text) =>{
        setAddedCons(text);
        console.log(addedCons)



    }


    const imageUpload = async (e) =>{
        const formData = new FormData();
        const file = e.target.files[0];
        formData.append('file',file) 
        formData.append('upload_preset', 'ml_default') 
        console.log(formData);
        setLoading(true);

        try{
            const response = await fetch(
                url,
                {
                    method: 'POST',
                    body: formData
                }
    
            );
            const responseData = await response.json();
            console.log(responseData);
            setReviewImg(responseData.secure_url)
            setLoading(false)
    
          }catch(err){
              console.log(err)
          }



    }

    const onSubmit = async (data) => {
        
        console.log(data);
       
        // cloudinary.uploader.upload(
        //     // data.reviewPic.FileList[0], 
        //     '../banner.jpg',
        //     function(error, result) { 
        //         if (error) console.log(error);

        //         console.log(result) ;
        //         const imgUrl =cloudinary.url(result.url);
        //         console.log(imgUrl)
        //     }
        //     );
        



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
                        rating: rating,
                        img: reviewImg, 
                        pros: addedPros,
                        cons: addedCons

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
                            <textarea type="text" id="content" name="content" className='input input_content' ref={register({ required: true })} />
                        </div>
                        <div className='reviewShortcutBox'>
                            <div className='proConBox plusBox'>
                            <div className='proConButtonBox'>
                                <button className='plusButton proConbuttons' onClick={plusOnclickHandler} >
                                    <FaPlus className='proConIcons' />
                                </button>
                            <div className='proConHint'>Click for shortcut review</div>
                                </div>

                                {showPros && (
                                    <ProConList items={props.pros}  
                                    onPro={addProHandler} 
                                    cancelPro ={cancelProHandler}
                                    onCon={addConHandler} 
                                    className='proList' 
                                    addedPros={addedPros} 
                                    addedCons={addedCons}
                                    stance ={true} />
                                )

                                   
                                }
                            </div>

                            <div className='proConBox minusBox'>
                                <div className='proConButtonBox'>
                                <button  className='minusButton proConbuttons' onClick={minusOnclickHandler} >
                                    <FaMinus className='proConIcons' />
                                </button>
                                <div className='proConHint'>Click for shortcut review</div>
                                </div>

                                {showCons && (
                                    <ProConList items={props.cons}  
                                    onPro={addProHandler} 
                                    onCon={addConHandler} 
                                    className='conList' 
                                    addedPros={addedPros} 
                                    addedCons={addedCons}
                                    stance ={false}  />
                                )

                                   
                                }
                            </div>
                            

                        </div>
                        <div className='reviewPicBox'>
                            <label htmlFor="reviewPic">Upload your image here.</label>
                            <input 
                            type="file" 
                            id="reviewPic" 
                            name="reviewPic" 
                            className='input input_reviewPic' 
                            onChange={imageUpload}

                           />
                           {
                               loading? <p>Loading...</p>:<img className='review-img' src = {reviewImg} />
                           }
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