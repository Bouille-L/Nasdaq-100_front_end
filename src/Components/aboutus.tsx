// aboutus.tsx

import React from 'react';
import { Link } from 'react-router-dom';


const AboutUs = () => {
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
        <div className="about-us-box">
          <p>About Us</p>
        </div>
        <div className="aboutus_content">
          <div className="content-wrapper">
            <p>
              Welcome to the Nasdaq-100 ETF Explorer, your go-to platform for
              navigating the dynamic landscape of Nasdaq-100 Exchange Traded
              Funds (ETFs). At the intersection of innovation and investment,
              our user-friendly interface empowers both novice and seasoned
              investors to explore, analyze, and make informed decisions within
              the Nasdaq-100 ecosystem.
            </p>

            <h2>Our Mission</h2>
            <p>
              We are passionate about demystifying the complexities of ETFs
              linked to the Nasdaq-100 index. Our mission is to provide a
              comprehensive and intuitive tool that enables users to
              effortlessly discover, compare, and track the performance of
              Nasdaq-100 ETFs. Whether you are a curious investor looking to
              understand the market or a seasoned trader seeking the latest
              insights, Nasdaq-100 ETF Explorer is designed to be your trusted
              companion.
            </p>

            <h2>Key Features</h2>

            <ul>
              <li>
                Explore: Dive into a wealth of information on Nasdaq-100 ETFs,
                including performance metrics, historical data, and key
                attributes that define each fund.
              </li>
              <li>
                Compare: Effortlessly compare multiple ETFs side by side to
                make data-driven decisions based on your investment goals and
                risk tolerance.
              </li>
              <li>
                Educate: Stay informed with educational resources, articles,
                and market insights that help you navigate the ever-evolving
                landscape of the Nasdaq-100.
              </li>
            </ul>

            <h2>Why Nasdaq-100 ETF Explorer?</h2>

            <ul>
              <li>
                User-Friendly: Our intuitive interface ensures a seamless and
                enjoyable user experience, making it easy for investors at all
                levels to navigate and leverage the power of data.
              </li>
              <li>
                Comprehensive Data: Access a robust database of Nasdaq-100
                ETFs, providing up-to-date and accurate information to support
                your investment research.
              </li>
              <li>
                Innovation Hub: Stay ahead of the curve with real-time updates
                on Nasdaq-100 components, market trends, and emerging
                technologies that drive the companies within the index.
              </li>
            </ul>

            <h2>Get Started</h2>

            <p>
              Embark on your journey with Nasdaq-100 ETF Explorer today.
              Whether you're a seasoned investor or just starting, our platform
              equips you with the tools and insights needed to navigate the
              Nasdaq-100 landscape confidently.
            </p>

            <h1>Happy exploring and successful investing!</h1>
          </div>
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

export default AboutUs;
