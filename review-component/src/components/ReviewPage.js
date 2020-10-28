import React from 'react';
import RatingCard from './ratingCard/RatingCard';
import ReviewList from './reviewList/ReviewList'

const ReviewPage = () =>{
    const dummy_rating_array =  [12, 19, 3, 5, 1];

    const dummy_reviews = [
        {   
            id:'0001',
            userId: "u1",
            userName: "Amy",
            stars: 5,
            title: 'good',
            date: '2020-10-13',
            content: 'Het apparaat voldoet prima. Eerst dacht ik van niet omdat met de meegeleverde kabeltjes alleen aansluiting op USB C of USB 3.1 mogelijk is. De oplossing is simpel: schaf een kabeltje USB C naar USB 3.0 aan. Daarmee werkt de ssd prima met overdracht snelheid ver boven de 420 mb/st', 
            likes: 5,
            dislikes:1
        },
        {   
            id:'0002',
            userId: "u2",
            userName: "Ana",
            stars: 4,
            title: 'good',
            date: '2020-10-13',
            content: 'Deze externe SSD gebruik ik ondertussen al een aantal weken naar volle tevredenheid. De T5 is een zeer compacte oplossing om al je data veilig op te slaan, vooral doordat er de mogelijkheid bestaat om de SSD te beveiligen met een wachtwoord. Tevens moet ik zeggen dat ik blij verrast was toen ik de SSD uit zijn verpakking haalde; de SSD blijkt namelijk veel compacter te zijn dan ik had verwacht. Kortom een aanrader.', 
            likes: 5,
            dislikes:1
        }
    ]


    return(
        <div className ="container">
            <RatingCard average= {4.8} array={dummy_rating_array} />
            <ReviewList items={dummy_reviews} />

        </div>
    )
}


export default ReviewPage;