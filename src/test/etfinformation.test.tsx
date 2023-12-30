import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import ETFInformation from '../Components/etf_information';

describe('ETFInformation Component Tests', () => {

  beforeEach(() => {
    render(
      <BrowserRouter>
        <ETFInformation />
      </BrowserRouter>
    );
  });

  test('renders ETFInformation component', () => {
    expect(screen.getByText('1. Introduction to ETFs')).toBeInTheDocument();
    expect(screen.getByText('2. Nasdaq-100 Index')).toBeInTheDocument();
    // Add more assertions for other sections
  });

  test('contains correct content', () => {
    // Using regex to match part of the text content for a section
    expect(screen.getByText(/Welcome to the world of Exchange-Traded Funds/)).toBeInTheDocument();
    expect(screen.getByText('Definition of ETFs:')).toBeInTheDocument();
    // More content checks
  });

  test('has correct navigation links', () => {
    // Check the first instance of the link 'Home'
    const homeLinks = screen.getAllByText('Home').filter(node => node.closest('a'));
    expect(homeLinks[0]).toHaveAttribute('href', '/');
    // Similarly, check the first instance of other links
    // Continue for the rest of the links
  });

  test('displays the correct footer content', () => {
    expect(screen.getByText(/RISK DISCLAIMER/)).toBeInTheDocument();
    expect(screen.getByText('© 2023 Nasdaq-100 ETF Explorer. All rights reserved.')).toBeInTheDocument();
  });

  test('contains a link to download the Nasdaq-100 Companies list', () => {
    // Assuming 'Click Here to Download the Nasdaq-100 Companies list' is the link text
    const downloadLink = screen.getByText('Click Here to Download the Nasdaq-100 Companies list');
    expect(downloadLink).toBeInTheDocument();
    expect(downloadLink).toHaveAttribute('href', 'Nasdaq-100 Companies List.xlsx');
  });

  // Additional tests can be added here, such as testing for images, iframes, or specific layout structures

});
