import React from 'react';
import './ProfileCard.css';

function ProfileCard() {
  // Obtener los datos del sessionStorage
  const authToken = sessionStorage.getItem('auth-token');
  const name = sessionStorage.getItem('name');
  const phone = sessionStorage.getItem('phone');
  const email = sessionStorage.getItem('email');

  return (
    <div className="profile-card">
      <h2>User Profile</h2>
      {authToken ? (
        <div className="profile-details">
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Phone:</strong> {phone}</p>
          <p><strong>Email:</strong> {email}</p>
        </div>
      ) : (
        <p>No user information available. Please log in.</p>
      )}
    </div>
  );
}

export default ProfileCard;
