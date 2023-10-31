import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSendEmail = () => {
    const emailData = {
      subject: subject,
      text: `Complaint: ${message}\nPhone Number: ${phoneNumber}`,
    };

    // Send the email data to the Spring Boot API
    fetch('http://localhost:8080/api/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    })
    .then((response) => {
      if (response.ok) {
        alert('Email sent successfully');
        setSubject('');
        setMessage('');
        setPhoneNumber('');
      } else {
        alert('Failed to send email');
      }
    })
    .catch((error) => {
      console.error(error);
      alert('Error occurred while sending email');
    });
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
