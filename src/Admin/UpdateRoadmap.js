import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config/config';
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from '../component/Loading';
import WidgetCloudinary from '../component/WidgetCloudinary';
import Cookies from 'js-cookie';

const UpdateRoadmap = () => {
    const { slug } = useParams(); 
    const navigate = useNavigate();
    const [id ,setId] = useState(null);
    const [roadmap, setRoadmap] = useState(null);
    const [loading, setLoading] = useState(false);
    const [imagePreview, setImagePreview] = useState(null); 
    const[thumbnail , setThumbnail] = useState(null);

    useEffect(() => {
        const fetchRoadmap = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${config.BASE_URL}/Admin/getRoadmap/${slug}`);
                setRoadmap(response.data); 
                setId(response.data._id);
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
    }, [slug]);

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


    const handleUpdate = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', roadmap.title);
        if (thumbnail) {
            formData.append('thumbnail', thumbnail);
        }
        formData.append('description', roadmap.description);
        formData.append('topics', JSON.stringify(roadmap.topics));
        
        try {
            setLoading(true);
            const token = Cookies.get("Codesaarthi-token");

            const response = await axios.put(`${config.BASE_URL}/Admin/updateRoadmap/${id}`, formData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
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

    const handleSuccess = (info) => {
        setThumbnail(info.secure_url);
        console.log('Upload successful:', info.secure_url);
      };

      const handleFailure = (error) => {
        console.error('Upload failed:', error);
      };

    if (loading || !roadmap || !roadmap.topics) {
        return   <div> <Loading message="Loading Roadmap details" /></div>
    }

    return (
        <>
            <ToastContainer />
            <div className=''>
                <h2 className='text-center text-warning py-3'>Update Roadmap</h2>
                <form onSubmit={handleUpdate} className=' p-4 container py-3'>
                    <div className='my-3 d-flex p-2'>
                        <label className='pe-3'>Title:</label>
                        <input className='w-100 border-0 rounded-8    ps-2' type="text" value={roadmap.title} readOnly />
                    </div>
                    <div>
                        <label className='  pe-3'>Thumbnail:</label>
                       <WidgetCloudinary
                        cloudName="ducw7orvn"
                        uploadPreset="codesaarthi"
                        onSuccess={handleSuccess}
                        onFailure={handleFailure}
                       />
                        {imagePreview && (
                            <div className="my-3">
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
                        <label className='  pe-3'>Description:</label>
                        <textarea className='w-100  border-0 rounded-8     ps-2' value={roadmap.description} onChange={(e) => setRoadmap({ ...roadmap, description: e.target.value })} />
                    </div>
                    {roadmap.topics.map((topic, index) => (
                        <div key={index} className='my-3 border border-warning rounded-6 p-3'>
                            <label className='  pe-3'>Headline:</label>
                            <input
                                type="text"
                                name="headline"
                                value={topic.headline}
                                className='w-75  border-0 rounded-8     ps-2 my-2'
                                onChange={(e) => handleTopicChange(index, e)}
                            />
                            {topic.points.map((point, pIndex) => (
                                <div key={pIndex} className='my-3 pe-3'>
                                    <label className='  pe-3'>Point:</label>
                                    <input
                                        type="text"
                                        value={point}
                                        className='w-75  border-0 rounded-8     ps-2 my-2'
                                        onChange={(e) => handlePointChange(index, pIndex, e)}
                                    />
                                </div>
                            ))}
                            <button type="button" className='btn border border-warning   bg-warning text-capitalize shadow-6' onClick={() => addPoint(index)}>Add Point</button>
                        </div>
                    ))}
                    <button type="button" className='btn border border-warning   bg-warning text-capitalize shadow-6' onClick={addTopic}>Add Topic</button>
                    <button type="submit" className='btn border border-success   bg-success text-capitalize shadow-6 ms-3'> {loading ? "Updating..." : "Update Roadmap"} </button>
                </form>
            </div>
        </>
    );
};

export default UpdateRoadmap;
