import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PropertyList } from './PropertyList';
import { BrowserRouter } from 'react-router-dom';

// Mocking the api module
jest.mock('../api', () => ({
  properties: {
    getAllProperties: jest.fn(() => Promise.resolve([])), // Mocking an empty response
  },
}));

describe('PropertyList component tests', () => {
  it('should render without crashing', async () => {
    render(
      <BrowserRouter>
        <PropertyList />
      </BrowserRouter>
    );
    // Use waitFor to handle asynchronous state updates
    await waitFor(() => {
      // You can add specific checks here if needed
    });
  });
});
