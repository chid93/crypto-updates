import { useContext } from 'react';
import { Box } from '@mui/material';
import {
  DataGrid,
  GridColDef,
  // GridValueGetterParams
} from '@mui/x-data-grid';
import type {} from '@mui/x-data-grid/themeAugmentation';
import { ISummaryItem, SummaryContextType } from '../../types/models/summary.model';
import { SummaryContext } from '../../contexts/SummaryContext';

function SummaryGrid() {
  const { summaryItems, isLoading } = useContext(SummaryContext) as SummaryContextType;

  const getRowId = (row: ISummaryItem) => row.symbol;

  const columns: GridColDef[] = [
    {
      field: 'symbol',
      headerName: 'Market',
      width: 150,
    },
    {
      field: 'high',
      headerName: '24h High',
      width: 150,
    },
    {
      field: 'low',
      headerName: '24h Low',
      width: 150,
    },
    {
      field: 'percentChange',
      headerName: '24h Change',
      // type: 'number',
      width: 150,
    },
    {
      field: 'quoteVolume',
      headerName: '24h Volume',
      description: 'This column has a value getter and is not sortable.',
      width: 150,
      // valueGetter: (params: GridValueGetterParams) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
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
