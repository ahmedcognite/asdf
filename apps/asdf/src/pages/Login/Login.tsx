import styles from './Login.module.scss';
import { useContext, useEffect, useState } from 'react';
import { ApiContext } from '../../providers';
import { LoginProps } from './types';
import { Button } from '@asdf/ui';
import { useNavigate } from 'react-router-dom';

export const Login: React.FC<LoginProps> = () => {
  const { api } = useContext(ApiContext);
  const navigate = useNavigate();
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (api !== null && api.getUser() !== null) navigate('/');
  }, [api, navigate]);

  if (api === null) return <p>Loading...</p>;

  return (
    <div className={styles['login-page']}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (isAuthenticating || api === null) return;
          setIsAuthenticating(true);

          api
            .login({
              username: e.currentTarget.username.value,
              password: e.currentTarget.password.value,
            })
            .then((user) => {
              if (user !== null) navigate('/');
            })
            .catch((err) => {
              setError(err.message);
            })
            .finally(() => {
              setIsAuthenticating(false);
            });
        }}
      >
        <h2>Login</h2>
        <p>
          <pre style={{ padding: 0 }}>
            Username: kminchelle
            <br />
            Password: 0lelplR
          </pre>
        </p>
        <label>
          Username
          <input
            type="text"
            name="username"
            style={{ display: 'block', width: '100%' }}
            defaultValue={'kminchelle'}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            style={{ display: 'block', width: '100%' }}
            defaultValue={'0lelplR'}
          />
        </label>
        <Button type="submit" fullWidth disabled={isAuthenticating}>
          {isAuthenticating ? 'Logging in...' : 'Login'}
        </Button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};
