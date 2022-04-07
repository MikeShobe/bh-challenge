import React from 'react';
import { render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';

test('renders dropdown', () => {
  render(
    <Dropdown
      options={[]}
      selectedOption={null}
      setSelectedOption={function (option: any): void {
        throw new Error('Function not implemented.');
      }}
    />
  );
  const linkElement = screen.getByText('Select');
  expect(linkElement).toBeInTheDocument();
});
