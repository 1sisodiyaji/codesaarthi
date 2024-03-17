import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const email = localStorage.getItem('user_email');
    const [error, setError] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        profilePic: null,
        about: ''
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`https://codesaarthiserver.cyclic.app/api/getUserData?email=${email}`);
                const userDataFromApi = response.data;
                setUserData(userDataFromApi);
                setFormData(userDataFromApi);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, [email]);

    const { name, profilePic, about } = formData;

    const handleChange = (e) => {
        if (e.target.name === 'profilePic') {
            setFormData({ ...formData, profilePic: e.target.files[0] });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if(profilePic === ""){
                setError("Please choose a picture");
            }else if (name === ""){
                setError("Please enteryour name");
            }else if (about === ""){
                setError("Please enter a bio");
            }else{
            const formDataToSend = new FormData();
            formDataToSend.append('name', name);
            formDataToSend.append('about', about);
            formDataToSend.append('profilePic', profilePic);


            const response = await axios.put('https://codesaarthiserver.cyclic.app/api/updateUserData', formDataToSend);
            if (response.data.status === 'success') {
                setIsEditing(false);
            }
        }
        } catch (error) {
            console.error('Error updating user data:', error);
        }
    };

    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="container d-flex justify-content-center align-items-center g-0" style={{ minHeight: '100vh' }}>
                    <div className="card p-3 g-0" style={{ height: '500px', width: '420px', backgroundColor: '#3393df', boxShadow: '5px 5px 10px #000435' }}>
                        {isEditing ? (
                            <>
                            {error && <p className='text-dark '>{error}</p>}
                            <form onSubmit={handleSubmit}>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <label htmlFor="profilePicInput" style={{ borderRadius: '50%', border: '5px solid green' }} className='p-5'>
                                        <i className="fi fi-ss-user" style={{ fontSize: '2rem' }}></i>
                                        <input type="file" accept='.png, .jpg, .jpeg, .webp' className="form-control d-none" id="profilePicInput" name="profilePic" onChange={handleChange} style={{ display: 'none' }} />
                                    </label>
                                </div>
                                <div className="card-header">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" name="name" value={name} onChange={handleChange} />
                                </div>
                                <div className="card-body mb-4">
                                    <h5 className="card-title">About</h5>
                                    <p className="card-text">
                                        <label htmlFor="about" className="form-label"></label>
                                        <textarea className="form-control" id="about" name="about" value={about} onChange={handleChange}></textarea>
                                    </p>
                                    <button type="submit" className="btn btn-success text-capitalize">Update</button>
                                </div>
                            </form>
                            </>
                        ) : (
                            <>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <div style={{ borderRadius: '50%', border: '5px solid green' }} className='p-1'>
                                        <img
                                            src={profilePic ? URL.createObjectURL(profilePic) : <> <div className="border border-success">
                                                <i className="fi fi-ss-user"></i>
                                            </div></>}
                                            className="rounded-circle"
                                            height="100"
                                            alt="User Profile Pic"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                                <div className="card-header">{name}</div>
                                <div className="card-body mb-4">
                                    <h5 className="card-title">About</h5>
                                    <p className="card-text">{about}</p>
                                    <button type="button" className="btn btn-success text-capitalize" onClick={() => setIsEditing(true)}>Edit</button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Profile;
