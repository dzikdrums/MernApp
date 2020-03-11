import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AddPost from 'views/AddPostPage';
// import routes
import Home from 'views/HomePage';
import MainLayout from 'components/layout/MainLayout/MainLayout';
import NotFound from 'views/NotFoundPage';
import { Provider } from 'react-redux';
import React from 'react';
import ScrollToTop from 'utils/scrollToTop';
import SinglePost from 'views/SinglePostPage';
import { ThemeProvider } from 'styled-components';
import { routes } from 'routes';
import { store } from 'redux/store';
import { theme } from 'theme/mainTheme';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Switch>
              <Route exact path={routes.home} component={Home} />
              <Route exact path={routes.addPost} component={AddPost} />
              <Route exact path={routes.singlePost} component={SinglePost} />
              <Route component={NotFound} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </ScrollToTop>
    </BrowserRouter>
  </Provider>
);

export default Root;
