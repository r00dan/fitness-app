import type { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

import { auth } from '../../main';
import { Locations } from './Router';

interface IPrivateRouteProps {
  element: JSX.Element;
}

export function PrivateRoute({
  element,
}: IPrivateRouteProps): ReactElement {
  return auth.currentUser ? element : <Navigate to={Locations.ROOT}/>
}
