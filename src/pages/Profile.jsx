import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from "react-helmet";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import config from '../config/config'; 
import { useNavigate } from 'react-router-dom';

const Profile = () => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
const navigate = useNavigate();
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
  }, [2000]); // Empty dependency array ensures the effect runs once on component mount

  if (loading) {
    return <p>Loading...</p>; // Or any loading indicator
  }

  if (error) {
    return <p>Error: {error}</p>; // Or handle error state
  }

  if (!user) {
    return <p>No user data found.</p>; // Handle case where user data is null
  }

 
  const logout = () => {
    localStorage.removeItem("token");
    navigate('/');
  };


  return (
    <>
      <Helmet>
        <meta name="keywords" content="Profile , Codesaarthi Account , Account authentication , Profile searcher in codesaarthi" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codesaarthi.com/Profile" />
        <meta name="description" content="Profile page of users in codesaarthi , Defining the profile page of users." />
        <title>Profile | codesaarthi</title>
        <meta property="og:title" content="Profile | codesaarthi" />
        <meta property="og:description" content="Profile page of users in codesaarthi , Defining the profile page of users." />
        <meta property="og:image" content="https://codesaarthi.com/img/logo.png" />
        <meta property="og:url" content="https://codesaarthi.com/Profile" />
        <meta property="og:type" content="Education-Website" />
        <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
      </Helmet>

      <div>
      <h1>User Information</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <img src={user.image} alt="" />
      <button onClick={logout}>Logout</button>
    </div>
     
    </>
  );
};

export default Profile;

