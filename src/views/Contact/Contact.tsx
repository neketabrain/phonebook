import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';

import { LoaderBlock, ReturnLink, ContactInfo, LinkButton, Button } from 'src/components';
import { PATHS } from 'src/constants';
import { getContactById, getContactsLoading } from 'src/store/contacts';
import { RouterIdParam } from 'src/types';

import styles from './Contact.module.scss';

const Contact: FC = () => {
  const { id } = useParams<RouterIdParam>();
  const isLoading = useSelector(getContactsLoading);
  const contact = useSelector(getContactById(Number(id)));

  if (!isLoading && !contact) {
    return <Redirect to={PATHS.contacts} />;
  }

  return (
    <div className={styles.container}>
      {isLoading && <LoaderBlock />}

      <ReturnLink className={styles.return} />
      <ContactInfo contact={contact} />

      <div className={styles.buttons}>
        <Button variant="secondary">Удалить</Button>
        <LinkButton to={`${PATHS.contacts}/${contact?.id}/edit`}>Редактировать</LinkButton>
      </div>
    </div>
  );
};

export default Contact;
