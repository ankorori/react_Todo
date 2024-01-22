import { render } from '@testing-library/react';
import React from 'react';
import RouteIndex from '../src/routes/Routes';

describe('RouteIndex', () => {
  test('renders without crashing', () => {
    render(<RouteIndex />);
  });
});