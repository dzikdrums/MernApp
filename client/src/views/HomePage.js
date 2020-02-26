import React, { useEffect } from 'react';
import PostsList from 'components/features/PostsList/PostsList';
import PropTypes from 'prop-types';
import { loadPostsRequest } from 'redux/postsRedux';
import { connect } from 'react-redux';

const HomePage = ({ loadPostsRequest }) => {
  useEffect(() => {
    loadPostsRequest();
  });

  return <PostsList />;
};

HomePage.propTypes = {
  loadPostsRequest: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  loadPostsRequest: () => dispatch(loadPostsRequest()),
});

export default connect(null, mapDispatchToProps)(HomePage);
