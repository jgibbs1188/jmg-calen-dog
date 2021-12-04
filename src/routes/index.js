import React from 'react';
import { PropTypes } from 'prop-types';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';

export default function Routes({ user }) {
  return <>{user ? <PrivateRoutes user={user} /> : <PublicRoutes />}</>;
}

Routes.propTypes = {
  user: PropTypes.shape({
    isAdmin: PropTypes.bool,
  }),
};

Routes.defaultProps = {
  user: {},
};
