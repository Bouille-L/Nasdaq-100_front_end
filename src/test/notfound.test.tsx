import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import NotFound from '../Components/NotFound';

describe('NotFound Component', () => {
  test('renders the correct content', () => {
    // Render the NotFound component
    render(<NotFound />);

    // Check if the heading is in the document
    expect(screen.getByRole('heading', { name: /404 - Not Found/i })).toBeInTheDocument();

    // Check if the descriptive text is in the document
    expect(screen.getByText(/The page you are looking for doesn't exist\./i)).toBeInTheDocument();
  });
});
