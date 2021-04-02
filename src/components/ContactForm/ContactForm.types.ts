import { ContactType } from 'src/services/contacts/contacts.types';

export type ContactFormValues = Omit<ContactType, 'id'>;

export type ContactFormProps = {
  onSubmit: (values: ContactFormValues) => void;
  defaultValues?: Partial<ContactFormValues>;
};

export type ContactFormErrors = Partial<Record<keyof ContactType, string>>;
