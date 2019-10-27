import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #191620;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      height: 32px;
      width: 32px;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }

  button {
    width: 71px;
    border: 0;
    margin-left: 15px;
    border-radius: 4px;
    background: #d44059;
    color: #fff;
    font-weight: bold;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, '#d44059')};
    }
  }
`;
