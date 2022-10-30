import styled from 'styled-components';
import { Form as FormFor } from 'formik';

export const LabelInput = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Form = styled(FormFor)`
  width: 300px;
  border: 1px solid;
  padding: ${p => p.theme.space[4]}px;
`;
