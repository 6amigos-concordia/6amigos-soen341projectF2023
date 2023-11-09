import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { BrokerList } from './BrokerList';

describe('BrokerList Component', () => {
  test('renders the Searchbar', () => {
    render(
      <Router>
        <BrokerList />
      </Router>
    );
    const searchbarElement = screen.getByTestId('searchbar');
    expect(searchbarElement).toBeInTheDocument();
  });
});
