import { ContactType } from 'src/services/contacts/contacts.types';

export type ContactsState = {
  contacts: ContactType[];
  isLoading: boolean;
  error: Error | null;
};

export enum ContactsActionTypes {
  getContactsRequest = 'GET_CONTACTS_REQUEST',
  getContactsSuccess = 'GET_CONTACTS_SUCCESS',
  getContactsFailure = 'GET_CONTACTS_FAILURE',
}

export type ContactsActions =
  | { type: ContactsActionTypes.getContactsRequest }
  | { type: ContactsActionTypes.getContactsSuccess; payload: ContactType[] }
  | { type: ContactsActionTypes.getContactsFailure; payload: Error };
