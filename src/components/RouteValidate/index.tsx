import React from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';
import { useUser } from '../../hooks/user';

interface IRouteProps extends RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const RouteValidate: React.FC<IRouteProps> = ({ isPrivate = false, component: Component, ...rest }: IRouteProps) => {
  const { token } = useUser();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isPrivate === !!token ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default RouteValidate;
