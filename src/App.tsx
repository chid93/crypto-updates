import { useMemo, useState } from 'react';
import { SummaryItemsType } from './types/models/summary.model';
import Page from './pages/page';
import SummaryContext from './contexts/SummaryContext';
import './App.css';
import Toast from './components/toast';

function App() {
  const [summaryItems, setSummaryItems] = useState<SummaryItemsType>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

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
      <Page />
    </SummaryContext.Provider>
  );
}

export default App;
