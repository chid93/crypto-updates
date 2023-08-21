// import { rest } from 'msw';
// import * as constants from '../../constants';
// import mockServer from './mocks/server';
import { render, screen } from '../../test-utils';
import SummaryGrid from '.';
import marketSummaries from './mocks/api/market_summaries.json';
import marketSummaryLTC from './mocks/api/symbol_summary_ltc_btc.json';
import { providerPropsSummaryItems, providerPropsSummaryLTC } from './mocks/context';

describe('SummaryGrid', () => {
  // const server = mockServer();

  test('should mount', () => {
    render(<SummaryGrid />);
    const SummaryItemsElement = screen.getByTestId('SummaryItems');
    expect(SummaryItemsElement).toBeInTheDocument();
  });

  test('should display crypto summary items in grid', async () => {
    render(<SummaryGrid />, { providerProps: providerPropsSummaryItems });
    const symbolText = await screen.findByText(marketSummaries[0].symbol);
    expect(symbolText).toBeInTheDocument();
  });

  test('should display LTC crypto summary in grid', async () => {
    render(<SummaryGrid />, { providerProps: providerPropsSummaryLTC });
    const symbolText = await screen.findByText(marketSummaryLTC.symbol);
    expect(symbolText).toBeInTheDocument();
  });

  // test('should display error notification on api error', async () => {
  //   server.use(rest.get(constants.SUMMARIES_API, (req, res, ctx) => res.once(ctx.status(500))));
  //   const errorMessage = await screen.findByText(constants.ERROR_MESSAGE);
  //   expect(errorMessage).toBeInTheDocument();
  // });
});
