import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import SearchInput from '../search';

function Header() {
  return (
    <Box component='header' data-testid='Header'>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' noWrap component='div' sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            Crypto Market Updates
          </Typography>
          <SearchInput />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
