import { useReducer } from 'react';

import { UiContext, uiReducer } from './';
import { toggleMenu } from '@/services';

interface Props {
  children: React.ReactNode;
}

export interface UiState {
  isMenuOpen: boolean;
}

const INITIAL_STATE: UiState = {
  isMenuOpen: false,
};

export const UiProvider = ({ children }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(uiReducer, INITIAL_STATE);

  const toggleSideMenu =  () => toggleMenu(dispatch);

  return (
    <UiContext.Provider
      value={{
        ...state,
        toggleSideMenu
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
