import React, { useCallback, FC } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ModalContainer, ContactForm } from 'src/components';
import { PATHS } from 'src/constants';
import { addContact } from 'src/store/contacts';

import { ContactFormValues } from '../ContactForm/ContactForm.types';

import styles from './CreateContactModal.module.scss';
import { CreateContactModalProps } from './CreateContactModal.types';

const CreateContactModal: FC<CreateContactModalProps> = (props) => {
  const { onClose } = props;

  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (values: ContactFormValues) => {
      const id = Date.now();
      dispatch(addContact({ ...values, id }));
      history.push(`${PATHS.contacts}/${id}`);
    },
    [dispatch, history]
  );

  return (
    <ModalContainer onClose={onClose} className={styles.modal}>
      <ContactForm onSubmit={onSubmit} />
    </ModalContainer>
  );
};

export default CreateContactModal;
