import React from 'react';
import Post from 'components/common/Post/Post';
import getPosts from 'redux/postsRedux';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostsList = ({ posts }) => (
  <StyledWrapper>
    {posts.posts.data.map(({ _id, title, content, author }) => (
      <Post key={_id} id={_id} title={title} content={content} author={author} />
    ))}
  </StyledWrapper>
);

const mapStateToProps = state => ({
  posts: getPosts(state),
});

export default connect(mapStateToProps)(PostsList);
