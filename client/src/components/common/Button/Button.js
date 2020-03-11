import styled, { css } from 'styled-components';

const Button = styled.button`
  color: ${({ theme }) => theme.grey400};
  margin: 20px 5px;
  width: 220px;
  height: 47px;
  border: 1px solid ${({ theme }) => theme.yellow};
  border-radius: 50px;
  font-size: ${({ theme }) => theme.fontSize.s};
  text-transform: uppercase;
  letter-spacing: 4px;
  outline: none;
  cursor: pointer;
  transition: background-color 0.5s ease;
  display: inline-block;
  text-decoration: none;
  background-color: white;
  padding-top: 14px;
  text-align: center;

  :hover {
    background-color: ${({ theme }) => theme.yellow};
  }

  ${({ primary }) =>
    primary &&
    css`
      padding-top: 0;
    `}

  ${({ posted }) =>
    posted &&
    css`
      background-color: ${({ theme }) => theme.yellow};
      cursor: default;
    `}
`;

export default Button;
