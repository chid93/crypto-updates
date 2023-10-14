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
      minWidth: 120,
      maxWidth: 120,
      flex: 1,
      type: 'string',
      renderCell: ({ value }) => {
        const [name, market] = value.split('-');
        return (
          <>
            <div 
              style={{flexGrow: 1}}
            >{name}</div>
            <Avatar sx={{ 
              bgcolor: grey[500], 
              fontSize: '14px', 
              // marginLeft: 'auto' 
            }} variant='square'>
              {market}
            </Avatar>
          </>
        );
      },
    },
    {
      field: 'high',
      headerName: '24h High',
      minWidth: 140,
      flex: 1,
      type: 'number',
      renderCell: ({ row, value }) => formatHighLow({ row, value }),
    },
    {
      field: 'low',
      headerName: '24h Low',
      minWidth: 140,
      flex: 1,
      type: 'number',
      renderCell: ({ row, value }) => formatHighLow({ row, value }),
    },
    {
      field: 'percentChange',
      headerName: '24h Change',
      minWidth: 140,
      flex: 1,
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
      minWidth: 140,
      flex: 1,
      type: 'number',
      valueFormatter: ({ value }) => formatCurrency(value),
    },
  ];

  return (
    <Box sx={{ height: '50vh', width: '100%' }} flex='auto' data-testid='SummaryItems'>
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
  );
}

export default SummaryGrid;
