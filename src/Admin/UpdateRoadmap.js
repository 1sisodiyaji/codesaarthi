import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config/config';
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateRoadmap = () => {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const [roadmap, setRoadmap] = useState(null);
    const [loading, setLoading] = useState(false);
    const [imagePreview, setImagePreview] = useState(null); 
const[thumbnail , setThumbnail] = useState(null);

    useEffect(() => {
        const fetchRoadmap = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${config.BASE_URL}/Admin/getRoadmap/${id}`);
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
    }, [id]);

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
            const response = await axios.put(`${config.BASE_URL}/Admin/updateRoadmap/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (response.status === 200) {
                setLoading(false);
                toast.success("Roadmap Updated Successfully", { theme: "dark" });
                navigate("/Admin");  
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
        return   <div className="vh-100 text-warning d-flex justify-content-center align-items-center">
        <div className="card" aria-hidden="true" style={{width: '350px'}}>
      <div className="text-center">
        <img src="https://res.cloudinary.com/ducw7orvn/image/upload/v1721031578/loader_bhnpfb.gif" style={{height: '125px', width: '115px'}} className="card-img-top" alt="..." />
    </div>
      <div className="card-body">
        <h5 className="card-title placeholder-glow">
          <span className="placeholder col-6"></span>
        </h5>
        <p className="card-text placeholder-glow">
          <span className="placeholder col-7"></span>
          <span className="placeholder col-4"></span>
          <span className="placeholder col-4"></span>
          <span className="placeholder col-6"></span>
          <span className="placeholder col-8"></span>
        </p>
        <a href='/' className="btn btn-secondary btn-block disabled placeholder col-6" aria-disabled="true"> loading Roadmap</a>
      </div>
    </div>
      </div>
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
                            <button type="button" className='btn border border-warning text-light bg-warning text-capitalize shadow-6' onClick={() => addPoint(index)}>Add Point</button>
                        </div>
                    ))}
                    <button type="button" className='btn border border-warning text-light bg-warning text-capitalize shadow-6' onClick={addTopic}>Add Topic</button>
                    <button type="submit" className='btn border border-success text-light bg-success text-capitalize shadow-6 ms-3'> {loading ? "Updating..." : "Update Roadmap"} </button>
                </form>
            </div>
        </>
    );
};

export default UpdateRoadmap;
