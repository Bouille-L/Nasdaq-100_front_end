import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import EducationalResources from '../Components/educational_resources';


describe('EducationalResources Component Tests', () => {

  beforeEach(() => {
    render(
      <BrowserRouter>
        <EducationalResources />
      </BrowserRouter>
    );
  });

  test('renders EducationalResources component', () => {
    const etfGuideElements = screen.getAllByText("ETF Beginner's guide");
    expect(etfGuideElements.length).toBeGreaterThan(0);
    expect(etfGuideElements[0].tagName).toBe('H2'); // Checking the first instance if it's a header
    // Add more assertions for other sections if needed
  });

  test('has correct navigation links', () => {
    const homeLink = screen.getAllByText('Home').filter(node => node.closest('a'))[0];
    expect(homeLink).toHaveAttribute('href', '/');
    // Similarly, check the first instance of other links
    // Continue for the rest of the links
  });

  test('displays the correct footer content', () => {
    expect(screen.getByText(/RISK DISCLAIMER/)).toBeInTheDocument();
    expect(screen.getByText('© 2023 Nasdaq-100 ETF Explorer. All rights reserved.')).toBeInTheDocument();
  });

  test('contains download links for educational resources', () => {
    const links = [
      { text: 'ETF Handbook Third Edition', href: 'public/ETF for Beginners/206323_etf_handbook_third_edition.pdf' },
      { text: "ETF Beginner's guide", href: 'ETF for Beginners/206323_etf_handbook_third_edition.pdf' },
      // Add more links here as per your component
    ];

    links.forEach(link => {
      const downloadLinks = screen.getAllByText(link.text).filter(node => node.tagName === 'A');
      expect(downloadLinks.length).toBeGreaterThan(0);
      const downloadLink = downloadLinks[0]; // Assuming the first link is the correct one

      const hrefAttribute = downloadLink.getAttribute('href');
      if (hrefAttribute) {
        const normalizedHref = hrefAttribute.replace(/\\/g, '/');
        expect(normalizedHref).toContain(link.href);
      } else {
        throw new Error(`Download link for '${link.text}' does not have an 'href' attribute.`);
      }

      expect(downloadLink).toHaveAttribute('download');
    });
  });
});
