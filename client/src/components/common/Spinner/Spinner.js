import PropTypes from 'prop-types';
import { PulseLoader } from 'react-spinners';
import React from 'react';
import { css } from '@emotion/core';

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Spinner = ({ loading }) => (
  <div className="sweet-loading">
    <PulseLoader css={override} size={15} color="#333" loading={loading} />
  </div>
);

Spinner.propTypes = {
  loading: PropTypes.bool,
};

export default Spinner;
