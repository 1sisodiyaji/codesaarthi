import React, { useState } from 'react';
import axios from 'axios';

const JobApplicationForm = () => {
  const [applicantName, setApplicantName] = useState('');
  const [resumeFile, setResumeFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!applicantName || !resumeFile) {
      setMessage('Please fill out all fields.');
      return;
    }

    const reader = new FileReader();
    reader.onload = async () => {
      const resume = reader.result.split(',')[1]; // Get base64 content of the resume

      try {
        const response = await axios.post('https://server-fl9q.onrender.com/api/jobApplyMail', {
          applicantName,
          resume,
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        setMessage(response.data.message);
      } catch (error) {
        console.error('Error:', error);
        setMessage('Error submitting the application.');
      }
    };

    reader.readAsDataURL(resumeFile);
  };

  return (
    <div className="container design py-5 vh-100 bg-dark">
      <h1 className='text-warning'>Job Application Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group text-light w-100">
          <label htmlFor="applicantName">Full Name:</label>
          <input
            type="text"
            id="applicantName"
            name="applicantName"
            value={applicantName}
            onChange={(e) => setApplicantName(e.target.value)}
            required
          />
        </div>
        <div className="form-group d-flex text-light my-3">
          <label htmlFor="resume">Upload Resume : </label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept="application/pdf"
            onChange={(e) => setResumeFile(e.target.files[0])}
            required
          />
        </div>
        <button type="submit" className=' btn rounded-8 bg-dark border my-3 border-warning text-warning'>Submit Application</button>
      </form>
      {message && <div id="message">{message}</div>}
    </div>
  );
};

export default JobApplicationForm;
