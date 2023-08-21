import Page from './pages/page';
import SummaryContextWrapper from './contexts/SummaryContext';
import './App.css';

function App() {
  return (
    <SummaryContextWrapper>
      <Page />
    </SummaryContextWrapper>
  );
}

export default App;
