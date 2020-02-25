import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

import MainLayout from 'components/layout/MainLayout/MainLayout';
import { routes } from 'routes';
import ScrollToTop from 'utils/scrollToTop';

// import routes
import Home from 'views/HomePage';
import AddPost from 'views/AddPostPage';
import SinglePost from 'views/SinglePostPage';
import NotFound from 'views/NotFoundPage';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <MainLayout>
          <Switch>
            <Route exact path={routes.home} component={Home} />
            <Route exact path={routes.addPost} component={AddPost} />
            <Route exact path={routes.singlePost} component={SinglePost} />
            <Route component={NotFound} />
          </Switch>
        </MainLayout>
      </ScrollToTop>
    </BrowserRouter>
  </Provider>
);

export default Root;
