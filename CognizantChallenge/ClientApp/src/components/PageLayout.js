import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';

const PageLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container m-auto px-4 pt-8 lg:pt-14 pb-5">{children}</div>
    </>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;
