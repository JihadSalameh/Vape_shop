import React, { useState } from 'react';
import './ContactUs.css'; // Import the CSS file

const ContactUs = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSendEmail = () => {
    // You can implement the logic to send the email here
    console.log('Subject:', subject);
    console.log('Message:', message);
    console.log('Phone Number:', phoneNumber);
  };

  return (
    <div className="contact-us-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <button onClick={handleSendEmail}>Send</button>
      </div>
    </div>
  );
};

export default ContactUs;
