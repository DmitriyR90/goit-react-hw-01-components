import PropTypes from 'prop-types';
import {
  Section,
  StatTitle,
  StatList,
  Item,
  Label,
  Percent,
} from './Statistics.styled';

export const Statistics = ({ data, title }) => {
  return (
    <Section>
      {title && <StatTitle>{title}</StatTitle>}
      <StatList>
        {data.map(({ id, label, percentage }) => (
          <Item key={id}>
            <Label>{label}</Label>
            <Percent>{percentage} </Percent>
          </Item>
        ))}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};
