import React from 'react';
import PostsList from 'components/features/PostsList/PostsList';
import PropTypes from 'prop-types';
import { loadPostsRequest } from 'redux/postsRedux';
import { connect } from 'react-redux';

class HomePage extends React.Component {
  componentDidMount() {
    const { loadPostsRequest } = this.props;
    loadPostsRequest();
  }

  render() {
    return <PostsList />;
  }
}

HomePage.propTypes = {
  loadPostsRequest: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  loadPostsRequest: () => dispatch(loadPostsRequest()),
});

export default connect(null, mapDispatchToProps)(HomePage);
