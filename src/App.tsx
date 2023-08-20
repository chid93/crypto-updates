import './App.css';
import Summaries from './pages/summaries';
import Header from './components/header';

function App() {
  return (
    <div className='App' data-testid='App'>
      <Header />
      <Summaries />
    </div>
  );
}

export default App;
