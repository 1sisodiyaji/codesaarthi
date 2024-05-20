import React, { useState } from 'react';
import axios from 'axios';
import { Helmet } from "react-helmet";

const Profile = () => {
    const [profile, setProfile] = useState({
        name: '',
        institute: '',
        location: '',
        dateOfBirth: '',
        contact: '',
        socialMediaLinks: '',
        photo: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file && file.size <= 2097152) {
            setProfile({ ...profile, photo: file });
        } else {
            alert('File size should be less than 2MB');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (const key in profile) {
            formData.append(key, profile[key]);
        }
        try {
            await axios.post('/api/profile', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Profile submitted successfully');
        } catch (error) {
            console.error('There was an error uploading the profile!', error);
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

            <div className="container-fluid  bg-black">
                <div className="container p-lg-5">
                    <div className="row g-0 p-lg-3">
                        <div className="col-1"></div>
                        <div className="col-lg-10">
                            <div className="card p-lg-5 m-lg-5 m-1 p-2 text-light" style={{ backgroundColor: '#1E1E1E' }}>
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-0">
                                        <div className="col-4">
                                            <img src="https://via.placeholder.com/150" className='img-fluid imageHeight' style={{ borderRadius: '50%' }} alt="" />
                                            <input type="file" name="photo" accept="image/*" onChange={handlePhotoChange} />
                                        </div>
                                        <div className="col-8 ps-2">

                                            <div className='d-flex my-2 align-items-center'>
                                            <p>Name:</p> <input type="text" className='w-100 rounded-8 ps-2 ms-2 bg-dark border-0 text-light' name="name" value={profile.name} onChange={handleChange} />
                                            </div>

                                            <div className='d-flex my-2 align-items-center'>
                                            <p>Institute: </p> <input type="text" className='w-100 rounded-8 ps-2 ms-2 bg-dark border-0 text-light' name="institute" value={profile.institute} onChange={handleChange} />
                                            </div>

                                            <div className='d-flex my-2 align-items-center'>
                                            <p>Location: </p> <input type="text" className='w-100 rounded-8 ps-2 ms-2 bg-dark border-0 text-light' name="location" value={profile.location} onChange={handleChange} />
                                            </div>
                                            
                                            <div className='d-flex my-2 align-items-center'>
                                            <p>Date of Birth: </p> <input type="date" className='w-100 rounded-8 ps-2 ms-2 bg-dark border-0 text-light' name="dateOfBirth" value={profile.dateOfBirth} onChange={handleChange} />
                                            </div>
                                            
                                            <div className='d-flex my-2 align-items-center'>
                                            <p>Contact: </p>  <input type="text" className='w-100 rounded-8 ps-2 ms-2 bg-dark border-0 text-light'  name="contact" value={profile.contact} onChange={handleChange} />
                                            </div>

                                            <div className='d-flex my-2 align-items-center'>
                                            <p>Social Media Links: </p> <input type="text" className='w-100 rounded-8 ps-2 ms-2 bg-dark border-0 text-light' name="socialMediaLinks" value={profile.socialMediaLinks} onChange={handleChange} />
                                            </div>

                                            <button type="submit" className='bg-dark btn text-success text-capitalize border '>Update</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;

