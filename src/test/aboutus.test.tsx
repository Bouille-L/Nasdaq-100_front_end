
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AboutUs from '../Components/aboutus';

describe('AboutUs Component', () => {
  test('renders the correct content', () => {
    // Render the AboutUs Component 
    render(<AboutUs />);

    // Check if the first paragraph with the text "Our Mission." is in the document 
    expect(screen.getByText(/Our Mission\./i)).toBeInTheDocument();
  });
});
