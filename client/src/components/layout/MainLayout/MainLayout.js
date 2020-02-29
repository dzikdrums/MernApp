import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import GlobalStyle from 'theme/GlobalStyle';

import NavBar from 'components/features/NavBar/NavBar';

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 100vh;
  margin: 0 auto;
`;

const MainLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <StyledWrapper>
      <NavBar />
      {children}
    </StyledWrapper>
  </ThemeProvider>
);

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
