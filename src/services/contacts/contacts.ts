import { AxiosResponse } from 'axios';

import { agent } from 'src/agent';

import { ContactType } from './contacts.types';

export const getContacts = (): Promise<AxiosResponse<ContactType[]>> => {
  return agent.get('/contacts');
};
