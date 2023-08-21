import { render, screen } from './utils/test-utils';
import App from './App';

test('should mount', () => {
  render(<App />);
  const AppElement = screen.getByTestId('Page');
  expect(AppElement).toBeInTheDocument();
});
