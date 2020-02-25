import styled, { css } from 'styled-components';

const Input = styled.input`
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.black};
  margin: 20px 0;
  border-radius: 50px;
  max-width: 400px;
  outline: none;

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 2px;
    align-items: center;
  }

  ${({ textarea }) =>
    textarea &&
    css`
      resize: none;
      padding: 25px 15px;
    `}
`;

export default Input;
