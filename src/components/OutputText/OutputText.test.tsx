import React from 'react';
import { render, screen } from '@testing-library/react';
import OutputText from './OutputText';

test('renders OutputText', () => {
  render(<OutputText output="test" />);
  const linkElement = screen.getByText('test');
  expect(linkElement).toBeInTheDocument();
});
