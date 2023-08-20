import { useMemo, useState } from 'react';
import { SummaryItemsType } from './types/models/summary.model';
import './App.css';
import Page from './pages/page';
import SummaryContext from './contexts/SummaryContext';

function App() {
  const [summaryItems, setSummaryItems] = useState<SummaryItemsType>([]);

  const value = useMemo(
    () => ({
      summaryItems,
      setSummaryItems,
    }),
    [summaryItems],
  );

  return (
    <SummaryContext.Provider value={value}>
      <Page />
    </SummaryContext.Provider>
  );
}

export default App;
