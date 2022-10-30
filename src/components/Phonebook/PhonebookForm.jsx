import { Formik, Field } from 'formik';
import * as SC from './Phonebook.styled';

export const ContactForm = ({ onSubmit }) => (
  <Formik
    initialValues={{
      name: '',
      number: '',
    }}
    onSubmit={onSubmit}
  >
    <SC.Form>
      <SC.LabelInput>
        Name
        <Field
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        ></Field>
      </SC.LabelInput>
      <SC.LabelInput>
        Number
        <Field
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        ></Field>
      </SC.LabelInput>
      <button type="submit">Add contact</button>
    </SC.Form>
  </Formik>
);
