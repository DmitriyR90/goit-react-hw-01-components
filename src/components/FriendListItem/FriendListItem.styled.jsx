import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  gap: 8px;
  padding: 8px;
  align-items: center;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
`;

export const Name = styled.p`
  font-weight: bold;
  margin-left: 8px;
`;

export const Status = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;
