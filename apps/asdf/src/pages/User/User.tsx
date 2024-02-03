import styles from './User.module.scss';
import { useContext } from 'react';
import { ApiContext } from '../../providers';
import { UserProps } from './types';

export const User: React.FC<UserProps> = () => {
  const { api } = useContext(ApiContext);
  const user = { ...api?.getUser(), token: '*****' };

  if (api === null) return <p>Loading...</p>;

  return (
    <div className={styles['user-page']} data-testid="user-info-container">
      <pre
        style={{
          wordWrap: 'break-word',
          // whiteSpace: 'break-spaces',
          wordBreak: 'break-all',
          lineHeight: '1.8',
          letterSpacing: '0.01rem',
          margin: 0,
          padding: 0,
        }}
      >
        <code>
          <br />
          {JSON.stringify(user, null, 4)}
          <br />
          <br />
        </code>
      </pre>
    </div>
  );
};
