import React, { useState } from "react";
import config from "../../helper/config";
import axios from 'axios'; 
import toast, { Toaster } from 'react-hot-toast';
const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false); 
    const saveMessage = async (e) => {
        e.preventDefault();
        if (!name) {
            toast.error('Please fill Your name');
            return;
        } else if (!email) {
            toast.error('Please fill email');
            return;
        } else if (!message) {
            toast.error('Please address your issues');
            return;
        } else {

            const data = {
                name: name,
                email: email,
                message: message,
            };
            try {
                setIsLoading(true);
                const response = await axios.post(`${config.BASE_URL}/api/contactemail`, data);
                if (response.status === 200) {
                    toast.success("Successfully submitted Your message..");
                } else { 
                     toast.error("Failed to submit your message ..");
                }
            } catch (error) {
                setIsLoading(false);
                console.error('Error:', error);
                toast.error("Failed to submit your message ..");
            } finally {
                setName(" ");
                setEmail(" ");
                setMessage(" ");
                setIsLoading(false); 
            }
        }
    };
  return ( 
    <>
    <Toaster/>
 
    <div className="flex items-center justify-center   bg-slate-100 dark:bg-gray-950">
      <div className="flex flex-col md:flex-row w-full max-w-6xl">
        <div className="flex-1 p-8">
          <form className="bg-slate-200 dark:bg-gray-700 shadow-lg rounded-md p-8" onSubmit={saveMessage}>
            <div className="mb-4 ">
              <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                required
                placeholder="Your name"
                value={name} 
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Your email"
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your message"
                rows={6}
                value={message} 
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div>
              {isLoading ?  
              <button  
                className="bg-blue-500 text-black w-full rounded-lg p-3"
                disabled
              >
              Submitting <span className="loading loading-dots loading-md"></span>
              </button>
              :
              <button  
              className="bg-blue-500 hover:bg-blue-700 btn btn-block text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
           Submit
            </button>
            }
             
            </div>
          </form>
        </div>
        <div className="flex-1 "> 
              <div className="diff aspect-[16/9] relative w-full h-full">
                <div className="diff-item-1">
                  <img
                    alt="contact"
                    src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720990507/login4_inj0uy.png"
                  />
                </div>
                <div className="diff-item-2">
                  <img
                    alt="daisy"
                    src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720990074/login1_h8i72j.png"
                  />
                </div>
                <div className="diff-resizer"></div>
              </div> 
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
