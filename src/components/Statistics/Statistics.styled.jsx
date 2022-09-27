import styled from 'styled-components';

export const Section = styled.section`
  margin-top: 16px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  width: 250px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
`;

export const StatTitle = styled.h2`
  text-align: center;
  vertical-align: middle;
  margin: 0;
  padding: 16px 0;
  color: grey;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  background-color: ${getRandomHexColor};
  width: calc(100% / 4);
  align-items: center;
`;

export const Label = styled.span`
  color: #fff;
  font-size: 12px;
  filter: drop-shadow(0 0 2px black);
`;

export const Percent = styled.span`
  color: #fff;
  font-size: 18px;
  filter: drop-shadow(0 0 2px black);
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
