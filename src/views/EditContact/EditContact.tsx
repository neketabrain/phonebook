import React, { useCallback, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { ContactForm, LoaderBlock, ReturnLink } from 'src/components';
import { ContactFormValues } from 'src/components/ContactForm/ContactForm.types';
import { PATHS } from 'src/constants';
import { getContactById, getContactsLoading, editContact } from 'src/store/contacts';
import { RouterIdParam } from 'src/types';

import styles from './EditContact.module.scss';

const EditContact: FC = () => {
  const { id } = useParams<RouterIdParam>();
  const history = useHistory();

  const isLoading = useSelector(getContactsLoading);
  const contact = useSelector(getContactById(Number(id)));
  const dispatch = useDispatch();

  const updateContact = useCallback(
    (values: ContactFormValues) => {
      if (contact?.id) {
        dispatch(editContact(contact.id, values));
        history.push(`${PATHS.contacts}/${contact.id}`);
      }
    },
    [history, dispatch, contact]
  );

  return (
    <div className={styles.container}>
      {isLoading && <LoaderBlock />}

      <ReturnLink className={styles.return} />
      <ContactForm onSubmit={updateContact} defaultValues={contact} buttonLabel="Сохранить" />
    </div>
  );
};

export default EditContact;
