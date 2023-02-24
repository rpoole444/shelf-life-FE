import { render, screen } from '@testing-library/react';
import App from './App';

// Tests should generally either be alongside their components or in a tests/ folder, not just chilling under src/
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
