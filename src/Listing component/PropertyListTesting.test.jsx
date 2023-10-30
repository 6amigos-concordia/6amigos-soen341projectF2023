import React from 'react';
import { render } from '@testing-library/react';
import {PropertyList} from './PropertyList'; // Make sure the path is correct

test('renders PropertyList component without errors', () => {
  render(<PropertyList />);
});
