import React from 'react';
import PropTypes from 'prop-types';
import Post from 'components/common/Post/Post';
import { getPosts } from 'redux/postsRedux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Spinner from 'components/common/Spinner/Spinner';
import { getRequest } from '../../../redux/postsRedux';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
`;

const PostsList = ({ posts, loading }) => {
  if (loading.pending === false && loading.success === true) {
    return (
      <StyledWrapper>
        {posts.map(({ _id, title, text, author }) => (
          <Post key={_id} id={_id} title={title} text={text} author={author} />
        ))}
      </StyledWrapper>
    );
  }
  return (
    <SpinnerWrapper>
      <Spinner />
    </SpinnerWrapper>
  );
};

PostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.shape({
    pending: PropTypes.bool,
    success: PropTypes.bool,
  }),
};

const mapStateToProps = state => ({
  posts: getPosts(state),
  loading: getRequest(state),
});

export default connect(mapStateToProps)(PostsList);
