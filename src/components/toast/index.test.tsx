import { render, screen, waitFor } from '../../test-utils';
import Toast from '.';
import toastErrorProps from './mocks/props';
import * as constants from '../../constants';

const timeout = constants.TIMEOUT_AUTO_HIDE_DURATION + 5000;
jest.setTimeout(timeout);

describe('Toast', () => {
  beforeEach(() => {
    render(<Toast {...toastErrorProps} />);
  });

  test('should show error message', async () => {
    const toastElement = screen.getByTestId('Toast');
    expect(toastElement).toBeInTheDocument();
    const errorText = screen.getByText(constants.ERROR_MESSAGE);
    expect(errorText).toBeVisible();
  });

  test('should hide error message after auto hide duration', async () => {
    const errorText = screen.getByText(constants.ERROR_MESSAGE);
    expect(errorText).toBeVisible();
    await waitFor(
      () => {
        expect(errorText).not.toBeVisible();
      },
      { timeout },
    );
  });
});
