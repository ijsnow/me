import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const LinkHeader = ({href, children}) => (
  <h3 className="LinkHeader">
    <a href={href}>{children}</a>
  </h3>
);

LinkHeader.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default LinkHeader;