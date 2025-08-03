import { render, screen } from '@testing-library/react';
import App from './App';
import { P1 } from './P1';

test('renders learn react link', () => {
  render(<App />);
  
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
