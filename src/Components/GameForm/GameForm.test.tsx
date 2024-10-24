import React from 'react';
import { render, screen } from '@testing-library/react';
import GameForm from './GameForm';

test('renders learn react link', () => {
  render(<GameForm />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
