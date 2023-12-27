// etfinformation.tsx
import React from 'react';
import { Link } from 'react-router-dom';


const ETFInformation = () => {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="etf information.css" />
      </head>

      <body>
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
          <div className="introduction_to_ETFs">
            <h2>1. Introduction to ETFs</h2>
            <p>Welcome to the world of Exchange-Traded Funds (ETFs), a dynamic and increasingly popular investment vehicle that has revolutionized the way investors approach the financial markets. In this section, we'll provide you with a concise yet comprehensive overview of ETFs, covering their definition, functionality, advantages and disadvantages, and key features that set them apart from other investment options.</p>

            <h3>Definition of ETFs:</h3>
            <p>Exchange-Traded Funds, or ETFs, are investment funds that are traded on stock exchanges, similar to individual stocks. These funds are designed to track the performance of a specific index, commodity, bond, or a basket of assets, providing investors with a convenient way to gain exposure to a diversified portfolio of assets in a single trade.</p>

            <h3>How ETFs Work:</h3>
            <p>ETFs operate through a creation and redemption process. Authorized Participants (typically large financial institutions) create new ETF shares by assembling a portfolio of underlying assets that mirrors the index being tracked. These newly created shares can then be traded on the open market. Conversely, when an investor wishes to redeem their ETF shares, the fund will deliver the underlying assets in exchange for the ETF shares. This creation and redemption mechanism helps keep the market price of ETFs closely aligned with the net asset value (NAV) of the underlying assets, promoting price efficiency.</p>

            <p>Sources: Investment Company Institute.</p>
            <img src="How ETF comes to market.PNG" alt="How etfs comes to market" />

            <h3>Advantages and Disadvantages:</h3>
            <h4>Advantages</h4>
            <ul>
              <li>Diversification: ETFs offer instant diversification by tracking a broad index or sector, reducing individual stock risk.</li>
              <li>Liquidity: ETFs can be bought and sold throughout the trading day at market prices, providing liquidity and flexibility to investors.</li>
              <li>Cost-Efficiency: Typically, ETFs have lower expense ratios compared to traditional mutual funds, making them cost-effective investment options.</li>
            </ul>

            <h4>Disadvantages:</h4>
            <ul>
              <li>Trading Costs: While ETFs often have lower expense ratios, investors may incur trading commissions when buying and selling shares.</li>
              <li>Tracking Error: Some ETFs may deviate slightly from their underlying index due to tracking errors.</li>
              <li>Complexity: Certain ETFs, especially those with complex strategies, may require a deeper understanding by investors.</li>
            </ul>
          </div>

          <div className="Nasdaq-100 Index">
            <h2>2. Nasdaq-100 Index</h2>
            <p>In this comprehensive exploration, we delve into the NASDAQ-100, a benchmark index that stands as a testament to the technological prowess and innovation driving the global financial markets. This elucidation aims to provide a thorough understanding of the NASDAQ-100, encompassing its index composition, notable constituents, performance metrics, sector allocations, top holdings, and the ETFs instrumental in tracking its trajectory.</p>

            <h3>Explanation of the NASDAQ-100 Index:</h3>
            <p>The NASDAQ-100, as elucidated by financial experts such as Robert Shiller and Eugene Fama, is a market-capitalization-weighted index that tracks the performance of the largest non-financial companies listed on the NASDAQ stock exchange. Distinguished by its technology-heavy composition, the index encapsulates leading companies across various sectors, serving as a barometer for innovation and economic growth.</p>

            <h3>List of Notable Companies Included:</h3>
            <p>The NASDAQ-100 boasts an impressive roster of companies that have redefined industries and shaped the digital landscape. Pioneers like Apple, Amazon, and Microsoft feature prominently, reflecting the index's focus on cutting-edge technology, e-commerce, and software development. Notable contributions from companies like Tesla and Nvidia underscore the index's commitment to innovation in electric vehicles and semiconductor technology.</p>

            <p>Empirical studies by researchers such as Richard Roll and Stephen Ross have dissected the sector allocations within the NASDAQ-100, revealing a pronounced emphasis on Information Technology. Top sectors include Consumer Discretionary and Healthcare, demonstrating a diversified yet technology-centric portfolio. Leading the index are companies like Apple, Microsoft, and Alphabet, showcasing the dominance of major tech players in shaping its performance.</p>

            <a href="Nasdaq-100 Companies List.xlsx" target="_blank">Click Here to Download the Nasdaq-100 Companies list</a>

            <p>Source: Nasdaq.com.</p>
            <img src="Nasdaq-100 holding.png" alt="Nasdaq-100 Sector Weight" />

            <h3>Overview of Performance and Significance: </h3>
            <p>Academic discourse by financial analysts like Jeremy Siegel and Kenneth French underscores the NASDAQ-100's historical significance. Notable for its outperformance during technology-driven bull markets, the index has become a key benchmark for investors seeking exposure to growth-oriented, high-tech companies. Its performance often mirrors broader economic trends, making it a crucial indicator for market sentiment and economic health.</p>

            <iframe width="950" height="360" src="https://www.youtube.com/embed/WGh_FpfoN3I" frameBorder="0" allowFullScreen></iframe>


            <h3>ETFs Tracking the NASDAQ-100:</h3>
            <p>In the realm of Exchange-Traded Funds, various investment options are available for those seeking to align their portfolios with the NASDAQ-100. Noteworthy ETFs include the Invesco QQQ Trust (QQQ), which replicates the index's performance and offers investors a liquid and efficient means of gaining exposure to its constituents. Other ETFs, such as the ProShares UltraPro QQQ (TQQQ) and the ProShares UltraShort QQQ (SQQQ), cater to investors with varying risk appetites, providing leveraged or inverse exposure to the index.</p>

          </div>

          <div className="QQQ">
            <h2>3. QQQ - Invesco QQQ ETF Overview </h2>
            <h3>Investment Objective & Top Holding(include Sector of focus):</h3>
            <p>The primary goal of QQQ is to track the performance of the NASDAQ-100 Index, offering investors a convenient way to gain diversified exposure to leading technology and growth-oriented companies.</p>

            <p>QQQ includes major holdings in well-known technology and internet-related companies such as Apple Inc., Microsoft Corporation, Amazon.com Inc., and many others.</p>

            <p>As a technology-focused ETF, QQQ is heavily weighted towards the Information Technology sector. However, it also includes exposure to sectors like Consumer Discretionary and Health Care.</p>

            <p>Serouce : Invesco QQQ.</p>
            <img src="QQQ_Top holding_sector weight.JPG" alt="QQQ top holding and sector weight" />

            <h3>Performance History:</h3>
            <p>Over the long term, QQQ has demonstrated remarkable growth, reflecting the success of the technology and growth-oriented companies within the NASDAQ-100 Index. The fund's historical performance often attracts investors seeking exposure to innovative and high-growth sectors.</p>

            <p>QQQ's historical data showcases the dominance of the technology sector in driving returns. Technological innovations and advancements in areas such as semiconductors, software, and e-commerce have significantly influenced the fund's performance.</p>

            <p>Serouce : Invesco QQQ.</p>
            <img src="qqq performance.JPG" alt="QQQ Performance" />
          </div>

          <div className="TQQQ">
            <h2>4. TQQQ Overview </h2>
            <h3>Investment Objective:</h3>
            <p>The ProShares UltraPro QQQ (TQQQ) exchange-traded fund (ETF) aims to provide investors with triple the daily performance of the NASDAQ-100 Index, which we call leveraged ETF. This leveraged ETF is designed for traders and investors seeking amplified returns corresponding to the daily movements of the underlying index.</p>

            <h3>Performance History:</h3>
            <p>TQQQ's performance history is closely tied to the NASDAQ-100 Index, reflecting three times the daily returns, whether positive or negative. Investors should note that due to the compounding effect of daily returns, the fund's performance over periods longer than one day may deviate from triple the performance of the index.</p>

            <p>Serouce : ProShares.</p>
            <img src="tqqq performance.JPG" alt="TQQQ Performance" />

            <h3>Financial Metrics:</h3>
            <p>Expense ratios and other financial metrics are crucial considerations for investors. TQQQ, being a leveraged ETF, typically has a higher expense ratio compared to traditional ETFs. Investors should carefully review the fund's prospectus for detailed information on expense ratios, management fees, and any other associated costs. Additionally, it's essential to understand the impact of daily compounding on the fund's performance over extended periods.</p>
          </div>

          <div className="SQQQ">
            <h2>5. SQQQ Overview </h2>
            <h3>Introduction:</h3>
            <p>SQQQ, or ProShares UltraPro Short QQQ, is an inverse exchange-traded fund (ETF) designed to provide investors with a way to capitalize on the inverse movement of the Nasdaq-100 Index. Unlike traditional ETFs, SQQQ aims to deliver three times the inverse daily performance of the tech-heavy Nasdaq-100.</p>

            <h3>Purpose and Considerations :</h3>
            <p>Investors often turn to SQQQ as a tool for managing risk during market downturns. It's essential to note, however, that this leveraged and inverse ETF is designed for short-term trading and may not align with long-term investment objectives. Potential users should be aware of the heightened risk associated with such financial instruments.</p>

            <h3>Trading Strategies and Caution:</h3>
            <p>While SQQQ can be a valuable component in a trading strategy, caution is paramount. Its performance is intricately tied to market conditions, and due diligence is crucial. Traders may use SQQQ to hedge against market volatility or to speculate on short-term declines, but it's imperative to stay informed and monitor its performance regularly.</p>

            <p>Serouce : ProShares.</p>
            <img src="sqqq performance.JPG" alt="SQQQ Performance" />
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
          <p>RISK DISCLAIMER: The information provided on this website is solely for informational purposes and should not be construed as a recommendation for any particular investment. Students and individuals bear full responsibility for any live trades conducted in their personal accounts. We explicitly disclaim any responsibility for individual losses resulting from poor trading decisions, inadequately executed trades, or any other actions that may result in a loss of funds.</p>
          <p>&copy; 2023 Nasdaq-100 ETF Explorer. All rights reserved.</p>
        </footer>
      </body>
    </>
  );
};

export default ETFInformation;
