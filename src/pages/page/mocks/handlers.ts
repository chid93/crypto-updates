import { rest } from 'msw';
import * as constants from '../../../constants';
import marketSummaries from './api/market_summaries.json';
import ltcBtcSummary from './api/symbol_summary_ltc_btc.json';

const handlers = [
  rest.get(constants.SUMMARIES_API, (req, res, ctx) => res(ctx.json(marketSummaries))),
  rest.get(constants.SUMMARY_API, (req, res, ctx) => res(ctx.json(ltcBtcSummary))),
];

export default handlers;
