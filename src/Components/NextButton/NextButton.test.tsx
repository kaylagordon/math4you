import { render, screen } from '@testing-library/react';
import NextButton from './NextButton';

test('renders learn react link', () => {
  render(<NextButton />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
