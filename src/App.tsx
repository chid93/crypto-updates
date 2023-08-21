import Page from './pages/page';
import SummaryContextWrapper from './contexts/SummaryContext';
import './App.css';

function App() {
  return (
    <div data-testId='App'>
      <SummaryContextWrapper>
        <Page />
      </SummaryContextWrapper>
    </div>
  );
}

export default App;
