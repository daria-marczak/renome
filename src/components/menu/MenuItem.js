import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const MenuItem = ({ dish, photo }) => {
  return (
    <Fragment>
      <p>{dish.name}</p>
      {photo && <Img fluid={photo.node.childImageSharp.fluid} />}
    </Fragment>
  );
};

MenuItem.propTypes = {
  dish: PropTypes.objectOf(PropTypes.string).isRequired,
  photo: PropTypes.shape().isRequired,
};

export default MenuItem;
