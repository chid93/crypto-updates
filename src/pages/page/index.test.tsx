import { render, screen } from '../../test-utils';
import Page from '.';

describe('Page', () => {
  beforeEach(() => {
    render(<Page />);
  });
  test('should mount', () => {
    const PageElement = screen.getByTestId('Page');
    expect(PageElement).toBeInTheDocument();
  });
});
