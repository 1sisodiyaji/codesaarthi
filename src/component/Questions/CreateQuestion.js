import React, { useState} from 'react';
import axios from 'axios';
import config from '../../config/config';  
import Cookies from 'js-cookie';  

function CreateQuestion() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState(''); 

  const handleSubmit = async () => {
    try { 
        const token = Cookies.get('token');
        const response = await axios.post(
          `${config.BASE_URL}/article/questions`,
          { title, body, tags },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      console.log('Question created:', response.data);
      setTitle('');
      setBody('');
      setTags([]);
      setTagInput('');
    } catch (error) {
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
      <div className="container-fluid design ">
        <div className="card p-3">
          <h5>Ask Your Question</h5>
          <input
            type="text"
            className='form-control my-1'
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className='w-100 my-1'
            placeholder="Describe Your Question .."
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <div className="tags-input-container">
            {tags.map((tag, index) => (
              <div className="tag-item my-3" key={index}>
                <span className="text bg-secondary px-4 py-2 ">{tag}</span>
                <span className="close bg-danger p-2" style={{cursor: 'pointer'}} onClick={() => removeTag(index)}>X</span>
              </div>
            ))}
            <input
              type="text"
              className="form-control my-1"
              placeholder="Enter Your tags and press enter .."
              value={tagInput}
              onChange={handleTagChange}
              onKeyDown={handleTagKeyDown}
            />
          </div>
          <button className='btn my-3 text-capitalize fw-bold' onClick={handleSubmit}>Submit</button>
        </div> 
      </div> 
    </>
  );
}

export default CreateQuestion;
