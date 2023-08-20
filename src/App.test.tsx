import { render, screen } from '@testing-library/react';
import App from './App';

test('should mount', () => {
  render(<App />);
  const AppElement = screen.getByTestId('App');
  expect(AppElement).toBeInTheDocument();
});
