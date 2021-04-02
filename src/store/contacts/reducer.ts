import { ContactsActionTypes, ContactsActions, ContactsState } from './types';

const initialState: ContactsState = {
  contacts: [],
  isLoading: true,
  error: null,
};

const contactsReducer = (state = initialState, action: ContactsActions): ContactsState => {
  switch (action.type) {
    case ContactsActionTypes.getContactsSuccess:
      return { ...state, isLoading: false, error: null, contacts: action.payload };

    case ContactsActionTypes.getContactsRequest:
      return { ...state, isLoading: true, error: null };

    case ContactsActionTypes.getContactsFailure:
      return { ...state, isLoading: false, error: action.payload };

    case ContactsActionTypes.addContact:
      return { ...state, contacts: [...state.contacts, action.payload] };

    default:
      return state;
  }
};

export default contactsReducer;
