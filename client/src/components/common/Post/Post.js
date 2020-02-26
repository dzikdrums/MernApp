import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from 'components/common/Button/Button';

const StyledWrapper = styled.div`
  width: 600px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 50px;
  overflow: hidden;
  margin: 10px auto;
  text-align: center;

  &:hover {
    transition: all 0.3s ease-in-out;
    transform: scale(1.02);
  }
`;

const InnerWrapper = styled.div`
  width: 100%;
  padding: 1.5vw 0 0.5vw 0;
  bottom-border-radius: 50px;
  background-color: ${({ theme }) => theme.yellow};
`;

const StyledTitle = styled.h1`
  font-weight: ${({ theme }) => theme.light};
  font-size: ${({ theme }) => theme.fontSize.l};
`;

const StyledAuthor = styled.p`
  color: ${({ theme }) => theme.grey400};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledButton = styled(Button)`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.xs};
  text-decoration: none;
  padding-top: 16px;
`;

const Post = ({ title, author, id }) => (
  <StyledWrapper>
    <InnerWrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledAuthor>{author}</StyledAuthor>
    </InnerWrapper>
    <StyledButton as={NavLink} to={`/posts/${id}`}>
      Read more
    </StyledButton>
  </StyledWrapper>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Post;
