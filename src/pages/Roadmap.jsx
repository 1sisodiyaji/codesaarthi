import React, { useState } from 'react';

const Roadmap= () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    quantity: '',
    numberOfDays: '',
    totalTime: '',
    brandName: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, location, quantity, numberOfDays, totalTime, brandName } = formData;
    const message = `Booking Details:
    - Name: ${name}
    - Email: ${email}
    - Phone: ${phone}
    - Location: ${location}
    - Quantity: ${quantity}
    - Number of Days: ${numberOfDays}
    - Total Time: ${totalTime}
    - Brand Name: ${brandName}`;

    const whatsappNumber = '6371790702'; // Replace with your WhatsApp number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappURL, '_self');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Phone:</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
      </div>
      <div>
        <label>Location:</label>
        <input type="text" name="location" value={formData.location} onChange={handleChange} required />
      </div>
      <div>
        <label>Quantity:</label>
        <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} required />
      </div>
      <div>
        <label>Number of Days:</label>
        <input type="number" name="numberOfDays" value={formData.numberOfDays} onChange={handleChange} required />
      </div>
      <div>
        <label>Total Time:</label>
        <input type="text" name="totalTime" value={formData.totalTime} onChange={handleChange} required />
      </div>
      <div>
        <label>Brand Name:</label>
        <input type="text" name="brandName" value={formData.brandName} onChange={handleChange} required />
      </div>
      <button type="submit">Book</button>
    </form>
  );
};

export default Roadmap;