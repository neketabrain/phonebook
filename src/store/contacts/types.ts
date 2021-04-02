import { ContactFormValues } from 'src/components/ContactForm/ContactForm.types';
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
  addContact = 'ADD_CONTACT',
  deleteContact = 'DELETE_CONTACT',
  editContact = 'EDIT_CONTACT',
}

export type ContactsActions =
  | { type: ContactsActionTypes.getContactsRequest }
  | { type: ContactsActionTypes.getContactsSuccess; payload: ContactType[] }
  | { type: ContactsActionTypes.getContactsFailure; payload: Error }
  | { type: ContactsActionTypes.addContact; payload: ContactType }
  | { type: ContactsActionTypes.deleteContact; payload: number }
  | { type: ContactsActionTypes.editContact; payload: { id: number; contact: ContactFormValues } };
