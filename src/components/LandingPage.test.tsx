import { render, screen } from '@testing-library/react';
import LandingPage from './LandingPage';
import { describe, it, expect } from 'vitest';
import React from 'react';

describe('LandingPage', () => {
  it('renders the headline', () => {
    render(<LandingPage />);
    const headline = screen.getByText(/Imagine Being.../i);
    expect(headline).toBeInTheDocument();
  });

  it('renders the "HOME" text with correct color class', () => {
    render(<LandingPage />);
    const homeText = screen.getByText('HOME');
    expect(homeText).toHaveClass('text-sundial-orange');
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
});
