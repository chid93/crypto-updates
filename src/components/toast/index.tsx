import { useState } from 'react';
import { Alert, Snackbar, AlertColor } from '@mui/material';
import * as constants from '../../constants';

interface ToastProps {
  severity: AlertColor;
  message?: string;
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
    <Snackbar
      open={open}
      autoHideDuration={constants.TIMEOUT_AUTO_HIDE_DURATION}
      onClose={handleClose}
      data-testid='Toast'
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {message === constants.MARKET_DOES_NOT_EXIST_CODE
          ? constants.MARKET_DOES_NOT_EXIST_ERROR_MESSAGE
          : constants.ERROR_MESSAGE}
      </Alert>
    </Snackbar>
  );
}

export default Toast;
