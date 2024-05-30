import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from "react-helmet";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
    const [profile, setProfile] = useState({
        name: '',
        institute: '',
        location: '',
        dateOfBirth: '',
        contact: '',
        socialMediaLinks: '',
      });
      const [image, setImage] = useState(null);
      const [imagePreview, setImagePreview] = useState(null);
    
      useEffect(() => {
        // Load initial profile data from the backend
        const fetchProfileData = async () => {
          try {
            const userEmail = localStorage.getItem('userEmail');
            const response = await axios.get(`https://server-fl9q.onrender.com/api/profile/${userEmail}`);
            setProfile(response.data);
          } catch (error) {
            toast.error('Failed to load profile data');
          }
        };
    
        fetchProfileData();
      }, []);
    
      const handleChange = (e) => {
        setProfile({
          ...profile,
          [e.target.name]: e.target.value,
        });
      };

      const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          setImage(file);
          const reader = new FileReader();
          reader.onloadend = () => {
            setImagePreview(reader.result);
          };
          reader.readAsDataURL(file);
        }
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const userEmail = localStorage.getItem('userEmail');
          await axios.put(`https://server-fl9q.onrender.com/api/profile/${userEmail}`, profile);
          toast.success('Profile updated successfully');
        } catch (error) {
          toast.error('Failed to update profile');
        }
      };
    
      const handleImageUpload = async () => {
        if (image) {
          const formData = new FormData();
          formData.append('photo', image);
          try {
            const userEmail = localStorage.getItem('userEmail');
            const response = await axios.post(`https://server-fl9q.onrender.com/api/profile/${userEmail}/photo`, formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
            console.log("Your response is " + response);
            toast.success('Profile image updated successfully');
          } catch (error) {
            console.log("Your response is " + error);
            toast.error('Failed to update profile image');
          }
        }
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

            <div className="container-fluid bg-black design">
      <div className="container p-lg-5 p-0">
        <div className="row p-lg-4 vh-100 p-0">
          <div className="col-lg-1 col-0"></div>
          <div className="col-lg-10 col-12">
            <div className="card p-lg-5 m-lg-5 p-1 text-light" style={{ backgroundColor: '#1E1E1E' }}>
              <form onSubmit={handleSubmit}>
                <div className="row g-0">
                  <div className="col-4">
                    <img src={imagePreview || 'https://via.placeholder.com/150'} className='img-fluid imageHeight' style={{ borderRadius: '50%' }} alt="" />
                    <input type="file" name="photo" accept="image/*" onChange={handlePhotoChange} />
                    <button type="button" className='bg-dark btn text-success text-capitalize border mt-2' onClick={handleImageUpload}>Upload Image</button>
                  </div>
                  <div className="col-8 ps-2">
                    <div className='d-flex my-2 align-items-center'>
                      <p>Name:</p>
                      <input type="text" className='w-100 rounded-8 ps-2 ms-2 bg-dark border-0 text-light' name="name" value={profile.name} onChange={handleChange} />
                    </div>
                    <div className='d-flex my-2 align-items-center'>
                      <p>Institute:</p>
                      <input type="text" className='w-100 rounded-8 ps-2 ms-2 bg-dark border-0 text-light' name="institute" value={profile.institute} onChange={handleChange} />
                    </div>
                    <div className='d-flex my-2 align-items-center'>
                      <p>Location:</p>
                      <input type="text" className='w-100 rounded-8 ps-2 ms-2 bg-dark border-0 text-light' name="location" value={profile.location} onChange={handleChange} />
                    </div>
                    <div className='d-flex my-2 align-items-center'>
                      <p>Date of Birth:</p>
                      <input type="date" className='w-100 rounded-8 ps-2 ms-2 bg-dark border-0 text-light' name="dateOfBirth" value={profile.dateOfBirth} onChange={handleChange} />
                    </div>
                    <div className='d-flex my-2 align-items-center'>
                      <p>Contact:</p>
                      <input type="text" className='w-100 rounded-8 ps-2 ms-2 bg-dark border-0 text-light' name="contact" value={profile.contact} onChange={handleChange} />
                    </div>
                    <div className='d-flex my-2 align-items-center'>
                      <p>Social Media Links:</p>
                      <input type="text" className='w-100 rounded-8 ps-2 ms-2 bg-dark border-0 text-light' name="socialMediaLinks" value={profile.socialMediaLinks} onChange={handleChange} />
                    </div>
                    <button type="submit" className='bg-dark btn text-success text-capitalize border'>Update</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-1 col-0"></div>
        </div>
      </div>
      <ToastContainer />
    </div>
        </>
    );
};

export default Profile;

