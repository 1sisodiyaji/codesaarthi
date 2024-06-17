import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from './config';  

const UserInfo = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');

      try {
        const response = await axios.post(
          `${config.BASE_URL}/api/user`,
          {}, // empty object as the data payload
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);

        if (response.data.status === 'success') {
          console.log('User data:', response.data.user);
          setUser(response.data.user);
        } else {
          throw new Error('Failed to fetch user information');
        }
      } catch (error) {
        console.error('Error fetching user information:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []); // Empty dependency array ensures the effect runs once on component mount

  if (loading) {
    return <p>Loading...</p>; // Or any loading indicator
  }

  if (error) {
    return <p>Error: {error}</p>; // Or handle error state
  }

  if (!user) {
    return <p>No user data found.</p>; // Handle case where user data is null
  }

  return (
    <div>
      <h1>User Information</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Render other user information as needed */}
    </div>
  );
};

export default UserInfo;
