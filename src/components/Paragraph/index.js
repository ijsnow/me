import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Paragraph = ({children}) => (
  <p className="Paragraph">
    <span>&nbsp;~>&nbsp;</span>
    {children}
  </p>
);

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Paragraph;