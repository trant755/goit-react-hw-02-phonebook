import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h2`
  margin-bottom: ${p => p.theme.space[4]}px;
`;

const SectionSC = styled.section`
  padding: ${p => p.theme.space[3]}px;
`;

export const Section = ({ title, children }) => {
  return (
    <SectionSC>
      <Title>{title}</Title>
      {children}
    </SectionSC>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
