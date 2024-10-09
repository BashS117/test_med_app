import React, { useState } from 'react';
import './ReviewForm.css';
import GiveReviews from '../GiveReviews/GiveReviews';

const ReviewForm = ({ reviews }) => {
    const [reviewsData, setReviewsData] = useState(reviews);
 console.log(reviewsData)
    // Función para manejar la reseña enviada y actualizar la lista de reviews
    const handleReviewSubmit = (index, newReview) => {
        const updatedReviews = [...reviewsData];
        updatedReviews[index] = {
            ...updatedReviews[index],
            reviewGiven: true, // Marca que se ha dado una reseña
            reviewDetails: newReview // Agrega los detalles de la reseña
        };
        setReviewsData(updatedReviews); // Actualiza el estado
       
    };

    return (
        <div className="reviews-container">
            <h2>Reviews</h2>
            <div className="reviews-header">
                <div className="header-item">Serial Number</div>
                <div className="header-item">Doctor Name</div>
                <div className="header-item">Doctor Speciality</div>
                <div className="header-item">Provide feedback</div>
                <div className="header-item">Review Given</div>
            </div>

            {reviewsData.map((review, index) => (
                <div key={index} className="review-row">
                    <div className="row-item">{index + 1}</div>
                    <div className="row-item">{review.doctorName}</div>
                    <div className="row-item">{review.doctorSpeciality}</div>
                    <div className="row-item">
                        {/* Se pasa una función para manejar la reseña del doctor */}
                        <GiveReviews onSubmitReview={(newReview) => handleReviewSubmit(index, newReview)} />
                    </div>
                    <div className="row-item review-row-item">
                        {review.reviewDetails.name?<p><strong>Name: </strong>{review.reviewDetails.name}</p>:null}
                        {review.reviewDetails.review?<p><strong>review: </strong>{review.reviewDetails.review}</p>:null}
                        {review.reviewDetails.rating?<p><strong>rating: </strong>{review.reviewDetails.rating}</p>:null}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ReviewForm;
