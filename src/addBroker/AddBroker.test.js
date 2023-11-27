import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AddBroker } from './AddBroker';

describe('AddBroker Component', () => {
  test('renders add broker button', () => {
    render(<AddBroker />);
    const addButton = screen.getByRole('button', { name: /add broker/i });
    expect(addButton).toBeInTheDocument();
  });
});
