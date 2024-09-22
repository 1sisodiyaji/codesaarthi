import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GitHubProfile = () => {
    const [userData, setUserData] = useState(null);  

    const fetchUserData = async (username) => {
        try { 
            const userResponse = await axios.get(`https://api.github.com/users/${username}`);
            setUserData(userResponse.data);  
        } catch (error) {
            console.error('Error fetching GitHub data:', error);
        }
    };
    useEffect(() => {
        const storedUsername = localStorage.getItem('githubUsername');
            fetchUserData(storedUsername);
    }, []);

    return (
        <div className="w-full">
            {userData && (
                <div className="bg-slate-300 dark:bg-gray-700 p-4">
                    <div className='flex items-center'>
                        <img src={userData.avatar_url} alt={userData.login} style={{ width: '150px', borderRadius: '50%' }} />

                        <div className='mx-4'>
                            <h2 className='font-bold text-3xl'>{userData.name}</h2>
                            <p>{userData.bio}</p>
                            <p><strong>Location:</strong> {userData.location}</p>
                        </div>
                    </div>

                    <div className='flex p-4 justify-around items-center'>
                        <div>
                            <p><strong>Public Repos:</strong> {userData.public_repos}</p>
                            <div className="radial-progress text-primary" style={{ "--value": userData.public_repos }} role="progressbar">
                                {userData.public_repos} %
                            </div>
                        </div>

                        <div>
                            <p><strong>Followers:</strong> {userData.followers}</p>
                            <div className="radial-progress" style={{ "--value": userData.followers }} role="progressbar">{userData.followers}%</div>
                        </div>

                        <div>
                            <p><strong>Following:</strong> {userData.following}</p>
                            <div
                                className="radial-progress bg-primary text-primary-content border-primary border-4"
                                style={{ "--value": userData.following }}
                                role="progressbar">
                                {userData.following}%
                            </div>
                        </div>

                    </div>

                </div>
            )}
 
        </div>
    );
};

export default GitHubProfile;
