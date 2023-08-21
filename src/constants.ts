const BASE_URL_BITTREX_MARKETS = 'http://localhost:3000/v3/markets';

export const SUMMARIES_API = `${BASE_URL_BITTREX_MARKETS}/summaries`;

export const MARKET_SYMBOL_PARAM = '{marketSymbol}';
export const SUMMARY_API = `${BASE_URL_BITTREX_MARKETS}/${MARKET_SYMBOL_PARAM}/summary`;
export const DEBOUNCE = 500;

export const ERROR_MESSAGE = 'Something went wrong, please try again.';
export const MARKET_DOES_NOT_EXIST_CODE = 'MARKET_DOES_NOT_EXIST';
export const MARKET_DOES_NOT_EXIST_ERROR_MESSAGE = 'Unable to find the crypto currency.';
