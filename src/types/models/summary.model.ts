import { GridRowId } from '@mui/x-data-grid';

export interface ISummaryItem {
  symbol: GridRowId;
  high: string;
  low: string;
  volume: string;
  quoteVolume: string;
  percentChange?: string;
  updatedAt: string;
}

export type SummaryItemsType = Array<ISummaryItem>;

export interface SummaryContextType {
  summaryItems: SummaryItemsType;
  setSummaryItems: React.Dispatch<React.SetStateAction<SummaryItemsType>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: Error | null;
  setError: React.Dispatch<React.SetStateAction<Error | null>>;
}
