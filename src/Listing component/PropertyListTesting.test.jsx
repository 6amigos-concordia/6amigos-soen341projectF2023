import React from 'react';
import { render, screen } from '@testing-library/react';
import { PropertyDetail, PropertyList } from './PropertyList';
import styles from "../Listing component/PropertyList.css";

describe('Listing component tests', () => {
  it('Page should render', () => {
    render(<PropertyDetail />);
    expect(screen.getByText('Property not found!')).toBeInTheDocument();
  })
})
// test('renders PropertyList component without errors', () => {
//   render(<PropertyList />);
// });
