import { useContext } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { green, grey, red } from '@mui/material/colors';
import { ArrowDownward as ArrowDownwardIcon, ArrowUpward as ArrowUpwardIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { formatChange, formatCurrency, formatHighLow } from '../../utils/formatter';
import { ISummaryItem, SummaryContextType } from '../../types/models/summary.model';
import { SummaryContext } from '../../contexts/SummaryContext';

const Percentage = styled(Typography)(() => ({
  display: 'flex',
  alignItems: 'center',
  fontSize: '14px',
}));

function SummaryGrid() {
  const { summaryItems, isLoading } = useContext(SummaryContext) as SummaryContextType;

  const getRowId = (row: ISummaryItem) => row.symbol;

  const columns: GridColDef[] = [
    {
      field: 'symbol',
      headerName: 'Market',
      width: 150,
      type: 'string',
      renderCell: ({ value }) => {
        const [name, market] = value.split('-');
        return (
          <>
            {name}
            <Avatar sx={{ bgcolor: grey[500], fontSize: '14px', marginLeft: '4px' }} variant='square'>
              {market}
            </Avatar>
          </>
        );
      },
    },
    {
      field: 'high',
      headerName: '24h High',
      width: 150,
      type: 'number',
      renderCell: ({ row, value }) => formatHighLow({ row, value }),
    },
    {
      field: 'low',
      headerName: '24h Low',
      width: 150,
      type: 'number',
      renderCell: ({ row, value }) => formatHighLow({ row, value }),
    },
    {
      field: 'percentChange',
      headerName: '24h Change',
      width: 150,
      type: 'number',
      valueGetter: (params) => {
        if (!params.value) {
          return 0;
        }
        return params.value;
      },
      renderCell: ({ value }) => {
        const color = (value > 0 && green[500]) || (value < 0 && red[500]) || grey[500];
        return (
          <Percentage color={color}>
            {formatChange(value)}
            {value > 0 && <ArrowUpwardIcon fontSize='small' />}
            {value < 0 && <ArrowDownwardIcon fontSize='small' />}
          </Percentage>
        );
      },
    },
    {
      field: 'quoteVolume',
      headerName: '24h Volume',
      width: 150,
      type: 'number',
      valueFormatter: ({ value }) => formatCurrency(value),
    },
  ];

  return (
    <div data-testid='SummaryItems'>
      <Box sx={{ height: '80vh', width: '100%' }}>
        <DataGrid
          getRowId={getRowId}
          rows={summaryItems}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 20,
              },
            },
          }}
          pageSizeOptions={[20, 50, 100]}
          disableRowSelectionOnClick
          loading={isLoading}
        />
      </Box>
    </div>
  );
}

export default SummaryGrid;
