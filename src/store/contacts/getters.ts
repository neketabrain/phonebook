import { ContactType } from 'src/services/contacts/contacts.types';

import { AppState } from '../types';

import { ContactsState } from './types';

export const getContactsState = (state: AppState): ContactsState => {
  return state.contactsReducer;
};

export const getContactsLoading = (state: AppState): boolean => {
  return state.contactsReducer.isLoading;
};

export const getContactById = (id: number) => (state: AppState): ContactType | undefined => {
  return state.contactsReducer.contacts.find((contact) => contact.id === id);
};
