import React, { FC } from 'react';

import styles from './ContactInfo.module.scss';
import { ContactInfoProps } from './ContactInfo.types';

const ContactInfo: FC<ContactInfoProps> = (props) => {
  const { avatar, phone, email, middleName, firstName, lastName } = props.contact || {};

  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>{!!avatar && <img src={avatar} alt="Аватар" />}</div>

      <div>
        <div className={styles.row}>
          <p className={styles.label}>Фамилия</p>
          <p className={styles.value}>{lastName}</p>
        </div>

        <div className={styles.row}>
          <p className={styles.label}>Имя</p>
          <p className={styles.value}>{firstName}</p>
        </div>

        <div className={styles.row}>
          <p className={styles.label}>Отчество</p>
          <p className={styles.value}>{middleName}</p>
        </div>

        <div className={styles.row}>
          <p className={styles.label}>Телефон</p>
          <p className={styles.value}>{phone}</p>
        </div>

        <div className={styles.row}>
          <p className={styles.label}>Email</p>
          <p className={styles.value}>{email}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
