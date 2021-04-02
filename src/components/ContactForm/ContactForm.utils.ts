import { ContactType } from 'src/services/contacts/contacts.types';

import { ContactFormErrors } from './ContactForm.types';

export const validate = (values: ContactType): ContactFormErrors => {
  const errors: ContactFormErrors = {};

  if (!values.firstName) {
    errors.firstName = 'Обязательное поле';
  }

  if (!values.lastName) {
    errors.lastName = 'Обязательное поле';
  }

  if (!values.middleName) {
    errors.middleName = 'Обязательное поле';
  }

  if (!values.phone) {
    errors.phone = 'Обязательное поле';
  }

  return errors;
};
