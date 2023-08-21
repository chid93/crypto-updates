const CRYPTO_CURRENCIES: { [key: string]: string } = {
  BTC: '₿',
  ETH: 'Ξ',
  EUR: '€',
  USD: '$',
  USDT: '₮',
};

export const formatChange = (value: string) => `${(Number.parseFloat(value) || 0).toFixed(2)}%`;

export const formatCurrency = (value: string) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number(value) || 0);

export const formatHighLow = ({ row, value }: { row: { symbol: string }; value: string }) =>
  `${CRYPTO_CURRENCIES[row.symbol.split('-')[1]] || ''}${new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 8,
    maximumFractionDigits: 8,
  }).format(Number(value) || 0)}`;
