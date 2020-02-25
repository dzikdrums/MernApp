import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Link = styled(NavLink)`
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  margin: 0 20px;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.grey400};
  font-weight: ${({ theme }) => theme.light};

  &.active {
    color: ${({ theme }) => theme.black};
    border-bottom: 0.5px solid ${({ theme }) => theme.black};
  }
`;

export default Link;
