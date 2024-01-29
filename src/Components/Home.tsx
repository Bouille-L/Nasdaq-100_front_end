import React from 'react';
import { Link } from 'react-router-dom';
import News from './news';
import ChartTQQQ from './ChartTQQQ';
import ChartQQQ from './ChartQQQ';
import ChartSQQQ from './ChartSQQQ';

const Home = () => {
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
        <ChartQQQ />
        <ChartTQQQ />
        <ChartSQQQ />
        <News />
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

export default Home;
