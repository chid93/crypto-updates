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
import { ISummaryItem, SummaryItemsType } from '../../types/models/summary.model';

describe('Page', () => {
  const typedMarketSummaries = marketSummaries as SummaryItemsType;
  const typedMarketSummaryLTC = marketSummaryLTC as ISummaryItem;
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
    const regex = new RegExp(typedMarketSummaries[0].symbol.toString().split('-')[0]);
    const symbolText = await screen.findAllByText(regex);
    expect(symbolText[0]).toBeInTheDocument();
  });

  test('should display LTC crypto on search input', async () => {
    const searchInput = screen.getByLabelText('search');
    expect(searchInput).toBeInTheDocument();

    // search for specific crypto market
    await user.type(searchInput, typedMarketSummaryLTC.symbol as string);
    const ltcRegex = new RegExp(typedMarketSummaryLTC.symbol.toString().split('-')[0]);
    const symbolTextLtc = await screen.findByText(ltcRegex);
    expect(symbolTextLtc).toBeInTheDocument();

    // assert if 1 row is displayed in grid
    expect(screen.getByText(/1 of 1/)).toBeInTheDocument();

    // clear search input to fetch summaries
    await user.clear(searchInput);
    const firstSummaryItemRegex = new RegExp(typedMarketSummaries[0].symbol.toString().split('-')[0]);
    const symbolText = await screen.findAllByText(firstSummaryItemRegex);
    expect(symbolText[0]).toBeInTheDocument();

    // assert if 20 rows text is displayed in grid
    const countRegex = new RegExp(`20 of ${typedMarketSummaries.length}`);
    expect(screen.getByText(countRegex)).toBeInTheDocument();
  });

  test('should display error notification on api error', async () => {
    server.use(rest.get(constants.SUMMARIES_API, (req, res, ctx) => res.once(ctx.status(500))));
    const errorMessage = await screen.findByText(constants.ERROR_MESSAGE);
    expect(errorMessage).toBeInTheDocument();

    // assert if 0 rows text is displayed in grid
    expect(screen.getByText(/0 of 0/)).toBeInTheDocument();
  });
});
