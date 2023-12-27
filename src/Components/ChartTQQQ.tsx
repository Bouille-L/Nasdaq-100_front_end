import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

interface ChartData {
  [timestamp: string]: {
    '1. open': string;
    '2. high': string;
    '3. low': string;
    '4. close': string;
    '5. volume': string;
  };
}
const ChartTQQQ: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedRange, setSelectedRange] = useState<string>('1d'); // Default range '1d'

  const fetchChartData = async (range: string) => {
    setLoading(true);
    try {
      let apiUrl = 'http://127.0.0.1:8000/api/stock/';

      const timeZone = 'America/New_York'; // Specify the desired time zone consistently

      if (range === '1d') {
        // Fetch data for the current day
        apiUrl += `?range=${range}&timeZone=${timeZone}`;

      } else {
        // Fetch the whole dataset (default is 30 days)
        // Modify the endpoint and parameters based on your API's requirements
        apiUrl += `?range=all&timeZone=${timeZone}`;
      }

      const response = await axios.get<{ 'Time Series (30min)': ChartData }>(apiUrl);

      setChartData(response.data['Time Series (30min)']);
    } catch (error) {
      setError('Error fetching data. Please try again.');
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch data for the current day when the component mounts
    fetchChartData(selectedRange);
  }, [selectedRange]);

  const handleButtonClick = (range: string) => {
    setSelectedRange(range);
    fetchChartData(range);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!chartData) {
    return <div>No data available</div>;
  }

  // Find the most recent timestamp
  const latestTimestamp = Object.keys(chartData).reduce((a, b) => (a > b ? a : b), '');

  // Get the stock price for the most recent timestamp
  const latestStockPrice = parseFloat(chartData[latestTimestamp]['4. close']);

  // Mapping stock price data without reversing for '1d' range
  const priceData = Object.entries(chartData)
    .map(([timestamp, values]) => ({
      x: new Date(`${timestamp} UTC`).getTime(),
      y: parseFloat(values['4. close']),
    }));

  // Mapping volume data without reversing for '1d' range
  const volumeData = Object.entries(chartData)
    .map(([timestamp, values]) => ({
      x: new Date(`${timestamp} UTC`).getTime(),
      y: parseFloat(values['5. volume']),
    }));


  const series = [
    {
      name: 'Stock Price',
      data: priceData,
    },
    {
      name: 'Volume',
      data: volumeData,
    },
  ];

  const options = {
    chart: {
      type: 'line', // Change chart type to line
      height: 350,
    },
    xaxis: {
      type: 'datetime',
      labels: {
        formatter: function (val: number, timestamp: any) {
          // Format x-axis labels based on the selected range
          if (selectedRange === '1d') {
            return new Date(timestamp).toLocaleTimeString('en-US', {
              hour: 'numeric',
              minute: '2-digit',
              timeZone: 'UTC',
              hour12: false, // Use 24-hour format
            });
          } else {
            return new Date(timestamp).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
            });
          }
        },
      },
    },
    yaxis: [
      {
        title: {
          text: 'Stock Price USD',
        },
        labels: {
          formatter: function (val: number) {
            return val.toFixed(2);
          },
        },
      },
      {
        opposite: true,
        title: {
          text: 'Volume',
        },
        labels: {
          show: true, // Hide labels for volume
        },
      },
    ],
    tooltip: {
      x: {
        format: selectedRange === '1d' ? 'HH:mm' : 'yyyy-MM-dd',
      },
    },
  };

  return (
    <div>
      <div>
        <button onClick={() => handleButtonClick('1d')}>Day</button>
        <button onClick={() => handleButtonClick('all')}>Month</button>
      </div>
      <h1>TQQQ</h1>
      <h3>
        Current Stock Price: {latestStockPrice ? latestStockPrice.toFixed(2) : 'N/A'}
      </h3>
      <Chart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default ChartTQQQ;
