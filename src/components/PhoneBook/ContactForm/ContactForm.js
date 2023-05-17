import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import {
  FormField,
  Form,
  ErrorMessage,
  Button,
  Field,
} from './ContactForm.styled';
import * as Yup from 'yup';

const ContactsSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .trim()
    .required('Required'),
  number: Yup.string()
    .trim()
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'Only digits, spaces "-" and "()"'
    )
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const ContactForm = ({ onContactAdd }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={ContactsSchema}
      onSubmit={(values, { resetForm }) => {
        onContactAdd({ ...values, id: nanoid() });
        resetForm();
      }}
    >
      <Form>
        <FormField>
          Name
          <ErrorMessage name="name" component="span" />
          <Field
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormField>
        <FormField>
          Number
          <ErrorMessage name="number" component="span" />
          <Field
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormField>
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};
