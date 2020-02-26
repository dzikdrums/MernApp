import React from 'react';
import PropTypes from 'prop-types';
import Post from 'components/common/Post/Post';
import { getPosts } from 'redux/postsRedux';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostsList = ({ posts }) => (
  /* eslint-disable */
  <StyledWrapper>
    {posts.map(({ _id, title, text, author }) => (
      <Post key={_id} id={_id} title={title} text={text} author={author} />
    ))}
  </StyledWrapper>
  /* eslint-enable */
);

PostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  posts: getPosts(state),
});

export default connect(mapStateToProps)(PostsList);
