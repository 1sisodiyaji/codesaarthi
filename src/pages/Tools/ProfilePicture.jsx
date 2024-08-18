import React, { useState } from 'react';
import axios from 'axios'; 
import {toast , Toaster} from 'react-hot-toast';
import {Helmet} from 'react-helmet';
// Convert HEX to RGB
const hexToRgb = (hex) => {
  hex = hex.replace(/^#/, '');
  if (hex.length === 3) {
    hex = hex.split('').map(char => char + char).join('');
  }
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgb(${r}, ${g}, ${b})`;
};

// Parse color, with fallback
const parseColor = (color) => {
  if (/^#[0-9A-Fa-f]{6}$/.test(color)) {
    return hexToRgb(color); // Convert HEX to RGB
  }
  if (/^rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)$/.test(color)) {
    return color;
  }
  return 'rgb(34, 211, 238)'; // Fallback color
};

const ProfilePicture = () => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('#22D3EE');
  const [customColor, setCustomColor] = useState('');
  const [responseHtml, setResponseHtml] = useState('');
  const[loading,setLoading] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();

    const defaultName = name || 'Codesaarthi team';
    const selectedColor = customColor ? parseColor(customColor) : parseColor(color);

    try { 
     setLoading(true);
      const response = await axios.get(`http://localhost:8081/api/profile_picture/getLetterPicture/${encodeURIComponent(defaultName)}/${encodeURIComponent(selectedColor)}`);
      setResponseHtml(response.data.imageUrl); 
      setLoading(false);
      toast.success('Profile picture generated successfully!');
    } catch (error) {
        setLoading(false);  
        toast.success('Error Generating Images!'); 
    }
  };

  const handleColorChange = (e) => {
    const hexColor = e.target.value;
    setCustomColor(hexColor);
    const rgbColor = hexToRgb(hexColor);
    setColor(rgbColor);
  };

  return (
    <>
    <Toaster/>
<Helmet>
        <title>Profile Picture - Codesaarthi</title>
        <meta name="description" content="Welcome to My Awesome Website. Discover our range of products, services, and more. Stay updated with our latest news and offerings." />
        <meta name="keywords" content="awesome, website, products, services, news" />
        <meta name="author" content="Your Name" />
        <meta property="og:title" content="My Awesome Website - Home" />
        <meta property="og:description" content="Welcome to My Awesome Website. Discover our range of products, services, and more. Stay updated with our latest news and offerings." />
        <meta property="og:image" content="https://example.com/your-image.jpg" />
        <meta property="og:url" content="https://example.com/home" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="My Awesome Website - Home" />
        <meta name="twitter:description" content="Welcome to My Awesome Website. Discover our range of products, services, and more. Stay updated with our latest news and offerings." />
        <meta name="twitter:image" content="https://example.com/your-image.jpg" />
        <link rel="canonical" href="https://example.com/home" />
</Helmet>
    <div className="min-h-screen bg-slate-100 dark:bg-gray-950 flex items-center justify-center flex-col">
      <div className="w-[600px] mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <div className="flex md:flex-row flex-col">
          <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url(https://res.cloudinary.com/ducw7orvn/image/upload/v1721941402/logo_dnkgj9.jpg)' }}></div>
          <div className="w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-6 text-black dark:text-cyan-400">Generate Your Profile Picture</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 dark:text-cyan-600 font-semibold mb-2">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="color" className="block text-gray-700 dark:text-cyan-600 font-semibold mb-2">Select a Color:</label>
                <select
                  id="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="#22D3EE">Teal</option>
                  <option value="#FF5733">Orange</option>
                  <option value="#4BC0C0">Light Blue</option>
                  <option value="#FF6384">Pink</option>
                  <option value="#36A2EB">Blue</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="customColor" className="block text-gray-700 dark:text-cyan-600 font-semibold mb-2">Or Pick a Custom Color:</label>
                <input
                  type="color"
                  id="customColor"
                  value={customColor}
                  onChange={handleColorChange}
                  className="w-full h-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600"
                >
                 {loading? 'Generating ..' : 'Generate'} 
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      
      {responseHtml && (
        <a href={responseHtml} download  className="mt-4 bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600">
          Download Image
        </a>
      )}
    </div>
    </>
  );
};

export default ProfilePicture;
