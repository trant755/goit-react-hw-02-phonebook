import { Formik, Field } from 'formik';
import * as SC from './Phonebook.styled';

export const Filter = ({ onChange, filter }) => (
  <Formik>
    <SC.LabelInput>
      Find contacts by name
      <Field
        type="text"
        name="filter"
        onChange={onChange}
        value={filter}
      ></Field>
    </SC.LabelInput>
  </Formik>
);
