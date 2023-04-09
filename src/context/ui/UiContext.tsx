import { createContext } from 'react';

interface Props {
  isMenuOpen: boolean;
  toggleSideMenu: VoidFunction;
}

export const UiContext = createContext({} as Props);
