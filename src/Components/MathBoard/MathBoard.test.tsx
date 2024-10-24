import React from 'react';
import { render, screen } from '@testing-library/react';
import MathBoard from './MathBoard';

test('renders learn react link', () => {
  render(<MathBoard />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
