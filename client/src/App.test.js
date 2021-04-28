import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SDI Library heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading');
  expect(heading.innerHTML).toBe('SDI Library');
});
