import { useState } from 'react';
import { Alert, Snackbar, AlertColor } from '@mui/material';

interface ToastProps {
  severity: AlertColor;
  message: string;
}

function Toast({ severity, message }: ToastProps) {
  const [open, setOpen] = useState(true);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default Toast;
