import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('your_message')
    };

    try {
      const response = await fetch('https://nasdaq-100-webapp-backend-bcf51f152084.herokuapp.com/api/store_message/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error('Server-side error occurred');
      }
    } catch (error) {
      console.error('Network or other runtime error occurred', error);
    }
  };

  return (
    <>
      <header>
        <div className="logo">Nasdaq-100 ETF Explorer</div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/etf">ETF Information</Link>
            </li>
            <li>
              <Link to="/resources">Educational Resources</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="contact-form">
          <h1>Contact Us</h1>
          <p>
            Got a question or feedback? We'd love to hear from you. Send us a
            message and we'll respond as soon as possible.
          </p>
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name:</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email:</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="your_message">Your Message/Feedback:</label>
                <textarea id="your_message" name="your_message" rows={15} required></textarea>
              </div>

              <div className="form-group">
                <button type="submit">Submit</button>
              </div>
            </form>
          ) : (
            <div className="confirmation-message">
              <p>Thank you for your message! We will respond to you soon.</p>
            </div>
          )}
        </div>
      </main>

      <footer>
        <div className="footer-content">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/etf">ETF Information</Link>
            </li>
            <li>
              <Link to="/resources">Educational Resources</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <p>
          RISK DISCLAIMER: The information provided on this website is solely
          for informational purposes and should not be construed as a
          recommendation for any particular investment. Students and
          individuals bear full responsibility for any live trades conducted in
          their personal accounts. We explicitly disclaim any responsibility
          for individual losses resulting from poor trading decisions,
          inadequately executed trades, or any other actions that may result in
          a loss of funds.
        </p>
        <p>&copy; 2023 Nasdaq-100 ETF Explorer. All rights reserved.</p>
      </footer>
    </>
  );
};

export default ContactUs;
