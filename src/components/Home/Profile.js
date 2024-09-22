import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import GitHubProfile from './GithubProfile';
import TimeConverter from '../../helper/TimeConverter';
import config from "../../helper/config";


const initializeSocialMediaLinks = (links) => {
    if (Array.isArray(links) && links.length > 0) {
        try {
            const parsedLinks = JSON.parse(links[0]);
            return Array.isArray(parsedLinks) ? parsedLinks : [""];
        } catch (error) {
            console.error("Error parsing links:", error);
            return [""];
        }
    }
    return [""];
};

const getSocialMediaNamesFromLinks = (links) => {
    const socialMediaMap = {
        'linkedin.com': 'LinkedIn',
        'github.com': 'GitHub',
        'instagram.com': 'Instagram',
        'facebook.com': 'Facebook',
    };

    return links.map(link => {
        try {
            const url = new URL(link);
            const hostname = url.hostname;
            const cleanedHostname = hostname.startsWith('www.') ? hostname.substring(4) : hostname;
            return socialMediaMap[cleanedHostname] || cleanedHostname;
        } catch (e) {
            console.error(`Invalid URL: ${link}`, e);
            return null;
        }
    }).filter(name => name !== null);
};

const extractUsernameFromUrl = (url) => {
    try {
        const parsedURL = new URL(url);
        if (parsedURL.hostname === 'github.com') {
            const pathParts = parsedURL.pathname.split('/').filter(part => part);
            if (pathParts.length > 0) {
                return pathParts[0];
            }
        }
    } catch (e) {
        console.error('Invalid URL:', url, e);
    }
    return '';
};

const UserData = () => {
    const navigate = useNavigate(); 
    const [githubUrl, setGithubUrl] = useState('');
    const [storedUsername, setStoredUsername] = useState('');
    const user = useSelector((state) => state.user.user);
    const [profileState, setProfileState] = useState({
        editing: false,
        username: null,
        isLoading: false,
        showProfile: false,
        image: null,
        imagePreview: user ? user.image : "https://res.cloudinary.com/ducw7orvn/image/upload/v1721024136/codesaarthi/article-1721024134471.png",
        loading: false,
        formData: {
            name: user?.name || "",
            institute: user?.institute || "",
            location: user?.location || "",
            dateOfBirth: user?.dateOfBirth || "",
            contact: user?.contact || "",
            socialMediaLinks: initializeSocialMediaLinks(user?.socialMediaLinks || [""]),
        },
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileState(prevState => ({
            ...prevState,
            formData: { ...prevState.formData, [name]: value }
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setProfileState(prevState => ({
            ...prevState,
            image: file,
            imagePreview: URL.createObjectURL(file),
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = user._id;
        try {
            setProfileState(prevState => ({ ...prevState, loading: true }));
            const data = new FormData();
            if (profileState.image) data.append("image", profileState.image);
            data.append("_id", id);
            data.append("name", profileState.formData.name);
            data.append("institute", profileState.formData.institute);
            data.append("location", profileState.formData.location);
            data.append("dateOfBirth", profileState.formData.dateOfBirth);
            data.append("contact", profileState.formData.contact);
            data.append("socialMediaLinks", JSON.stringify(profileState.formData.socialMediaLinks));

            const response = await axios.post(
                `${config.BASE_URL}/api/updateProfile`,
                data,
                { headers: { "Content-Type": "multipart/form-data" } }
            );

            if (response.status === 200) {
                toast.success("Profile updated successfully!", { theme: "dark" });
                setProfileState(prevState => ({ ...prevState, editing: false, loading: false }));
                navigate("/");
            } else {
                throw new Error("Profile update failed!");
            }
        } catch (error) {
            console.error("Error updating profile:", error);
            toast.error("Error updating profile!", { theme: "dark" });
            setProfileState(prevState => ({ ...prevState, loading: false }));
        }
    };

    const handleDeleteUser = async () => {
        try {
            const response = await axios.delete(`${config.BASE_URL}/api/delete/${user._id}`);
            if (response.status === 200) {
                toast.success("User deleted successfully!", { theme: "dark" });
                navigate("/login");
            } else {
                throw new Error("Failed to delete user!");
            }
        } catch (error) {
            console.error("Error deleting user:", error);
            toast.error("Error deleting user!", { theme: "dark" });
        }
    };

    const handleGithubUrlChange = (e) => {
        setGithubUrl(e.target.value);
    };

    const handleSocialMediaLinkKeyPress = (index, e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            const newLinks = [...profileState.formData.socialMediaLinks];
            if (newLinks[index] && index === newLinks.length - 1) {
                newLinks.push("");
                setProfileState(prevState => ({
                    ...prevState,
                    formData: { ...prevState.formData, socialMediaLinks: newLinks }
                }));
            }
        }
    };

    const removeSocialMediaLink = (index) => {
        const newLinks = profileState.formData.socialMediaLinks.filter((_, i) => i !== index);
        setProfileState(prevState => ({
            ...prevState,
            formData: { ...prevState.formData, socialMediaLinks: newLinks }
        }));
    };

    const handleSocialMediaLinkChange = (index, value) => {
        const newLinks = [...profileState.formData.socialMediaLinks];
        newLinks[index] = value;
        setProfileState(prevState => ({
            ...prevState,
            formData: { ...prevState.formData, socialMediaLinks: newLinks }
        }));
    };

    const socialMediaLinks = user && Array.isArray(user.socialMediaLinks)
        ? JSON.parse(user.socialMediaLinks[0])
        : [""];
    const socialMediaHostnames = getSocialMediaNamesFromLinks(socialMediaLinks);

    const handleConnect = () => {
        const extractedUsername = extractUsernameFromUrl(githubUrl); 
        localStorage.setItem('githubUsername', extractedUsername);
        setProfileState(prevState => ({ ...prevState, isLoading: true })); 
        setTimeout(() => {
            setProfileState(prevState => ({ ...prevState, isLoading: false, showProfile: true }));
        }, 2000);
    };
    const removeGithub = () => {
        setStoredUsername("");
        localStorage.removeItem('githubUsername');
        setProfileState(prevState => ({...prevState, showProfile: false }));
    }

    useEffect(() => {
        const data = localStorage.getItem('githubUsername');
        setStoredUsername(data);
    }, []);

    return (
        <>
            {user && (
                <div className="md:w-[1100px] w-full h-auto bg-slate-200 dark:bg-gray-800 pt-20 text-black dark:text-white">
                    <div>
                        {profileState.editing ? (
                            <>
                                <img
                                    src={profileState.imagePreview}
                                    alt="Profile"
                                    className="rounded-full h-32 w-32 object-cover"
                                />
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />
                            </>
                        ) : (
                            <>
                                <div className='flex items-center justify-around space-x-4'>
                                    <img
                                        src={profileState.imagePreview}
                                        alt="Profile"
                                        className="rounded-full h-32 w-32 object-cover"
                                    />
                                    <div className='md:w-2/3'>
                                        <h3 className='font-bold text-xl'>{user.name}</h3>
                                        <div>
                                            {socialMediaHostnames.map((name, index) => (
                                                <Link key={index} to={user.socialMediaLinks[index]} target='blank' className='mx-2 iconColor'>
                                                    <i className={`fi fi-brands-${name.toLowerCase()}`} style={{ fontSize: '2rem' }}></i>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <button className="px-4 py-2 inline bg-yellow-600 m-2 capitalize rounded-lg" onClick={() => setProfileState(prevState => ({ ...prevState, editing: !prevState.editing }))}>
                                            Edit Profile <i className="fi fi-sr-pen-clip"></i>
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="py-5 ps-3">
                        {profileState.editing ? (
                            <form onSubmit={handleSubmit} className='space-y-4'>
                                <div>
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full p-2 bg-slate-300 dark:bg-gray-700 rounded-lg"
                                        value={profileState.formData.name}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="institute" className="form-label">Institute</label>
                                    <input
                                        type="text"
                                        id="institute"
                                        name="institute"
                                        className="w-full p-2 bg-slate-300 dark:bg-gray-700 rounded-lg"
                                        value={profileState.formData.institute}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="location" className="form-label">Location</label>
                                    <input
                                        type="text"
                                        id="location"
                                        name="location"
                                        className="w-full p-2 bg-slate-300 dark:bg-gray-700 rounded-lg"
                                        value={profileState.formData.location}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
                                    <input
                                        type="date"
                                        id="dateOfBirth"
                                        name="dateOfBirth"
                                        className="w-full p-2 bg-slate-300 dark:bg-gray-700 rounded-lg"
                                        value={profileState.formData.dateOfBirth}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="contact" className="form-label">Contact</label>
                                    <input
                                        type="number"
                                        id="contact"
                                        name="contact"
                                        className="w-full p-2 bg-slate-300 dark:bg-gray-700 rounded-lg"
                                        value={profileState.formData.contact}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="socialMediaLinks" className="form-label">Social Media Links</label>
                                    {profileState.formData.socialMediaLinks.map((link, index) => (
                                        <div key={index} className="mb-2 flex items-center">
                                            <input
                                                type="text"
                                                className="w-full p-2 bg-slate-300 dark:bg-gray-700 rounded-lg me-2"
                                                value={link}
                                                onChange={(e) => handleSocialMediaLinkChange(index, e.target.value)}
                                                onKeyDown={(e) => handleSocialMediaLinkKeyPress(index, e)}
                                                placeholder="Enter social media link"
                                            />
                                            <div onClick={() => removeSocialMediaLink(index)}>
                                                <i className="fi fi-sr-trash btn btn-sm text-red-500 text-light"></i>
                                            </div>
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        className="btn btn-sm capitalize"
                                        onClick={() => setProfileState(prevState => ({
                                            ...prevState,
                                            formData: { ...prevState.formData, socialMediaLinks: [...prevState.formData.socialMediaLinks, ""] }
                                        }))}
                                    >
                                        Add Another Link
                                    </button>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <button type="submit" className="btn bg-green-700 text-white rounded-4 capitalize">
                                            {profileState.loading ? 'Updating Your Profile...' : 'Update'} <i className="fi fi-ss-check-circle"></i>
                                        </button>
                                    </div>
                                    <div>
                                        <button onClick={() => setProfileState(prevState => ({ ...prevState, editing: false }))} className="btn">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </form>
                        ) : (
                            <>
                                {storedUsername && <GitHubProfile/>}
                                {!storedUsername && !profileState.showProfile ? 
                                    <> 
                                        <button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>Connect Your GitHub Here</button>
                                        <dialog id="my_modal_2" className="modal">
                                        <div className="modal-box bg-slate-400 dark:bg-gray-600 space-y-4">
                                            <h3 className="font-bold text-lg">Please Enter Your Github Url !</h3>
                                             <input type='url'
                                             className='rounded-lg p-2 w-full bg-slate-300 text-black dark:bg-gray-300'
                                             name='github_url'
                                             placeholder='Enter Github URL'
                                             value={githubUrl}
                                              onChange={handleGithubUrlChange}
                                             />
                                            <button className="btn" onClick={handleConnect}>
                                            {profileState.isLoading ? 'Connecting...' : 'Connect Your GitHub Here'}
                                           </button>
                                        </div>
                                        <form method="dialog" className="modal-backdrop">
                                            <button>close</button>
                                        </form>
                                        </dialog>
                                    </>
                                    :
                                    <>
                                     <button className="btn mt-2" onClick={removeGithub}>Disconnect Your GitHub</button>
                                    </>
                                }
                                <div className='space-y-4 py-5'>
                                    <div className='bg-slate-300 dark:bg-gray-600 ps-3'>
                                        <strong>Institute:</strong>
                                        <p className='text-xl space-x-2'>
                                            <i className="fi fi-sr-graduation-cap text-3xl mx-2"></i>
                                            {user.institute}
                                        </p>
                                    </div>
                                    <div className='bg-slate-300 dark:bg-gray-600 ps-3'>
                                        <strong>Location:</strong>
                                        <p className='text-xl space-x-2'>
                                            <i className="fi fi-ss-land-layer-location text-3xl mx-2"></i>
                                            {user.location}
                                        </p>
                                    </div>
                                    <div className='bg-slate-300 dark:bg-gray-600 ps-3'>
                                        <strong>Date of Birth:</strong>
                                        <p className='text-xl space-x-2'>
                                            <i className="fi fi-sr-calendar text-3xl mx-2"></i>
                                            <TimeConverter date={user.dateOfBirth} />
                                        </p>
                                    </div>
                                    <div className='bg-slate-300 dark:bg-gray-600 ps-3'>
                                        <strong>Contact:</strong>
                                        <p className='text-xl space-x-2'>
                                            <i className="fi fi-sr-mobile-button text-3xl mx-2"></i>
                                            {user.contact}
                                        </p>
                                    </div>
                                    <button className="capitalize rounded-lg px-4 py-2 bg-red-400 ms-2" onClick={handleDeleteUser}>
                                        Delete Account <i className="fi fi-sr-trash-xmark"></i>
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default UserData;
