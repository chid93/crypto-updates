import marketSummaries from './api/market_summaries.json';
import marketSummaryLTC from './api/symbol_summary_ltc_btc.json';

export const providerPropsSummaryItems = {
  summaryItems: marketSummaries,
};

export const providerPropsSummaryLTC = {
  summaryItems: [marketSummaryLTC],
};
