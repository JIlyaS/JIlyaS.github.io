import { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { AuthContext } from '@src/providers/auth/AuthContext';

export const PrivateRoutes = () => {
  const location = useLocation();
  const isLoggedIn = useContext(AuthContext);

  if (isLoggedIn === undefined) {
    return null;
  }

  return isLoggedIn ? <Outlet /> : <Navigate to="/auth" replace state={{ from: location }} />;
};
