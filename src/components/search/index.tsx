import { useContext, useEffect, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import { InputBase } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import * as constants from '../../constants';
import { SummaryContext } from '../../contexts/SummaryContext';
import { SummaryContextType } from '../../types/models/summary.model';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function SearchInput() {
  const { setSummaryItems, setIsLoading, setError } = useContext(SummaryContext) as SummaryContextType;
  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    let timerId: NodeJS.Timeout;
    const resetTimer = () => clearTimeout(timerId);

    if (searchText.length === 0) {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const url = new URL(constants.SUMMARIES_API);
          const response = await fetch(url);
          const jsonData = await response.json();
          if (!response.ok) {
            throw new Error(jsonData?.code || constants.ERROR_MESSAGE);
          } else {
            setSummaryItems(jsonData);
            setError(null);
          }
        } catch (e) {
          setSummaryItems([]);
          setError(e as Error | null);
        }
        setIsLoading(false);
      };
      fetchData();
    } else {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const url = new URL(constants.SUMMARY_API.replace(constants.MARKET_SYMBOL_PARAM, searchText));
          const response = await fetch(url);
          const jsonData = await response.json();
          if (!response.ok) {
            throw new Error(jsonData?.code || constants.ERROR_MESSAGE);
          } else {
            setSummaryItems([jsonData]);
            setError(null);
          }
        } catch (e) {
          setSummaryItems([]);
          setError(e as Error | null);
        }
        setIsLoading(false);
      };
      timerId = setTimeout(fetchData, constants.DEBOUNCE);
    }

    return resetTimer;
  }, [searchText, setSummaryItems, setIsLoading, setError]);

  const handleChange = (event: React.ChangeEvent) => {
    setSearchText((event.target as HTMLInputElement).value);
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase placeholder='Search…' inputProps={{ 'aria-label': 'search' }} onChange={handleChange} />
    </Search>
  );
}

export default SearchInput;
