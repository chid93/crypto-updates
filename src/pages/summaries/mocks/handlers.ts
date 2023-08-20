import { rest } from 'msw';
import * as constants from '../constants';
import marketSummaries from './api/market_summaries.json';

const handlers = [rest.get(constants.SUMMARIES_API, (req, res, ctx) => res(ctx.json(marketSummaries)))];

export default handlers;
