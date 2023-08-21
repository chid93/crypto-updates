import { render, screen } from '../../test-utils';
import Footer from '.';

describe('header', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  test('should mount', () => {
    const FooterElement = screen.getByTestId('Footer');
    expect(FooterElement).toBeInTheDocument();
  });

  test('should render copyright text', () => {
    const copyrightText = screen.getByText(/Copyright ©/);
    expect(copyrightText).toBeInTheDocument();
  });
});
