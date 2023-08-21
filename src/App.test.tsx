import { render, screen } from './test-utils';
import App from './App';

test('should mount', () => {
  render(<App />);
  const AppElement = screen.getByTestId('App');
  expect(AppElement).toBeInTheDocument();
});
