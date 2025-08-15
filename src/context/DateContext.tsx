'use client';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

type ContextType = {
  state: number;
  setState: Dispatch<SetStateAction<number>>;
};

const initialState: ContextType = {
  state: 0,
  setState: () => {},
};

type DateContextProviderProps = {
  children: ReactNode;
};

export const DateContext = createContext<ContextType>(initialState);

export function DateContextProvider({ children }: DateContextProviderProps) {
  const [state, setState] = useState(0);

  return (
    <DateContext.Provider value={{ state, setState }}>
      {children}
    </DateContext.Provider>
  );
}
