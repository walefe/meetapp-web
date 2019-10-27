import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  header {
    display: flex;
    justify-content: space-between;

    strong {
      font-size: 30px;
      color: #fff;
    }

    button {
      width: 170px;
      border: 0;
      font-weight: bold;
      border-radius: 4px;
      background: #d44059;
      color: #fff;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.08, '#d44059')};
      }
    }
  }
`;

export const MeetupList = styled.ul`
  max-width: 900px;
  margin: 50px auto;
`;

export const Meetup = styled.li`
  display: flex;
  justify-content: space-between;

  width: 900px;
  height: 50px;
  background: rgba(0, 0, 0, 0.1);

  margin-top: 10px;
  padding: 15px 15px;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;

  span {
    color: rgba(255, 255, 255, 0.7);
  }
`;
