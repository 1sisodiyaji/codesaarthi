import React, { useState } from 'react';
import axios from 'axios';
import Config from '../../config/config';

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const userEmail = localStorage.getItem('user_email');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let uploadedImageUrl = imageUrl;
      if (image) {
        const formData = new FormData();
        formData.append('image', image);
        const uploadResponse = await axios.post(`${Config.BASE_URL}/upload`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        uploadedImageUrl = uploadResponse.data.url;
      }

      const response = await axios.post(`${Config.BASE_URL}/userBlogs/blogs`, {
        title,
        image: uploadedImageUrl,
        description,
        email: userEmail,
      });
      console.log('Blog posted:', response.data);
      // Reset form
      setTitle('');
      setDescription('');
      setImage(null);
      setImageUrl('');
      setPreviewUrl('');
    } catch (error) {
      console.error('Error posting blog:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <div className="container-fluid">
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
              className="w-100 bg-dark rounded-8 border-0 p-2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              required
            />
            <div className="row my-2">
              <div className="col-6">
                <input
                  type="file"
                  id="file-input"
                  accept='.jpg , .png , .webp, .jpeg'
                  style={{ display: 'none' }}
                  onChange={handleImageChange}
                />
                <label htmlFor="file-input" style={{ cursor: 'pointer' }}>
                <i class="fi fi-rr-graphic-style text-warning mx-2"></i>
                </label>
                {previewUrl && (
                    <div className='border p-2'>
                  <img src={previewUrl} alt="Selected" className="img-fluid mt-2" />
                  </div>
                )}
              </div>
              <div className="col-6 text-end">
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
