import { render, screen } from '../../utils/test-utils';
import Header from '.';

describe('Header', () => {
  test('should render heading and search input', () => {
    render(<Header />);
    const HeaderElement = screen.getByTestId('Header');
    expect(HeaderElement).toBeInTheDocument();
    const heading = screen.getByText('Crypto Market Updates');
    expect(heading).toBeInTheDocument();
    const searchInput = screen.getByLabelText('search');
    expect(searchInput).toBeInTheDocument();
  });
});
