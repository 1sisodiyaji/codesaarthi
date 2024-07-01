import React, { useState } from 'react';
import axios from 'axios';
import config from '../config/config';
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const CreateRoadmap = () => {
    const [title, setTitle] = useState('');
    const [thumbnail, setThumbnail] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [description, setDescription] = useState('');
    const [topics, setTopics] = useState([{ headline: '', points: [''] }]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(null);

    const handleTopicChange = (index, event) => {
        const newTopics = topics.map((topic, topicIndex) => {
            if (index !== topicIndex) return topic;
            return { ...topic, [event.target.name]: event.target.value };
        });
        setTopics(newTopics);
    };

    const handlePointChange = (topicIndex, pointIndex, event) => {
        const newTopics = topics.map((topic, index) => {
            if (index !== topicIndex) return topic;
            const newPoints = topic.points.map((point, pIndex) => {
                if (pointIndex !== pIndex) return point;
                return event.target.value;
            });
            return { ...topic, points: newPoints };
        });
        setTopics(newTopics);
    };

    const addTopic = () => {
        setTopics([...topics, { headline: '', points: [''] }]);
    };

    const addPoint = (index) => {
        const newTopics = topics.map((topic, topicIndex) => {
            if (index !== topicIndex) return topic;
            return { ...topic, points: [...topic.points, ''] };
        });
        setTopics(newTopics);
    };

    const handleThumbnailImageChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp", "images/svg"];
        if (!allowedTypes.includes(file.type)) {
            alert("Only JPEG, PNG, JPG, and WebP formats are allowed.");
            return;
        }

        if (file.size > 2 * 1024 * 1024) {
            alert("File size should be less than 2MB.");
            return;
        }

        setThumbnail(file);
        setImagePreview(URL.createObjectURL(file));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('thumbnail', thumbnail);
        formData.append('description', description);
        formData.append('topics', JSON.stringify(topics));
        try {
            setLoading(true);
            const response = await axios.post(`${config.BASE_URL}/Admin/createRoadmap`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (response.status === 200) {
                console.log("Course created successfully");
                setLoading(false);
                toast.success("Course Created successfully", { theme: "dark" });
                navigate("/Admin");
            } else {
                console.log("Course creation failed:", response.data.message);
                setLoading(false);
                toast.error("Course Creation Failed: " + response.data.message, { theme: "dark" });
            }
        } catch (error) {
            console.error("Error creating course:" + error);
            setLoading(false);
            toast.error("Error Creating Course. Please try again later.", {
                theme: "dark",
            });
        }
    };

    return (
        <>
            <ToastContainer />
            <div className='design'>
                <h2 className='text-center  py-3'>Create Roadmap</h2>
                <form onSubmit={handleSubmit} className=' p-4 container py-3'>
                    <div className='my-3 d-flex p-2'>
                        <label className=' pe-3'>Title:</label>
                        <input className='w-100 border-0 rounded-8   ps-2' type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div>
                        <label className=' pe-3'>Thumbnail:</label>
                        <input type="file" accept='image/*' onChange={handleThumbnailImageChange} style={{ display: "none" }}
                            id="thumbnailInput" />
                    </div>
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
                    <div className='my-3 d-flex p-2'>
                        <label className='  pe-3'>Description:</label>
                        <textarea className='w-100  border-0 rounded-8   ps-2' value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    {topics.map((topic, index) => (
                        <div key={index} className='my-3 border border-warning rounded-6 p-3'>
                            <label className='  pe-3'>Headline:</label>
                            <input
                                type="text"
                                name="headline"
                                value={topic.headline}
                                className='w-75  border-0 rounded-8   ps-2 my-2'
                                onChange={(e) => handleTopicChange(index, e)}
                            />
                            {topic.points.map((point, pIndex) => (
                                <div key={pIndex} className='my-3 pe-3'>
                                    <label className=' pe-3'>Point:</label>
                                    <input
                                        type="text"
                                        value={point}
                                        className='w-75  border-0 rounded-8  ps-2 my-2'
                                        onChange={(e) => handlePointChange(index, pIndex, e)}
                                    />
                                </div>
                            ))}
                            <button type="button" className='btn border border-warning text-light bg-warning text-capitalize shadow-6' onClick={() => addPoint(index)}>Add Point</button>
                        </div>
                    ))}
                    <button type="button" className='btn border border-warning text-light bg-warning text-capitalize shadow-6' onClick={addTopic}>Add Topic</button>
                    <button type="submit" className='btn border border-success text-light bg-success text-capitalize shadow-6 ms-3'> {loading ? "creating" : " Create Roadmap "}</button>
                </form>
            </div>
        </>
    );
};

export default CreateRoadmap;
