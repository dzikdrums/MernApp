import styled, { css } from 'styled-components';

const Button = styled.button`
  color: ${({ theme }) => theme.grey400};
  margin: 20px auto;
  width: 220px;
  height: 47px;
  border: 1px solid ${({ theme }) => theme.yellow};
  border-radius: 50px;
  font-size: ${({ theme }) => theme.fontSize.s};
  text-transform: uppercase;
  letter-spacing: 4px;
  outline: none;

  ${({ NavLink }) =>
    NavLink &&
    css`
      display: inline-block;
      font-size: ${({ theme }) => theme.fontSize.xs};
      cursor: pointer;
      text-decoration: none;
      padding-top: 16px;
      text-align: center;
    `}
`;

export default Button;
