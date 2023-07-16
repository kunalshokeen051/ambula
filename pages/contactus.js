import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.send(local?.env?.SERVICE_KEY, local?.env?.TEMPLATE_KEY,{
      from_name: name,
      to_name: "kunal shokeen",
      from_email: email,
      message: message,
      reply_to: email,
      })
      .then(() => {
        setIsSending(false);
        setIsSent(true);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        setIsSending(false);
        setError(error);
      });
  };

  return (
    <div className="w-full min-h-[calc(100vh-80px)] flex justify-center items-center">
 <div className="max-w-4xl w-[500px] ">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      {isSent ? (
        <p className="bg-green-100 text-5xl text-green-800 rounded p-4 mb-4">
          Thank you! Your message has been sent.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-bold mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded py-2 px-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded py-2 px-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-bold mb-1">
              Message
            </label>
            <textarea
              id="message"
              className="w-full border border-gray-300 rounded py-2 px-3"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          {error && (
            <p className="bg-red-100 text-red-800 rounded p-4 mb-4">Error: {error.message}</p>
          )}
          <button
            type="submit"
            className="button"
            disabled={isSending}
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
    </div> 
  );
};

export default ContactForm;
