import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Adds the 'toBeInTheDocument' and 'toHaveClass' vocabulary
import { describe, it, expect } from 'vitest'; // Imports the core testing functions
import LandingPage from './LandingPage';

describe('LandingPage', () => {
  it('renders the headline', () => {
    render(<LandingPage />);
    const headline = screen.getByText(/Imagine Being.../i);
    expect(headline).toBeInTheDocument();
  });

  it('renders the headline with correct color class', () => {
    render(<LandingPage />);
    const headline = screen.getByRole('heading', { level: 1 });
    expect(headline).toHaveTextContent(/Imagine Being.../i);
    expect(headline).toHaveTextContent(/HOME/i);
    expect(headline).toHaveClass('text-[#4A4A4A]');
  });

  it('renders the download button with correct link', () => {
    render(<LandingPage />);
    const downloadButton = screen.getByRole('link', { name: /Download the Sundial App/i });
    expect(downloadButton).toHaveAttribute('href', 'https://bk.homestack.com/sundialrealestate?aik=bkiniry');
  });

  it('renders the resource guide button', () => {
    render(<LandingPage />);
    const resourceButton = screen.getByRole('link', { name: /Browse the Resource Guide/i });
    expect(resourceButton).toBeInTheDocument();
  });

  it('renders the contact information', () => {
    render(<LandingPage />);
    expect(screen.getByText('Brittany Kiniry')).toBeInTheDocument();
    expect(screen.getByText('407.759.3275')).toBeInTheDocument();
  });

  it('toggles the About Me section', () => {
    render(<LandingPage />);

    // Find the toggle button
    const toggleButton = screen.getByRole('button', { name: /About Me/i });
    expect(toggleButton).toBeInTheDocument();

    // Initially collapsed
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');

    // Check classes on content container for visibility state
    const contentContainer = screen.getByTestId('about-content');
    expect(contentContainer).toHaveClass('max-h-0');
    expect(contentContainer).toHaveClass('opacity-0');

    // Click to expand
    fireEvent.click(toggleButton);

    // Expanded state
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
    expect(contentContainer).toHaveClass('max-h-[1000px]');
    expect(contentContainer).toHaveClass('opacity-100');

    // Click to collapse
    fireEvent.click(toggleButton);

    // Collapsed state
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
    expect(contentContainer).toHaveClass('max-h-0');
    expect(contentContainer).toHaveClass('opacity-0');
  });
});
