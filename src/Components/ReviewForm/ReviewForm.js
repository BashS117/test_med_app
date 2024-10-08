import React from 'react';
import './ReviewForm.css'

const ReviewForm = ({ reviews }) => {
    return (
        <div className="reviews-table">
            <h2>Reviews</h2>
            <table>
                <thead>
                    <tr>
                        <th>Serial Number</th>
                        <th>Doctor Name</th>
                        <th>Doctor Speciality</th>
                        <th>Provide feedback</th>
                        <th>Review Given</th>
                    </tr>
                </thead>
                <tbody>
                    {reviews.map((review, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{review.doctorName}</td>
                            <td>{review.doctorSpeciality}</td>
                            <td>
                                <button 
                                    className="feedback-btn"
                                    onClick={() => alert(`Provide feedback for ${review.doctorName}`)}
                                >
                                    Click Here
                                </button>
                            </td>
                            <td>{review.reviewGiven ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReviewForm;
