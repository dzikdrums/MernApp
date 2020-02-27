import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Link from 'components/common/Link/Link';
import Button from 'components/common/Button/Button';
import { isLoged, changeLoged } from 'redux/postsRedux';

const StyledWrapper = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 1000px;
  height: 100px;
  background-color: ${({ theme }) => theme.yellow};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  z-index: 9999;
`;

const StyledLinksList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`;

const NavBar = ({ loged, changeLoged }) => {
  const handleButton = () => {
    changeLoged();
  };

  return (
    <StyledWrapper>
      <Button onClick={() => handleButton()} primary>
        login toggle
      </Button>
      <StyledLinksList>
        <li>
          <Link exact to="/" activeclass="active">
            home
          </Link>
        </li>
        {loged && (
          <li>
            <Link exact to="/posts/new" activeclass="active">
              add post
            </Link>
          </li>
        )}
        {loged || (
          <li>
            <Link as="a" href="http://localhost:8000/auth/google">
              login
            </Link>
          </li>
        )}
      </StyledLinksList>
    </StyledWrapper>
  );
};

const mapStateToProps = state => ({
  loged: isLoged(state),
});

const mapDispatchToProps = dispatch => ({
  changeLoged: () => dispatch(changeLoged()),
});

NavBar.propTypes = {
  loged: PropTypes.bool.isRequired,
  changeLoged: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
