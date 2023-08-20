import { useEffect, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import { InputBase } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import * as constants from '../../constants';
import { ISummaryItem } from '../../types/models/summary.model';

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
  const [cryptoSummary, setCryptoSummary] = useState<ISummaryItem>();
  const [searchText, setSearchText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    setIsLoading(true);

    let timerId: NodeJS.Timeout;
    const resetTimer = () => clearTimeout(timerId);

    if (searchText.length === 0) {
      // refreshMarketSummaries();
      return resetTimer;
    }

    const fetchData = async () => {
      try {
        const url = new URL(constants.SUMMARY_API.replace(constants.MARKET_SYMBOL_PARAM, searchText));
        const response = await fetch(url);
        const jsonData = await response.json();
        setCryptoSummary(jsonData);
      } catch (e) {
        setIsError(true);
        setErrorMessage((e as Error).message);
      }
      setIsLoading(false);
    };

    timerId = setTimeout(fetchData, constants.DEBOUNCE);
    return resetTimer;
  }, [searchText]);

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
