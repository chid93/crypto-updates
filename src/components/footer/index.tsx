import { Box, Container, Typography } from '@mui/material';

function Copyright() {
  return (
    <Typography variant='body2' color='text.secondary'>
      Copyright ©{new Date().getFullYear()}.
    </Typography>
  );
}

function Footer() {
  return (
    <Box
      component='footer'
      data-testid='Footer'
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        textAlign: 'center',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
      }}
    >
      <Container maxWidth='sm'>
        <Copyright />
      </Container>
    </Box>
  );
}

export default Footer;
