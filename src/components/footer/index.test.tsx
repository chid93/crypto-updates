import { render, screen } from '../../utils/test-utils';
import Footer from '.';

describe('Footer', () => {
  test('should render copyright text', () => {
    render(<Footer />);
    const FooterElement = screen.getByTestId('Footer');
    expect(FooterElement).toBeInTheDocument();
    const copyrightText = screen.getByText(/Copyright ©/);
    expect(copyrightText).toBeInTheDocument();
  });
});
