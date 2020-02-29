import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { addPostRequest } from 'redux/postsRedux';
import Input from 'components/common/Input/Input';
import Form from 'components/features/Form/Form';
import Button from 'components/common/Button/Button';

const ButtonWrapper = styled.div`
  padding-top: 70px;
  display: flex;
  justify-content: center;
`;

const PostAdd = ({ addPostRequest }) => {
  const [state, setState] = useState({
    post: {
      author: '',
      title: '',
      text: '',
    },
    posted: false,
  });

  const { post, posted } = state;

  const handleChange = e => {
    setState({ posted: false, post: { ...post, [e.target.name]: e.target.value } });
  };

  const handleSubmit = e => {
    setState({ post: { ...post } });

    addPostRequest(post);
    e.preventDefault();
    setState({ post: { author: '', title: '', text: '' }, posted: true });
  };

  if (posted === false) {
    return (
      <Form onSubmit={handleSubmit}>
        <Input
          name="author"
          label="Author"
          type="text"
          placeholder="author"
          required
          value={post.author}
          onChange={handleChange}
        />
        <Input
          name="title"
          label="Title"
          type="text"
          placeholder="title"
          required
          value={post.title}
          onChange={handleChange}
        />

        <Input
          as="textarea"
          name="text"
          label="Text"
          type="text"
          placeholder="text"
          required
          textarea
          value={post.text}
          onChange={handleChange}
        />
        <Button primary type="submit">
          add post
        </Button>
      </Form>
    );
  }
  return (
    <ButtonWrapper>
      <Button primary posted>
        posted!
      </Button>
    </ButtonWrapper>
  );
};

PostAdd.propTypes = {
  addPostRequest: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  addPostRequest: post => dispatch(addPostRequest(post)),
});

export default connect(null, mapDispatchToProps)(PostAdd);
