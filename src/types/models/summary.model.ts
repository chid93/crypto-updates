import { GridRowId } from '@mui/x-data-grid';

export interface ISummaryItem {
  symbol: GridRowId;
  high: number;
  low: number;
  volume: number;
  quoteVolume: number;
  percentChange: number;
  updatedAt: string;
}

export type SummaryItemsType = Array<ISummaryItem>;

export interface SummaryContextType {
  summaryItems: ISummaryItem[];
  refresh: boolean;
}
