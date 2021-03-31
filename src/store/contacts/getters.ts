import { AppState } from '../types';

import { ContactsState } from './types';

export const getContactsState = (state: AppState): ContactsState => {
  return state.contactsReducer;
};
