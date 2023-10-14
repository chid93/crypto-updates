import { render, screen, waitFor, act } from '../../utils/test-utils';
import Toast from '.';
import toastErrorProps from './mocks/props';
import * as constants from '../../constants';

describe('Toast', () => {
  beforeAll(() => { jest.useFakeTimers(); })
  afterAll(() => { jest.useRealTimers(); })

  beforeEach(() => {
    render(<Toast {...toastErrorProps} />);
  });

  test('should show/hide error message', async () => {
    const toastElement = screen.getByTestId('Toast');
    expect(toastElement).toBeInTheDocument();
    const errorText = screen.getByText(constants.ERROR_MESSAGE);
    expect(errorText).toBeVisible();
    act(() => jest.advanceTimersByTime(constants.TIMEOUT_AUTO_HIDE_DURATION))
   
    await waitFor(() => expect(errorText).not.toBeVisible());
  });
});
