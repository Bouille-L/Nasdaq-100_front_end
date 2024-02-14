import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface NewsItem {
  uuid: string;
  title: string;
  snippet: string;
  image_url: string;
  url: string;
}

const News: React.FC = () => {
  const [newsData, setNewsData] = useState<NewsItem[]>([]);
  const [loadingNews, setLoadingNews] = useState(true);
  const [errorNews, setErrorNews] = useState<string | null>(null);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const timeZone = 'America/New_York'; // Specify the desired time zone

        const response = await axios.get<NewsItem[]>(`https://nasdaq-100-webapp-backend-bcf51f152084.herokuapp.com/api/news/?timeZone=${timeZone}`);
        setNewsData(response.data);
      } catch (error) {
        console.error('Error fetching news data:', error);
        setErrorNews('Error fetching news data. Please try again later.');
      } finally {
        setLoadingNews(false);
      }
    };

    fetchNewsData();
  }, []);

  return (
    <div className="News">
      <h1>News & Announcements</h1>
      {loadingNews ? (
        <p>Loading news data...</p>
      ) : errorNews ? (
        <p>{errorNews}</p>
      ) : (
        <ul>
          {newsData.length === 0 ? (
            <li>No news available</li>
          ) : (
            newsData.map((newsItem) => (
              <li key={newsItem.uuid}>
                <h2>{newsItem.title}</h2>
                <p>{newsItem.snippet}</p>
                <img src={newsItem.image_url} alt={newsItem.title} />
                <a
                  href={newsItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                </a>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default News;
