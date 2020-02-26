import React from 'react';
import PropTypes from 'prop-types';
import SinglePost from 'components/features/SinglePost/SinglePost';

const SinglePostPage = ({ match }) => {
  return <SinglePost id={match.params.id} />;
};

SinglePostPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default SinglePostPage;
