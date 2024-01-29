# Nasdaq-100_front_end
## Objective:
The objective of this project is to develop a web application that provides users with comprehensive information and interactive charts for Nasdaq-100 ETF (TQQQ, QQQ, SQQQ). The application will empower users to make informed investment decisions and track ETF performance.

The project includes the development of a user-friendly web application that aggregates and displays real-time data, interactive charts, news, and educational content related to Nasdaq-100 ETFs (TQQQ, QQQ, NASDAQ-100, SQQQ).
Exclusions: The project does not cover the development of a mobile application or trading functionality.

Such an application can provide significant value to investors, traders, and anyone interested in the Nasdaq-100 index and its constituent ETFs (TQQQ, QQQ, NASDAQ-100, SQQQ).  It can help users make informed investment decisions and track the performance of these ETFs. While there are existing financial data platforms, creating a new, user-friendly, and innovative interface that specifically focuses on Nasdaq-100 ETFs can offer a unique perspective and features, setting it apart from generic financial websites.
                                                                                           
                                                                   
                                                                                           
                                                                                           
## Architectural Principles and Approach:
Design Philosophy: The architecture is crafted with an emphasis on modularity, scalability, and responsiveness, aiming to deliver a smooth user experience when accessing financial data.

Architectural Style: The application embraces a client-server model, ensuring a distinct separation between the backend (utilizing Django REST) and the frontend (powered by ReactJS).
Frameworks and Technologies:
- Django REST Framework: Selected for its effectiveness and robustness in managing RESTful API services, which are essential for delivering real-time financial data.
- ReactJS: Chosen for the frontend development to facilitate a dynamic and interactive user interface. Its component-based structure enables efficient updates and the rendering of dynamic elements, such as charts and news feeds.
- Chart.js: Employed to provide interactive and responsive chart visualizations, significantly enhancing the data presentation capabilities of the application.

High-Level Structure: The backend is tasked with handling API calls, data processing, and storage operations (such as archiving user messages). The frontend is designed to effectively display data through both static and dynamic components.

                                                                                        

# Nasdaq-100_front_end Folder :
## Introduction :
In this repository, you'll find the frontend of the Nasdaq-100 ETF Explorer Application. Our frontend is built using React.js, chosen for its component-based architecture. React.js's ability to manage stateful components and efficiently update the DOM makes it ideal for creating dynamic views, such as real-time stock charts and news updates. We utilize HTTP requests to retrieve stock data and market news from the Django backend, facilitating front-end to back-end communication. Finally, we've integrated Chart.js for its simplicity and effectiveness in creating interactive charts, crucial for representing financial data of TQQQ, SQQQ, and QQQ ETFs.

## Overview of system Component in Frontend (React.js) :
This section provides an overview of all components of the front end of the  NASDAQ-100 ETF Explorer web application, each playing a specific role in the application's functionality.
Frontend (ReactJS): Responsible for presenting the user interface, it handles user interactions and displays data fetched from the backend and below its components:
•	Home.tsx : this is main landing page and it will display ChartTQQQ, ChartQQQ, ChartSQQQ and News component plus header and footer
•	Aboutus.tsx: display information about the teams and web application 
•	Etf_Information.tsx: Displays detailed information about various NASDAQ-100 ETFs.
•	Educational_Resources.tsx: Offers educational material and resources for new investors.
•	Contactus.tsx : A contact form for user inquiries.
•	ChartQQQ.tsx : specialized component that fetch stock price data then displaying interactive charts, specifically for the QQQ ETF Price 
•	ChartTQQQ.tsx : specialized component that fetch stock price data then displaying interactive charts, specifically for the TQQQ ETF Price 
•	ChartSQQQ.tsx : specialized component that fetch stock price data then displaying interactive charts, specifically for the SQQQ ETF Price 
•	News.tsx : it fetch news and  display the latest market news and updates relevant to NASDAQ-100 ETFs.
•	App.tsx : serves as the root component in the React application for the NASDAQ-100 ETF Explorer. It is the main entry point for the application's user interface and is responsible for defining the routing structure.
•	NotFound.tsx : Displayed when a user navigates to an undefined route or a non-existent page.
•	PublicFolder : Contains static assets like images, fonts, and external scripts used in the application.

## UML Component Diagram : 
To review the UML component diagram, please visit the following repository : https://github.com/Bouille-L/Web-App-UML-Diagram.git

                                                                                    


# Installation Instructions: 
This guide will help you set up and run Nasdaq-100 ETF Explorer Front end on your local machine for development and testing purposes.to install and set up this fron end locally, you need:

## Prerequisites
Before beginning, ensure you have the following installed:
- Node.js (latest stable version is recommended)
- npm (usually comes with Node.js)

## Cloning the Repository
First, clone the project repository to your local machine:

```git clone https://github.com/Bouille-L/Nasdaq-100_front_end.git```

```cd Nasdaq-100_front_end```

## Installing Dependencies
The project uses several npm packages. Install them by running: 

```npm install```

This command will install all necessary dependencies as specified in the package.json file.

## Running the Application
To start the application on your local machine: 

```npm run dev```

This command will launch the React application, typically in your default web browser. If it doesn't open automatically, you can access it via [http://localhost:3000 ](http://localhost:5173/)

## Key Dependencies
The project uses key dependencies, including:
React (react, react-dom)
React Testing Libraries (@testing-library/react, @testing-library/jest-dom, etc.)
TypeScript for type-checking (typescript)
Babel for compiling JSX and ES6 (@babel/core, @babel/preset-env, etc.)
Axios for making HTTP requests (axios)
React Router for navigation (react-router-dom)
Chart.js for data visualization (chart.js, react-chartjs-2)
Cypress for end-to-end testing (cypress)
Ensure that these dependencies are properly installed for the application to function correctly.

## Troubleshooting:
If, when you open the front end in your web browser, the Home page displays the message "Error: Error fetching data. Please try again" in the news and charts section, it may be due to either a lack of communication established with the back end or reaching the maximum API calls allowed for the day. This issue could be occurring because we are using a free API service.

## For further questions or contributions, feel free to contact me via Github Channel.

                                                                                                   




