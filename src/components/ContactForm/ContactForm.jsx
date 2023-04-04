import { Formik, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/actions';
import { Field, Button } from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    dispatch(addContact(form.elements.text.value));
    form.reset();
  };

  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
      <Form>
        <label>
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" />
        </label>
        <label>
          Number
          <Field type="tel" name="number" />
          <ErrorMessage name="number" />
        </label>
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};
