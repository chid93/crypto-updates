import { useContext, useEffect } from 'react';
import { SummaryContext } from '../contexts/SummaryContext';
import { SummaryContextType } from '../types/models/summary.model';
import * as constants from '../constants';

function useFetchSummaryItems(url: URL | string) {
  const { summaryItems, setSummaryItems, isLoading, setIsLoading, error, setError } = useContext(
    SummaryContext,
  ) as SummaryContextType;

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const cancelRequest = () => {
      controller.abort();
    };

    // if url is empty (initial render), return.
    if (!url) return cancelRequest;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url, { signal });
        const json = await response.json();

        // don't update state if request was cancelled
        if (!signal.aborted) {
          if (!response.ok) {
            throw new Error(json?.code || constants.ERROR_MESSAGE);
          }
          setSummaryItems(Array.isArray(json) ? json : [json]);
          setError(null);
          setIsLoading(false);
        }
      } catch (err) {
        // don't update state if request was cancelled
        if (!signal.aborted) {
          setSummaryItems([]);
          setError(err as Error | null);
          setIsLoading(false);
        }
      }
    };
    fetchData();
    return cancelRequest;
  }, [url, setIsLoading, setError, setSummaryItems]);

  return {
    summaryItems,
    isLoading,
    error,
  };
}

export default useFetchSummaryItems;
