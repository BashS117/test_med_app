// Following code has been commented with appropriate comments for your reference.
import React, { useState } from 'react';
import './GiveReviews.css'
// Function component for giving reviews
function GiveReviews({onSubmitReview}) {
  // State variables using useState hook
  const [showForm, setShowForm] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: null
  });

  // Function to handle button click event
  const handleButtonClick = () => {
    setShowForm(true);
  };

  // Function to handle form input changes
  const handleChange = (e) => {
    // Update the form data based on user input
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 // Function to handle star rating change
  const handleRatingChange = (e) => {
    setFormData({ ...formData, rating: parseInt(e.target.value) });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedMessage(formData);
    onSubmitReview(formData)
    setFormData({
      name: '',
      review: '',
      rating: 0
    });
    setShowForm(false)
    // Check if all required fields are filled before submission
    if (formData.name && formData.review && formData.rating > 0) {
      setShowWarning(false);
    } else {
      setShowWarning(true);
    }
  };

  return (
    <div>
     
      {!showForm ? (
        // Display button to open the form
        <button onClick={handleButtonClick} disabled={submittedMessage} style={{
            backgroundColor: submittedMessage ? 'gray' : '', // Cambia color si submittedMessage es true
            cursor: submittedMessage ? 'not-allowed' : 'pointer' // Cambia cursor también
          }} >Click Here</button>
      ) : (
        // Display form for giving feedback
        <form onSubmit={handleSubmit}>
          <h2>Give Your Feedback</h2>
          {/* Display warning message if not all fields are filled */}
          {showWarning && <p className="warning">Please fill out all fields.</p>}
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="review">Review:</label>
            <textarea id="review" name="review" value={formData.review} onChange={handleChange} />
          </div>

      {/* Star rating section */}
          <div className="rating-stars">
            <label>Rating:</label>
            <div className="stars">
              {[5,4,3,2,1].map((star) => (
                <label key={star}>
                  <input 
                    type="radio" 
                    name="rating" 
                    value={star} 
                    checked={formData.rating === star} 
                    onChange={handleRatingChange}
                  />
                  ★
                </label>
              ))}
            </div>
          </div>
          {/* Submit button for form submission */}
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default GiveReviews;
