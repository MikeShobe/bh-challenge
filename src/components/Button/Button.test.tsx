import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders button', () => {
  render(<Button text="test" onClick={() => {}} disabled={true} />);
  const linkElement = screen.getByText('test');
  expect(linkElement).toBeInTheDocument();
});
