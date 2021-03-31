import { ContactType } from 'src/services/contacts/contacts.types';

export const sortContacts = (contacts: ContactType[]): ContactType[] => {
  return contacts.sort((a, b) => a.lastName.localeCompare(b.lastName));
};
