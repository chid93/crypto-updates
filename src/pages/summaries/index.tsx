import { useContext } from 'react';
import { Box } from '@mui/material';
import {
  DataGrid,
  GridColDef,
  // GridValueGetterParams
} from '@mui/x-data-grid';
import type {} from '@mui/x-data-grid/themeAugmentation';
// import Toast from '../../components/toast';
// import * as constants from '../../constants';
import { ISummaryItem, SummaryContextType } from '../../types/models/summary.model';
import SummaryContext from '../../contexts/SummaryContext';

function Summaries() {
  const { summaryItems } = useContext(SummaryContext) as SummaryContextType;
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [isError, setIsError] = useState<boolean>(false);

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
      type: 'number',
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
      {/* {isError && <Toast severity='error' message={constants.ERROR_MESSAGE} />} */}
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
          pageSizeOptions={[20, 50, 100, 500]}
          disableRowSelectionOnClick
          // loading={isLoading}
        />
      </Box>
    </div>
  );
}

export default Summaries;
