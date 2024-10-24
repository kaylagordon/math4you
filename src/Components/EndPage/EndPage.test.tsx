import { render, screen } from '@testing-library/react';
import EndPage from './EndPage';

test('renders learn react link', () => {
  render(<EndPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
