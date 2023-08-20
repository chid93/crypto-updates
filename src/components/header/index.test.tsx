import { render, screen } from '@testing-library/react';
import Header from '.';

describe('header', () => {
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
