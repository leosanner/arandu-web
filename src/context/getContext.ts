import { useContext } from 'react';
import { DateContext } from './DateContext';

export function GetContext() {
  return useContext(DateContext);
}
