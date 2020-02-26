import React from 'react';
import styled from 'styled-components';
import Link from 'components/common/Link/Link';

const StyledWrapper = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 1000px;
  height: 100px;
  background-color: ${({ theme }) => theme.yellow};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 30px;
  z-index: 9999;
`;

const StyledLinksList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`;

const NavBar = () => (
  <StyledWrapper>
    <StyledLinksList>
      <li>
        <Link exact to="/" activeclass="active">
          home
        </Link>
      </li>
      npm a
      <li>
        <Link exact to="/posts/new" activeclass="active">
          add post
        </Link>
      </li>
      <li>
        <Link exact to="/" activeclass="active">
          login
        </Link>
      </li>
    </StyledLinksList>
  </StyledWrapper>
);

export default NavBar;
