import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ListingProp } from './ListingProp';
import { BrowserRouter } from 'react-router-dom';

// Mock useParams
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: 'mocked-id',
  }),
}));

describe('ListingProp Component', () => {
  test('renders without crashing', () => {
    render(
      <BrowserRouter>
        <ListingProp />
      </BrowserRouter>
    );
  });
});
