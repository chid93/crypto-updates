import { createContext } from 'react';
import { SummaryContextType } from '../types/models/summary.model';

const SummaryContext = createContext<SummaryContextType | object>({});
export default SummaryContext;
