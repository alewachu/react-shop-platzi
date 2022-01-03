import React from 'react';
import { Link } from 'react-router-dom';

import '@styles/NotFound.scss';

const NotFound = () => {
  return (
    <>
      <section className="error-container">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
      </section>
      <div className="link-container">
        <Link to="/" className="more-link">
          Return to Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
