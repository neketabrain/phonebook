import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';

import { LoaderBlock, ReturnLink, ContactInfo, LinkButton } from 'src/components';
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
      <LinkButton className={styles.edit} to={`${PATHS.contacts}/${contact?.id}/edit`}>
        Редактировать
      </LinkButton>
    </div>
  );
};

export default Contact;
