import { Dispatch } from 'react';

import { getContacts } from 'src/services';
import { ContactType } from 'src/services/contacts/contacts.types';

import { ContactsActions, ContactsActionTypes } from './types';

export const setContacts = (data: ContactType[]): ContactsActions => ({
  type: ContactsActionTypes.getContactsSuccess,
  payload: data,
});

export const getContactsRequest = (): ContactsActions => ({
  type: ContactsActionTypes.getContactsRequest,
});

export const getContactsFailure = (error: Error): ContactsActions => ({
  type: ContactsActionTypes.getContactsFailure,
  payload: error,
});

export const getContactsAction = () => async (dispatch: Dispatch<ContactsActions>): Promise<void> => {
  dispatch(getContactsRequest());
  try {
    const { data } = await getContacts();
    dispatch(setContacts(data));
  } catch (error) {
    dispatch(getContactsFailure(error));
  }
};

export const addContact = (data: ContactType): ContactsActions => ({
  type: ContactsActionTypes.addContact,
  payload: data,
});
