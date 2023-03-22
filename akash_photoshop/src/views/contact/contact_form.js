import React, { useState } from 'react';
import './form.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [event, setEvent] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', name, email, event, location, description);
  }

  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-heading">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="event">Event:</label>
            <input type="text" id="event" value={event} onChange={(e) => setEvent(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location:</label>
            <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>
          <button type="submit" className="form-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
