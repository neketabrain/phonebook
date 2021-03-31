import { ContactType } from 'src/services/contacts/contacts.types';

export const MOCK_DATA: ContactType[] = Array(10)
  .fill(null)
  .map((_, idx) => ({
    id: idx,
    firstName: '',
    lastName: '',
    middleName: '',
    phone: '',
  }));
