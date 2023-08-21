import { rest } from 'msw';
import userEvent from '@testing-library/user-event';
// eslint-disable-next-line import/no-unresolved
import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup';
import { render, screen } from '../../test-utils';
import Page from '.';
import * as constants from '../../constants';
import mockServer from './mocks/server';
import marketSummaries from './mocks/api/market_summaries.json';
import marketSummaryLTC from './mocks/api/symbol_summary_ltc_btc.json';

describe('Page', () => {
  const server = mockServer();
  let user: UserEvent;
  beforeEach(() => {
    user = userEvent.setup();
    render(<Page />);
  });

  test('should mount', () => {
    const PageElement = screen.getByTestId('Page');
    expect(PageElement).toBeInTheDocument();
  });

  test('should display summary grid on api success', async () => {
    const symbolText = await screen.findByText(marketSummaries[0].symbol);
    expect(symbolText).toBeInTheDocument();
  });

  test('should display LTC crypto on search input', async () => {
    const searchInput = screen.getByLabelText('search');
    expect(searchInput).toBeInTheDocument();

    // search for specific crypto market
    await user.type(searchInput, marketSummaryLTC.symbol);
    const High24hText = await screen.findByText(marketSummaryLTC.high);
    expect(High24hText).toBeInTheDocument();

    // assert if 1 row is displayed in grid
    expect(screen.getByText(/1 of 1/)).toBeInTheDocument();

    // clear search input to fetch summaries
    await user.clear(searchInput);
    const symbolText = await screen.findByText(marketSummaries[0].symbol);
    expect(symbolText).toBeInTheDocument();

    // assert if 20 rows text is displayed in grid
    const regex = new RegExp(`20 of ${marketSummaries.length}`);
    expect(screen.getByText(regex)).toBeInTheDocument();
  });

  test('should display error notification on api error', async () => {
    server.use(rest.get(constants.SUMMARIES_API, (req, res, ctx) => res.once(ctx.status(500))));
    const errorMessage = await screen.findByText(constants.ERROR_MESSAGE);
    expect(errorMessage).toBeInTheDocument();

    // assert if 0 rows text is displayed in grid
    expect(screen.getByText(/0 of 0/)).toBeInTheDocument();
  });
});
