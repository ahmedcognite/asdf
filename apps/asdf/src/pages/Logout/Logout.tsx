import styles from './Logout.module.scss';
import { useContext, useEffect } from 'react';
import { ApiContext } from '../../providers';
import { LogoutProps } from './types';
import { useNavigate } from 'react-router-dom';

export const Logout: React.FC<LogoutProps> = () => {
  const { api } = useContext(ApiContext);
  const navigate = useNavigate();

  useEffect(() => {
    api?.logout();
    navigate('/');
  }, [api, navigate]);

  if (api === null) return <p>Loading...</p>;

  return (
    <div className={styles['logout-page']}>
      <p>Logging out...</p>
    </div>
  );
};
