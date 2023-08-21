import { render, screen } from '../../test-utils';
import Header from '.';

describe('Header', () => {
  beforeEach(() => {
    render(<Header />);
  });

  test('should mount', () => {
    const HeaderElement = screen.getByTestId('Header');
    expect(HeaderElement).toBeInTheDocument();
  });

  test('should render heading and search input', () => {
    const heading = screen.getByText('Crypto Market Updates');
    expect(heading).toBeInTheDocument();

    const searchInput = screen.getByLabelText('search');
    expect(searchInput).toBeInTheDocument();
  });
});
