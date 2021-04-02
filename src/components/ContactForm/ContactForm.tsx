import React, { FC } from 'react';
import { Form, Field } from 'react-final-form';

import { Input, Button } from 'src/components';

import styles from './ContactForm.module.scss';
import { ContactFormProps } from './ContactForm.types';
import { validate } from './ContactForm.utils';

const ContactForm: FC<ContactFormProps> = (props) => {
  const { defaultValues, onSubmit } = props;

  return (
    <Form
      initialValues={defaultValues}
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <Field
              name="lastName"
              render={({ input, meta }) => (
                <Input label="Фамилия *" className={styles.rowInput} error={!!meta.touched && meta.error} {...input} />
              )}
            />
            <Field
              name="firstName"
              render={({ input, meta }) => (
                <Input label="Имя *" className={styles.rowInput} error={!!meta.touched && meta.error} {...input} />
              )}
            />
            <Field
              name="middleName"
              render={({ input, meta }) => (
                <Input label="Отчество *" className={styles.rowInput} error={!!meta.touched && meta.error} {...input} />
              )}
            />
          </div>

          <div className={styles.row}>
            <Field
              name="phone"
              render={({ input, meta }) => (
                <Input
                  label="Телефон *"
                  className={styles.rowInput}
                  type="phone"
                  error={!!meta.touched && meta.error}
                  {...input}
                />
              )}
            />
            <Field
              name="email"
              render={({ input, meta }) => (
                <Input
                  label="Email"
                  className={styles.rowInput}
                  error={!!meta.touched && meta.error}
                  type="email"
                  {...input}
                />
              )}
            />
          </div>

          <Field
            name="avatar"
            render={({ input, meta }) => (
              <Input
                label="Ссылка на фотографию"
                className={styles.input}
                error={!!meta.touched && meta.error}
                {...input}
              />
            )}
          />

          <Button className={styles.button}>Создать</Button>
        </form>
      )}
    />
  );
};

export default ContactForm;
