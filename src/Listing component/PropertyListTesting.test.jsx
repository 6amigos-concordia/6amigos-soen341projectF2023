import React from 'react';
import { render } from '@testing-library/react';
import {PropertyList} from './PropertyList';
import styles from "../Listing component/PropertyList.css";

test('renders PropertyList component without errors', () => {
  render(<PropertyList />);
});
