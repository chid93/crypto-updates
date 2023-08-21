import { createContext, ReactNode, useMemo, useState } from 'react';
import { SummaryItemsType, SummaryContextType } from '../types/models/summary.model';
import Toast from '../components/toast';

export const SummaryContext = createContext<SummaryContextType | object>({});

export interface ISummaryContextProps {
  children?: ReactNode;
  summaryItems?: SummaryItemsType;
  isLoading?: boolean;
  error?: Error | null;
}

function SummaryContextWrapper({ children, ...props }: ISummaryContextProps) {
  const [summaryItems, setSummaryItems] = useState<SummaryItemsType>(props.summaryItems || []);
  const [isLoading, setIsLoading] = useState<boolean>(props.isLoading || false);
  const [error, setError] = useState<Error | null>(props.error || null);

  const value = useMemo(
    () => ({
      summaryItems,
      setSummaryItems,
      isLoading,
      setIsLoading,
      error,
      setError,
    }),
    [summaryItems, isLoading, error],
  );

  return (
    <SummaryContext.Provider value={value}>
      {error && <Toast severity='error' message={error.message} />}
      {children}
    </SummaryContext.Provider>
  );
}

export default SummaryContextWrapper;
