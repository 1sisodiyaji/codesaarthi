import React, { useState } from 'react';
import axios from 'axios';
import config from '../../helper/config';
import Cookies from 'js-cookie';
import toast, { Toaster } from 'react-hot-toast';
function CreateQuestion() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
const [loading , setLoading] = useState(false);
  const handleSubmit = async () => {
    try {
        setLoading(true);
        if (!title ||!body || tags.length === 0) {
            toast.error("Title, Body and Tags are required");
            setLoading(false);
            return;
        }
      const token = Cookies.get('Codesaarthi-token');
      const response = await axios.post(
        `${config.BASE_URL}/article/questions`,
        { title, body, tags },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if(response.status === 201){ 
        setTitle('');
        setBody('');
        setTags([]);
        setTagInput('');
        setLoading(false);
        toast.success("Question Posted Successfully");
      }
     
    } catch (error) {
        toast.error(error.message);
        setLoading(false);
      console.error('Error creating question:', error);
    }
  };

  const handleTagChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleTagKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      const newTag = tagInput.trim();
      if (newTag && !tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      setTagInput('');
    }
  };

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <>
    <h1 className="md:text-7xl text-3xl my-6 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
    Ask Freely, Empower Yourself!
  </h1>
    <div className="flex md:flex-row flex-col-reverse justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <Toaster/> 
       
      <div className="w-full max-w-2xl p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h5 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
          Ask Your Question
        </h5>
        <input
          type="text"
          className="w-full mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="Describe Your Question .."
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <div key={index} className="flex items-center bg-blue-100 dark:bg-blue-700 text-blue-700 dark:text-blue-100 px-3 py-1 rounded-full">
                <span>{tag}</span>
                <button
                  type="button"
                  className="ml-2 text-red-500 dark:text-red-400"
                  onClick={() => removeTag(index)}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
          <input
            type="text"
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Enter your tags and press enter..."
            value={tagInput}
            onChange={handleTagChange}
            onKeyDown={handleTagKeyDown}
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={handleSubmit}
        >
         {loading ? 'sending ...': 'Submit'} 
        </button>
      </div>
      <div>
      <img  src='https://res.cloudinary.com/ducw7orvn/image/upload/v1723153709/image_22-removebg-preview_qx3l4u.png' alt='ask question' loading='lazy'/>
    </div>
    </div>
    </>
  );
}

export default CreateQuestion;
