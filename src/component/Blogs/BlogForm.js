import React, { useState } from 'react';
import axios from 'axios';
import Config from '../../config/config';

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const userEmail = localStorage.getItem('user_email');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log("Title:", title);
      console.log("Image:", image);
      console.log("Description:", description);
      console.log("Email:", userEmail);
      const response = await axios.post('http://localhost:8081/article/userBlogs/blogs',{ title  ,description ,image, email : userEmail });
      console.log('Blog posted:', response.data);
      // Reset form
      setTitle('');
      setDescription('');
      setImage('');
    } catch (error) {
      console.error('Error posting blog:', error);
    } finally {
      setLoading(false);
    }
  };



  return (
    <>
      <div className="container-fluid  g-0">
        <div className="card bg-black p-3">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="w-100 bg-dark border-0 rounded-8 ps-3 text-light mb-3"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              required
            />
            <textarea
              rows={4}
              className="w-100 bg-dark rounded-8 border-0 p-2 text-light"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              required
            />
            <div className="row my-2">
              <div className="col-8 d-flex">
                
              <i class="fi fi-rr-graphic-style text-warning mx-2"  style={{ cursor: 'pointer' }}></i>
                <input
                  type="url"
                  className='bg-dark border-0 rounded-8 w-100 ps-2'
                  value={image}
                  placeholder='please enter your image url'
                  onChange={(e) => setImage(e.target.value)}
                />
          
              </div>
              <div className="col-4 text-end">
                <button
                  type="submit"
                  className="btn btn-dark text-warning text-capitalize"
                  disabled={loading}
                >
                  {loading ? 'Posting...' : 'Post Blog'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BlogForm;
