import styled from 'styled-components';

export const UserCard = styled.div`
  width: 250px;
  background-color: white;
  margin: 16px 0 0 16px;
  //   outline: 2px solid red;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 8px;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 16px;
`;

export const Avatar = styled.img`
  border: 1px solid #afb1b8;
  width: 120px;
  border-radius: 50%;
  //   outline: 1px solid green;
`;

export const Username = styled.p`
  font-size: 26px;
  margin-top: 16px;
  margin-bottom: 0;
`;

export const Tag = styled.p`
  color: grey;
  margin: 8px 0 0 0;
`;

export const Location = styled.p`
  color: grey;
  font-size: 22px;
  margin: 16px 0 0 0;
`;

export const Stats = styled.ul`
  display: flex;
  align-items: center;

  list-style: none;
  justify-content: space-around;
  /* gap: 16px; */
  margin: 0;
  padding: 0;
  background-color: #ebebeb;
  border-radius: 0 0 8px 8px;
`;

export const StatsList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 3);
  height: 80px;
  padding: 8px;
  justify-content: center;
  border: 1px solid #afb1b8;
  &:first-child {
    border-radius: 0 0 0 8px;
  }
  &:last-child {
    border-radius: 0 0 8px 0;
  }
`;

export const Label = styled.span`
  color: grey;
`;

export const Quantity = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-top: 8px;
`;
