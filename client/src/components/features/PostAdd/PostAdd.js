import React from 'react';
import { connect } from 'react-redux';
import { addPostRequest } from 'redux/postsRedux';
import Input from 'components/common/Input/Input';
import Form from 'components/features/Form/Form';
import Button from 'components/common/Button/Button';

class PostAdd extends React.Component {
  state = {
    post: {
      author: '',
      title: '',
      text: '',
    },
  };

  handleChange = e => {
    const { post } = this.state;
    this.setState({ post: { ...post, [e.target.name]: e.target.value } });
  };

  handleSubmit = e => {
    const { post } = this.state;
    this.setState({ post: { ...post } });

    addPostRequest(post);
    e.preventDefault();
    this.setState({ post: { author: '', title: '', text: '' } });
  };

  render() {
    const { post } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          name="author"
          label="Author"
          type="text"
          placeholder="author"
          required
          value={post.author}
          onChange={this.handleChange}
        />
        <Input
          name="title"
          label="Title"
          type="text"
          placeholder="title"
          required
          value={post.title}
          onChange={this.handleChange}
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
          onChange={this.handleChange}
        />
        <Button type="submit">add post</Button>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addPostRequest: post => dispatch(addPostRequest(post)),
});

export default connect(null, mapDispatchToProps)(PostAdd);
