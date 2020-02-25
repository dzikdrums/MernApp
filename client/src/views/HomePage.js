import React from 'react';
import PostsList from 'components/features/PostsList/PostsList';
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

const mapDispatchToProps = dispatch => ({
  loadPostsRequest: () => dispatch(loadPostsRequest()),
});

export default connect(null, mapDispatchToProps)(HomePage);
