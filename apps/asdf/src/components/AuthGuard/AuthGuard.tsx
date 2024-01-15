import { useNavigate } from 'react-router-dom';
import { ApiContext } from '../../providers';
import { PropsWithChildren, useContext, useEffect } from 'react';

export type AuthGuardProps = PropsWithChildren & {
  redirectTo?: string;
  fallback?: React.ReactNode;
};

export const AuthGuard: React.FC<AuthGuardProps> = ({
  children,
  redirectTo,
  fallback,
}) => {
  const { api } = useContext(ApiContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (api !== null && api.getUser() === null && redirectTo !== undefined)
      navigate(redirectTo);
  }, [api, navigate, redirectTo]);

  if (api !== null && api.getUser() === null && fallback) return fallback;

  if (api !== null && api.getUser() === null) return null;

  return children;
};
