import React, { useState } from 'react';
import axios from 'axios';
import config from '../config/config';
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WidgetCloudinary from '../component/WidgetCloudinary';
import Cookies from 'js-cookie';

const CreateRoadmap = () => {
    const [title, setTitle] = useState('');
    const [thumbnail, setThumbnail] = useState(null);
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

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        const data = {
            title,
            thumbnail: thumbnail? thumbnail : null,
            description,
            topics: JSON.stringify(topics)
        }
        try {
            setLoading(true);
            const token = Cookies.get("Codesaarthi-token");

            const response = await axios.post(`${config.BASE_URL}/Admin/createRoadmap`, data, {
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.status === 201) {
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

    const handleSuccess = (info) => {
        setThumbnail(info.secure_url);
        console.log('Upload successful:', info.secure_url);
      };

      const handleFailure = (error) => {
        console.error('Upload failed:', error);
      };

    return (
        <>
            <ToastContainer />
            <div className='design container-fluid g-0' style={{minHeight: '100vh' , overflowY: 'scroll'}}>
                <h2 className='text-center  py-3'>Create Roadmap</h2>
                <form onSubmit={handleSubmit} className=' p-4 container py-3'>
                    <div className='my-3 d-flex p-2'>
                        <label className=' pe-3'>Title:</label>
                        <input className='w-100 border-0 rounded-8   ps-2' type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    
                    <WidgetCloudinary
                        cloudName="ducw7orvn"
                        uploadPreset="codesaarthi"
                        onSuccess={handleSuccess}
                        onFailure={handleFailure}
                    />
                    
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
