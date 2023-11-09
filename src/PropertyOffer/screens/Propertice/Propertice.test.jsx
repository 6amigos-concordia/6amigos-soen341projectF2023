import React from "react";
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import jest-dom matchers
import { Propertice } from './Propertice'; // Import the component to be tested

test('should handle accept offer button click', () => {
  const { getByText, getByTestId } = render(<Propertice />);
  
  // Click the accept offer button for the first property
  const acceptButton = getByText('Accept Offer');
  fireEvent.click(acceptButton);
  
  // Check if the offer status for the first property is set to "Accepted"
  const offerStatus = getByTestId('offer-status');
  expect(offerStatus).toHaveTextContent('Accepted');
});

test('should handle reject offer button click', () => {
  const { getByText, getByTestId } = render(<Propertice />);
  
  // Click the reject offer button for the second property
  const rejectButton = getByText('Decline Offer');
  fireEvent.click(rejectButton);
  
  // Check if the offer status for the second property is set to "Rejected"
  const offerStatus1 = getByTestId('offer-status1');
  expect(offerStatus1).toHaveTextContent('Rejected');
});

test('should handle accept offer button click for the third property', () => {
  const { getByText, getByTestId } = render(<Propertice />);
  
  // Click the accept offer button for the third property
  const acceptButton = getByText('Accept Offer');
  fireEvent.click(acceptButton);
  
  // Check if the offer status for the third property is set to "Accepted"
  const offerStatus2 = getByTestId('offer-status2');
  expect(offerStatus2).toHaveTextContent('Accepted');
});
