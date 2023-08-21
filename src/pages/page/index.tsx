import { Box } from '@mui/material';
import SummaryGrid from '../../components/summary-grid';
import Header from '../../components/header';
import Footer from '../../components/footer';

function Page() {
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
      <SummaryGrid />
      <Footer />
    </Box>
  );
}

export default Page;
