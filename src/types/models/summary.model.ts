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
  summaryItems: SummaryItemsType;
  setSummaryItems: React.Dispatch<React.SetStateAction<SummaryItemsType>>;
  // isLoading: boolean;
  // setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
