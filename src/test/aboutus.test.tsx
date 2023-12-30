import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';
import AboutUs from '../Components/aboutus';

describe('AboutUs Component Tests', () => {

  test('renders AboutUs component', () => {
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    );
    // Since 'About Us' text appears multiple times, check for one specific instance
    const aboutUsTextInMainContent = screen.getAllByText('About Us').filter(element => element.tagName === 'P')[0];
    expect(aboutUsTextInMainContent).toBeInTheDocument();
  });

  test('displays the correct content', () => {
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    );
    // Using regex to match part of the text content
    expect(screen.getByText(/Welcome to the Nasdaq-100 ETF Explorer/)).toBeInTheDocument();
    expect(screen.getByText('Our Mission')).toBeInTheDocument();
    // Add more assertions here for other parts of your content
  });

  test('has correct navigation links', () => {
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    );

    // Check the first instance of the link 'Home'
    const homeLinks = screen.getAllByText('Home').filter(node => node.closest('a'));
    expect(homeLinks[0]).toHaveAttribute('href', '/');
    // Similarly, check the first instance of other links
    const aboutUsLinks = screen.getAllByText('About Us').filter(node => node.closest('a'));
    expect(aboutUsLinks[0]).toHaveAttribute('href', '/about');
    // Continue for the rest of the links
  });

  test('displays the correct footer content', () => {
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    );
    expect(screen.getByText(/RISK DISCLAIMER/)).toBeInTheDocument();
    expect(screen.getByText('© 2023 Nasdaq-100 ETF Explorer. All rights reserved.')).toBeInTheDocument();
  });

});
