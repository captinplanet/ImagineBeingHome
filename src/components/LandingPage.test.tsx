import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Adds the 'toBeInTheDocument' and 'toHaveClass' vocabulary
import { describe, it, expect } from 'vitest'; // Imports the core testing functions
import LandingPage from './LandingPage';

describe('LandingPage', () => {
  it('renders the headline', () => {
    render(<LandingPage />);
    const headline = screen.getAllByText(/Imagine Being.../i)[0];
    expect(headline).toBeInTheDocument();
  });

  it('renders the headline with correct color class', () => {
    render(<LandingPage />);
    const headline = screen.getByRole('heading', { level: 1 });
    expect(headline).toHaveTextContent(/Imagine Being.../i);
    expect(headline).toHaveTextContent(/HOME/i);
    expect(headline).toHaveClass('text-[#4A4A4A]');
  });

  it('renders the download app section', () => {
    render(<LandingPage />);
    const downloadTexts = screen.getAllByText('Download My App');
    expect(downloadTexts.length).toBeGreaterThan(0);
  });

  it('renders the resource guide button', () => {
    render(<LandingPage />);
    const resourceButton = screen.getByRole('link', { name: /Browse the Resource Guide/i });
    expect(resourceButton).toBeInTheDocument();
  });

  it('renders the contact information', () => {
    render(<LandingPage />);
    expect(screen.getByText('Brittany Kiniry')).toBeInTheDocument();
    expect(screen.getByText('407.453.4755')).toBeInTheDocument();
  });

  it('renders the static About Me editorial section', () => {
    render(<LandingPage />);

    // Check for the headline
    expect(screen.getByRole('heading', { name: /A Note from Brittany/i })).toBeInTheDocument();

    // Check for the signature
    expect(screen.getByText('- Brittany')).toBeInTheDocument();
  });
});
