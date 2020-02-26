import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loadSinglePostRequest, getSinglePost } from 'redux/postsRedux';
import Button from 'components/common/Button/Button';

const StyledWrapper = styled.div`
  width: 100%;
  padding-top: 20px;
  display: flex;
  justify-content: center;
`;

const InnerWrapper = styled.div`
  width: 50%;
`;

const StyledTitle = styled.h1`
  font-weight: ${({ theme }) => theme.light};
  font-size: ${({ theme }) => theme.fontSize.xl};
  letter-spacing: 1px;
`;

const StyledAuthor = styled.p`
  color: ${({ theme }) => theme.grey400};
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const StyledContent = styled.p`
  color: ${({ theme }) => theme.black};
  font-size: ${({ theme }) => theme.fontSize.m};
  letter-spacing: 1px;
`;

class SinglePost extends React.Component {
  componentDidMount() {
    const { loadSinglePostRequest, match } = this.props;
    /* eslint-disable */
    loadSinglePostRequest(match.params.id);
    /* eslint-enable */
  }

  render() {
    const {
      post: { title, author, text },
    } = this.props;

    return (
      <StyledWrapper>
        <InnerWrapper>
          <StyledTitle>{title}</StyledTitle>
          <StyledAuthor>{author}</StyledAuthor>
          <StyledContent>{text}</StyledContent>
          <Button as={NavLink} NavLink to="/">
            go back
          </Button>
        </InnerWrapper>
      </StyledWrapper>
    );
  }
}

SinglePost.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    text: PropTypes.string,
  }),
  title: PropTypes.string,
  author: PropTypes.string,
  text: PropTypes.string,
  loadSinglePostRequest: PropTypes.func.isRequired,
  match: PropTypes.element,
};

const mapStateToProps = state => ({
  post: getSinglePost(state),
});

const mapDispatchToProps = dispatch => ({
  loadSinglePostRequest: id => dispatch(loadSinglePostRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
