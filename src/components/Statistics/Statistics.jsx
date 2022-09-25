import {
  Section,
  StatTitle,
  StatList,
  Item,
  Label,
  Percent,
} from './Statistics.styled';

export const Statistics = ({ data, title = '' }) => {
  return (
    <Section>
      {title.length > 0 && <StatTitle>{title}</StatTitle>}
      <StatList>
        {data.map(data => (
          <Item key={data.id}>
            <Label>{data.label}</Label>
            <Percent>{data.percentage} </Percent>
          </Item>
        ))}
      </StatList>
    </Section>
  );
};
