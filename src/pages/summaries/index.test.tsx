import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import Summaries from '.';
import * as constants from '../../constants';
import marketSummaries from './mocks/api/market_summaries.json';
import mockServer from './mocks/server';

describe('summaries', () => {
  const server = mockServer();

  beforeEach(() => {
    render(<Summaries />);
  });

  test('should mount', () => {
    const SummaryItemsElement = screen.getByTestId('SummaryItems');
    expect(SummaryItemsElement).toBeInTheDocument();
  });

  test('should display crypto records on api success', async () => {
    const symbolText = await screen.findByText(marketSummaries[0].symbol);
    expect(symbolText).toBeInTheDocument();
  });

  test('should display error notification on api error', async () => {
    server.use(rest.get(constants.SUMMARIES_API, (req, res, ctx) => res.once(ctx.status(500))));
    const errorMessage = await screen.findByText(constants.ERROR_MESSAGE);
    expect(errorMessage).toBeInTheDocument();
  });
});
