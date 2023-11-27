jest.mock('../NavBar&Logo/NavBar&Logo', () => {
    return {
      NavBarLogo: () => <div data-testid="mock-navbar-logo"></div>,
    };
  });
  import React from 'react';
  import { render, screen } from '@testing-library/react';
  import { Mortgcalc } from './Mortgcalc';
  
  test('renders a button', () => {
    render(<Mortgcalc />);
    
    // Check for the presence of the button
    const buttonElement = screen.getByText('Calculate');
    expect(buttonElement).toBeInTheDocument();
  
    // You can also check other elements as needed
  });
    