import { Dispatch } from 'react';

import { UiActionType } from '@/context';

export const toggleMenu = (dispatch: Dispatch<UiActionType>) =>
  dispatch({ type: '[UI] - ToggleMenu' });
