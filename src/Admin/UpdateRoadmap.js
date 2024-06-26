import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config/config';
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateRoadmap = () => {
    const { title } = useParams();
    const navigate = useNavigate();
    const [roadmap, setRoadmap] = useState(null);
    const [loading, setLoading] = useState(false);
    const [imagePreview, setImagePreview] = useState(null); 
const[thumbnail , setThumbnail] = useState(null);

    useEffect(() => {
        const fetchRoadmap = async () => {
            try {
                setLoading(true);
                const response = await axios.post(`${config.BASE_URL}/Admin/getRoadmap/${title}`);
                setRoadmap(response.data); 
                if (response.data.thumbnail) {
                    setImagePreview(response.data.thumbnail);
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching roadmap:", error);
                setLoading(false);
                toast.error("Error Fetching Roadmap. Please try again later.", {
                    theme: "dark",
                });
            }
        };
        fetchRoadmap();
    }, [title]);

    const handleTopicChange = (index, event) => {
        const newTopics = [...roadmap.topics];
        newTopics[index][event.target.name] = event.target.value;
        setRoadmap({ ...roadmap, topics: newTopics });
    };

    const handlePointChange = (topicIndex, pointIndex, event) => {
        const newTopics = [...roadmap.topics];
        newTopics[topicIndex].points[pointIndex] = event.target.value;
        setRoadmap({ ...roadmap, topics: newTopics });
    };

    const addTopic = () => {
        const newTopics = [...roadmap.topics, { headline: '', points: [''] }];
        setRoadmap({ ...roadmap, topics: newTopics });
    };

    const addPoint = (index) => {
        const newTopics = [...roadmap.topics];
        newTopics[index].points.push('');
        setRoadmap({ ...roadmap, topics: newTopics });
    };

    const handleThumbnailImageChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp", "image/svg+xml"];
        if (!allowedTypes.includes(file.type)) {
            alert("Only JPEG, PNG, JPG, WebP, and SVG formats are allowed.");
            return;
        }

        if (file.size > 2 * 1024 * 1024) {
            alert("File size should be less than 2MB.");
            return;
        }

        setThumbnail(file);
        setImagePreview(URL.createObjectURL(file));
    };

    const handleUpdate = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('title', roadmap.title);
        if (thumbnail) {
            formData.append('thumbnail', thumbnail);
        }
        formData.append('description', roadmap.description);
        formData.append('topics', JSON.stringify(roadmap.topics));
        
        try {
            setLoading(true);
            const response = await axios.put(`${config.BASE_URL}/Admin/updateRoadmap/${title}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (response.status === 200) {
                setLoading(false);
                toast.success("Roadmap Updated Successfully", { theme: "dark" });
                navigate("/Admin"); // Navigate to the admin dashboard or wherever you want after update
            } else {
                setLoading(false);
                toast.error("Failed to Update Roadmap", { theme: "dark" });
            }
        } catch (error) {
            console.error("Error updating roadmap:", error);
            setLoading(false);
            toast.error("Error Updating Roadmap. Please try again later.", {
                theme: "dark",
            });
        }
    };

    if (loading || !roadmap || !roadmap.topics) {
        return <div className='vh-100 bg-dark'>
            toast.loading("Loading ...");
            </div>;
    }

    return (
        <>
            <ToastContainer />
            <div className=' bg-dark'>
                <h2 className='text-center text-warning py-3'>Update Roadmap</h2>
                <form onSubmit={handleUpdate} className=' p-4 container py-3'>
                    <div className='my-3 d-flex p-2'>
                        <label className='text-light pe-3'>Title:</label>
                        <input className='w-100 border-0 rounded-8 bg-black text-light ps-2' type="text" value={roadmap.title} readOnly />
                    </div>
                    <div>
                        <label className='text-light pe-3'>Thumbnail:</label>
                        <input type="file" accept='image/*' onChange={handleThumbnailImageChange} style={{ display: "none" }}
                            id="thumbnailInput" />
                        <label htmlFor="thumbnailInput">
                            <i className="fi fi-rr-graphic-style text-warning mx-2" style={{ cursor: "pointer" }} ></i>
                        </label>
                        {imagePreview && (
                            <div className="mb-3">
                                <img
                                    src={imagePreview}
                                    alt="Thumbnail"
                                    style={{ maxHeight: "200px" }}
                                    className="img-fluid"
                                />
                            </div>
                        )}
                    </div>
                    <div className='my-3 d-flex p-2'>
                        <label className='text-light pe-3'>Description:</label>
                        <textarea className='w-100  border-0 rounded-8 bg-black text-light ps-2' value={roadmap.description} onChange={(e) => setRoadmap({ ...roadmap, description: e.target.value })} />
                    </div>
                    {roadmap.topics.map((topic, index) => (
                        <div key={index} className='my-3 border border-warning rounded-6 p-3'>
                            <label className='text-light pe-3'>Headline:</label>
                            <input
                                type="text"
                                name="headline"
                                value={topic.headline}
                                className='w-75  border-0 rounded-8 bg-black text-light ps-2 my-2'
                                onChange={(e) => handleTopicChange(index, e)}
                            />
                            {topic.points.map((point, pIndex) => (
                                <div key={pIndex} className='my-3 pe-3'>
                                    <label className='text-light pe-3'>Point:</label>
                                    <input
                                        type="text"
                                        value={point}
                                        className='w-75  border-0 rounded-8 bg-black text-light ps-2 my-2'
                                        onChange={(e) => handlePointChange(index, pIndex, e)}
                                    />
                                </div>
                            ))}
                            <button type="button" className='btn border border-warning text-warning text-capitalize shadow-6' onClick={() => addPoint(index)}>Add Point</button>
                        </div>
                    ))}
                    <button type="button" className='btn border border-warning text-warning text-capitalize shadow-6' onClick={addTopic}>Add Topic</button>
                    <button type="submit" className='btn border border-success text-success text-capitalize shadow-6 ms-3'> {loading ? "Updating..." : "Update Roadmap"} </button>
                </form>
            </div>
        </>
    );
};

export default UpdateRoadmap;
