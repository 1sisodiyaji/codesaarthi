import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import Loading from "../../component/Loading";
import config from "../../config/config";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const UserData = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.user);
    const [editing, setEditing] = useState(false);
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [imagePreview, setImagePreview] = useState(user ? user.image : "https://res.cloudinary.com/ducw7orvn/image/upload/v1721024136/codesaarthi/article-1721024134471.png");

    const initializeSocialMediaLinks = (links) => {
        // If no links, initialize with one empty string
        return Array.isArray(links) && links.length > 0 
            ? JSON.parse(links[0]) 
            : [""];
    };

    const [formData, setFormData] = useState({
        name: user?.name || "",
        institute: user?.institute || "",
        location: user?.location || "",
        dateOfBirth: user?.dateOfBirth || "",
        contact: user?.contact || "",
        socialMediaLinks: initializeSocialMediaLinks(user?.socialMediaLinks || [""]),
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setImagePreview(URL.createObjectURL(file));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = user._id;
        try {
            setLoading(true);
            const data = new FormData();
            if (image) data.append("image", image);
            data.append("_id", id);
            data.append("name", formData.name);
            data.append("institute", formData.institute);
            data.append("location", formData.location);
            data.append("dateOfBirth", formData.dateOfBirth);
            data.append("contact", formData.contact);
            data.append("socialMediaLinks", JSON.stringify(formData.socialMediaLinks));

            const response = await axios.post(
                `${config.BASE_URL}/api/updateProfile`,
                data,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            if (response.status === 200) {
                toast.success("Profile updated successfully!", { theme: "dark" });
                setEditing(false);
                setLoading(false);
                navigate("/profile");
            } else {
                toast.error("Profile update failed!", { theme: "dark" });
                console.log("Failed to update profile:", response);
                setLoading(false);
            }
        } catch (error) {
            console.error("Error updating profile:", error);
            toast.error("Error updating profile!", { theme: "dark" });
            setLoading(false);
        }
    };

    const logout = async () => {
        try {
            const response = await axios.post(`${config.BASE_URL}/api/logout`);
            if (response.status === 200) {
                Cookies.remove("token");
                window.location.href = "/";
            } else {
                console.log("Logout failed");
            }
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    const editingMode = () => {
        setEditing(!editing);
    };

    const deleteUser = async (id) => {
        try {
            const response = await axios.delete(
                `${config.BASE_URL}/api/delete/${id}`
            );
            if (response.status === 200) {
                toast.success("User deleted successfully!", { theme: "dark" });
                navigate("/login");
            } else {
                toast.error("Failed to delete user!", { theme: "dark" });
            }
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    const handleSocialMediaLinkKeyPress = (index, e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            const newLinks = [...formData.socialMediaLinks];
            if (newLinks[index] && index === newLinks.length - 1) {
                newLinks.push("");
                setFormData({ ...formData, socialMediaLinks: newLinks });
            }
        }
    };

    const removeSocialMediaLink = (index) => {
        const newLinks = formData.socialMediaLinks.filter((_, i) => i !== index);
        setFormData({ ...formData, socialMediaLinks: newLinks });
    };

    const handleSocialMediaLinkChange = (index, value) => {
        const newLinks = [...formData.socialMediaLinks];
        newLinks[index] = value;
        setFormData({ ...formData, socialMediaLinks: newLinks });
    };
    
    const getSocialMediaNamesFromLinks = (links) => {
        const socialMediaMap = {
            'linkedin.com': 'LinkedIn',
            'github.com': 'GitHub',
            'instagram.com': 'Instagram',
            'facebook.com': 'Facebook',
            // Add more mappings as needed
        };
    
        return links.map(link => {
            try {
                const url = new URL(link);
                const hostname = url.hostname;
    
                // Remove 'www.' prefix if it exists
                const cleanedHostname = hostname.startsWith('www.') ? hostname.substring(4) : hostname;
    
                // Find the social media name based on the hostname
                return socialMediaMap[cleanedHostname] || cleanedHostname; // Fallback to hostname if not found
            } catch (e) {
                console.error(`Invalid URL: ${link}`, e);
                return null;
            }
        }).filter(name => name !== null); // Filter out null values for invalid URLs
    }
    
    // Assuming user.socialMediaLinks is a JSON string within an array
    const socialMediaLinks = user && Array.isArray(user.socialMediaLinks) 
        ? JSON.parse(user.socialMediaLinks[0]) 
        : [""];
    const socialMediaHostnames = getSocialMediaNamesFromLinks(socialMediaLinks);

    return (
        <>
            <ToastContainer />
            {loading && <Loading message="loading profile data " />}
            {user && (
                <div className="row">
                    <div className="col-md-4">
                        <img
                            src={imagePreview}
                            alt="Profile"
                            className="img-fluid rounded-circle"
                            style={{ width: "200px", height: "200px", objectFit: "cover" }}
                        />
                        {editing && (
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        )}
                    </div>
                    <div className="col-md-8">
                        {editing ? (
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="form-control"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="institute" className="form-label">
                                        Institute
                                    </label>
                                    <input
                                        type="text"
                                        id="institute"
                                        name="institute"
                                        className="form-control"
                                        value={formData.institute}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="location" className="form-label">
                                        Location
                                    </label>
                                    <input
                                        type="text"
                                        id="location"
                                        name="location"
                                        className="form-control"
                                        value={formData.location}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="dateOfBirth" className="form-label">
                                        Date of Birth
                                    </label>
                                    <input
                                        type="date"
                                        id="dateOfBirth"
                                        name="dateOfBirth"
                                        className="form-control"
                                        value={formData.dateOfBirth}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="contact" className="form-label">
                                        Contact
                                    </label>
                                    <input
                                        type="text"
                                        id="contact"
                                        name="contact"
                                        className="form-control"
                                        value={formData.contact}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="socialMediaLinks" className="form-label">
                                        Social Media Links
                                    </label>
                                    {formData.socialMediaLinks.map((link, index) => (
                                        <div key={index} className="mb-2 d-flex align-items-center">
                                            <input
                                                type="text"
                                                className="form-control me-2"
                                                value={link}
                                                onChange={(e) => handleSocialMediaLinkChange(index, e.target.value)}
                                                onKeyDown={(e) => handleSocialMediaLinkKeyPress(index, e)}
                                                placeholder="Enter social media link"
                                            />
                                            <div 
                                                onClick={() => removeSocialMediaLink(index)}
                                            >
                                                <i class="fi fi-sr-trash btn btn-sm bg-danger text-light"></i>
                                            </div>
                                        </div>
                                    ))}
                                    
                                    <button
                                        type="button"
                                        className="btn btn-sm text-capitalize"
                                        onClick={() => setFormData({ ...formData, socialMediaLinks: [...formData.socialMediaLinks, ""] })}
                                    >
                                        Add Another Link
                                    </button>
                                </div>
                                <div className='row g-0'>
                                        <div className='col-6'>
                                        <button type="submit" className="btn bg-success rounded-4 text-capitalize">
                                   {loading ? 'updatingYour profile ...' : 'Update'} <i class="fi fi-ss-check-circle"></i>
                                </button>
                                        </div>
                                        <div className='col-6 text-end'>
                                <button onClick={editingMode} className="btn btn-secondary rounded-4 text-capitalize">
                                    cancel
                                </button>
                                        </div>
                                    </div>
                               
                            </form>
                        ) : (
                            <div>
                                <h3>{user.name}</h3>
                                <p><strong>Institute:</strong> {user.institute}</p>
                                <p><strong>Location:</strong> {user.location}</p>
                                <p><strong>Date of Birth:</strong> {user.dateOfBirth}</p>
                                <p><strong>Contact:</strong> {user.contact}</p>
                                <p><strong>Social Media Links:</strong></p>
                                <div>
                                    {socialMediaHostnames.map((name, index) => (
                                        <Link key={index} to ={user.socialMediaLinks[index]} target='blank' className='mx-2 iconColor'> <i className={`fi fi-brands-${name.toLowerCase()}`} style={{fontSize: '2rem'}}></i> </Link>
                                    ))}
                                </div>
                                <button className="btn bg-warning mx-2 text-capitalize  btn-sm  rounded-8 " onClick={editingMode}>
                                    Edit Profile <i class="fi fi-sr-pen-clip"></i>
                                </button>
                                <button className="btn bg-danger mx-2 text-capitalize  btn-sm  rounded-8 " onClick={() => deleteUser(user._id)}>
                                    Delete Account <i class="fi fi-sr-trash-xmark"></i>
                                </button>
                                <button className="btn btn-secondary mx-2 text-capitalize  btn-sm  rounded-8" onClick={logout}>
                                    Logout <i class="fi fi-br-sign-out-alt"></i>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default UserData;
