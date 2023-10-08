import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

import { PAGE_URL } from '../config';

function GuestRoute({ children }: PropsWithChildren) {
  const token = localStorage.getItem('token');

  if (token) {
    return (
      <Navigate to={PAGE_URL.ROOT} />
    );
  }
  return children;
}

export default GuestRoute;
