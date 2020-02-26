import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPostRequest } from 'redux/postsRedux';
import Input from 'components/common/Input/Input';
import Form from 'components/features/Form/Form';
import Button from 'components/common/Button/Button';

const PostAdd = () => {
  const [state, setState] = useState({
    post: {
      author: '',
      title: '',
      text: '',
    },
  });

  const { post } = state;

  const handleChange = e => {
    setState({ post: { ...post, [e.target.name]: e.target.value } });
  };

  const handleSubmit = e => {
    setState({ post: { ...post } });

    addPostRequest(post);
    e.preventDefault();
    setState({ post: { author: '', title: '', text: '' } });
  };

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
};
const mapDispatchToProps = dispatch => ({
  addPostRequest: post => dispatch(addPostRequest(post)),
});

export default connect(null, mapDispatchToProps)(PostAdd);
