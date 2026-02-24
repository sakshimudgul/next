"use client";

// components/ContactFormEmailJS.jsx
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactFormEmailJS() {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your Service ID
        'YOUR_TEMPLATE_ID', // Replace with your Template ID
        form.current,
        'YOUR_PUBLIC_KEY' // Replace with your Public Key
      );

      if (result.text === 'OK') {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
      
      {status === 'success' && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
          Thank you! Your message has been sent.
        </div>
      )}
      
      {status === 'error' && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          Oops! Something went wrong. Please try again.
        </div>
      )}

      <form ref={form} onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="user_name" // EmailJS uses specific field names
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className={`w-full py-2 px-4 rounded text-white ${
            status === 'sending' 
              ? 'bg-blue-300 cursor-not-allowed' 
              : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}