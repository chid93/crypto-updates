import './App.css';
import { Box } from '@mui/material';
import Summaries from './pages/summaries';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <Box
      data-testid='App'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />
      <Summaries />
      <Footer />
    </Box>
  );
}

export default App;
