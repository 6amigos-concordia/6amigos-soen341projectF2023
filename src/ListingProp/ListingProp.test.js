import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ListingProp } from './ListingProp';

describe('ListingProp Component', () => {
  test('renders Submit Offer button', () => {
    render(<ListingProp />);
    const submitOfferButton = screen.getByText(/Submit Offer/i);
    expect(submitOfferButton).toBeInTheDocument();
  });
});