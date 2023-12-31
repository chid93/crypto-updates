import { render, screen } from '../../utils/test-utils';
import { formatChange } from '../../utils/formatter';
import SummaryGrid from '.';
import marketSummaries from './mocks/api/market_summaries.json';
import marketSummaryLTC from './mocks/api/symbol_summary_ltc_btc.json';
import { providerPropsSummaryItems, providerPropsSummaryLTC } from './mocks/context';
import { ISummaryContextProps } from '../../contexts/SummaryContext';
import { ISummaryItem, SummaryItemsType } from '../../types/models/summary.model';

describe('SummaryGrid', () => {
  const typedMarketSummaries = marketSummaries as SummaryItemsType;
  const typedMarketSummaryLTC = marketSummaryLTC as ISummaryItem;

  test('should display crypto summary items in grid', async () => {
    render(<SummaryGrid />, { providerProps: providerPropsSummaryItems as ISummaryContextProps });
    const regex = new RegExp(typedMarketSummaries[0].symbol.toString().split('-')[0]);
    const symbolText = await screen.findAllByText(regex);
    expect(symbolText[0]).toBeInTheDocument();
  });

  test('should display LTC crypto summary and formatted grid values', async () => {
    render(<SummaryGrid />, { providerProps: providerPropsSummaryLTC as ISummaryContextProps });
    const regex = new RegExp(typedMarketSummaryLTC.symbol.toString().split('-')[0]);
    const symbolText = await screen.findByText(regex);
    expect(symbolText).toBeInTheDocument();

    const formatRegex = new RegExp(formatChange(typedMarketSummaryLTC.percentChange || ''));
    const percentChangeValue = await screen.findByText(formatRegex);
    expect(percentChangeValue).toBeInTheDocument();
  });
});
