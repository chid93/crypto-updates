import { render, screen } from '../../utils/test-utils';
import Footer from '.';

describe('Footer', () => {
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
