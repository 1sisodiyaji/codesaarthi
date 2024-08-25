import React, { useState } from 'react';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import { Helmet } from 'react-helmet'; 
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
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [gender, setGender] = useState('male'); 
  const [responseHtml2, setResponseHtml2] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();

    const defaultName = name || 'Codesaarthi team';
    const selectedColor = customColor ? parseColor(customColor) : parseColor(color);

    try {
      setLoading(true);
      const response = await axios.get(`https://tools-roan.vercel.app/api/profile_picture/getLetterPicture/${encodeURIComponent(defaultName)}/${encodeURIComponent(selectedColor)}`);
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
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleGenderSubmit = async () => {
    setLoading2(true);
    try { 
      const response = await axios.get(`https://tools-roan.vercel.app/api/profile_picture/basedOngender/${gender}`);
      setResponseHtml2(response.data);
      toast.success('Profile picture generated successfully based on gender!');
    } catch (error) {
      toast.error('Error generating profile picture!');
    } finally {
      setLoading2(false);
    }
  };

  return (
    <>
      <Toaster />
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
      <div className="min-h-screen bg-slate-100 dark:bg-gray-950 flex items-center justify-center flex-col py-20">
        <section>
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Design Your Custom Profile Picture!</h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Enter your name, pick a color, and get a unique profile image featuring your initials. Perfect for LinkedIn, social media, and more. Download instantly and stand out online!
              </p>

            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img src="https://res.cloudinary.com/ducw7orvn/image/upload/v1724610830/Frame_427318907-removebg-preview_dlqtoq.png" alt="mockup" />
            </div>
          </div>
        </section>

        <div className="w-full max-w-screen-lg mx-auto">
          <div role="tablist" className="tabs tabs-bordered">
            <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Code" />
            <div role="tabpanel" className="tab-content md:pt-10 pt-2 w-[350px] md:w-full">
              <div className="mockup-code">
                <div className="bg-base-200 py-4">
                  <pre data-prefix="1"><code>const name = name || 'Golu Singh'; // Get Name From User </code></pre>
                  <pre data-prefix="2"><code>const color = customColor ? customColor : 'rgb(0,0,0)'; // Get Color code in rgb(135, 206, 235)</code></pre>
                  <pre data-prefix="3"><code> try{'{'} </code></pre>
                  <pre data-prefix="4"><code>   const response = await axios.get</code></pre>
                  <pre data-prefix="4" className="bg-warning text-warning-content"><code>https://tools-roan.vercel.app/api/profile_picture/getLetterPicture/${'encodeURIComponent(name)'}${'encodeURIComponent(color)'};</code></pre>
                  <pre data-prefix="6"><code>   const result = response.data.imageUrl; </code></pre>
                  <pre data-prefix="7"><code>   {'}'} catch (error) {'{'}</code></pre>
                  <pre data-prefix="8"><code>   console.log("Failed to Get Your Profile Picture");</code></pre>
                  <pre data-prefix="9"><code> {`}`}</code></pre>
                  <pre data-prefix="10"><code> Thanks For Using This . Hope you will like it.</code></pre>
                </div>
              </div>
            </div>

            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="Preview"
              defaultChecked />
            <div role="tabpanel" className="tab-content p-10">
              <section id='generate' className='items-center justify-center flex flex-col'>
                <div className=" w-full   bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                  <div className=" flex md:flex-row flex-col">
                    <div className="md:w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url(https://res.cloudinary.com/ducw7orvn/image/upload/v1721941402/logo_dnkgj9.jpg)' }}></div>
                    <div className="md:w-1/2 p-4">
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
                            {loading ? 'Generating ..' : 'Generate'}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                {responseHtml && (
                  <>
                    <a href={responseHtml} download className="my-4 bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600">
                      Download Image
                    </a>
                    <img src={responseHtml} alt={name} loading='lazy' />
                  </>
                )}

              </section>
            </div>

          </div>
        </div>
        <div className="my-8 text-center">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Create Your Personalized Profile Picture
        </h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Select your gender, and instantly generate a unique profile image that represents you. Perfect for all your online profiles, with a tailored look that stands out!
        </p>
        </div>
        <div className="w-full max-w-screen-lg mx-auto">
          <div role="tablist" className="tabs tabs-bordered">
            <input type="radio" name="my_tabs_3" role="tab" className="tab" aria-label="Code" />
            <div role="tabpanel" className="tab-content md:pt-10 pt-2 w-[350px] md:w-full">
              <div className="mockup-code">
                <div className="bg-base-200 py-4">
                  <pre data-prefix="1"><code>const gender = gender || 'Male'; // Get Gender From User </code></pre>
                  <pre data-prefix="3"><code> try{'{'} </code></pre>
                  <pre data-prefix="4"><code>   const response = await axios.get</code></pre>
                  <pre data-prefix="4" className="bg-warning text-warning-content"><code>https://tools-roan.vercel.app/api/profile_picture/basedOngender/${'gender'};</code></pre>
                  <pre data-prefix="6"><code>   const result = response.data; </code></pre>
                  <pre data-prefix="7"><code>   {'}'} catch (error) {'{'}</code></pre>
                  <pre data-prefix="8"><code>   console.log("Failed to Get Your Profile Picture");</code></pre>
                  <pre data-prefix="9"><code> {`}`}</code></pre>
                  <pre data-prefix="10"><code> Thanks For Using This . Hope you will like it.</code></pre>
                </div>
              </div>
            </div>

            <input
              type="radio"
              name="my_tabs_3"
              role="tab"
              className="tab"
              aria-label="Preview"
              defaultChecked />
            <div role="tabpanel" className="tab-content p-10">
              <section id='generate' className='items-center justify-center flex flex-col'>
                <div className=" w-full   bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                  <div className=" flex md:flex-row flex-col">
                    <div className="md:w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url(https://res.cloudinary.com/ducw7orvn/image/upload/v1721941402/logo_dnkgj9.jpg)' }}></div>
                    <div className="md:w-1/2 p-4">
                      <h2 className="text-2xl font-bold mb-6 text-black dark:text-cyan-400">Generate Your Profile Picture</h2>

                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <span className="label-text">Male</span>
                          <input
                            type="radio"
                            name="gender"
                            value="male"
                            className="radio checked:bg-orange-500"
                            checked={gender === 'male'}
                            onChange={handleGenderChange}
                          />
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <span className="label-text">Female</span>
                          <input
                            type="radio"
                            name="gender"
                            value="female"
                            className="radio checked:bg-green-500"
                            checked={gender === 'female'}
                            onChange={handleGenderChange}
                          />
                        </label>
                      </div>
                      <div className="text-right mt-4">
                        <button
                          onClick={handleGenderSubmit}
                          className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600"
                          disabled={loading2}
                        >
                          {loading2 ? 'Generating ..' : 'Generate Based on Gender'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {responseHtml2 && (
                  <>
                    <a href={responseHtml2} download="Profile_Picture.jpg" className="my-4 bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600">
                      Download Image
                    </a>
                    <img src={responseHtml2} alt={name} loading="lazy" className='h-32'/>
                  </>
                )}

              </section>
            </div>

          </div>
        </div>

      </div>
    </>
  );
};

export default ProfilePicture;
