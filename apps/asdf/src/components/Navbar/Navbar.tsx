import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import { AuthGuard } from '../AuthGuard/AuthGuard';
import { ApiContext } from '../../providers';
import { useContext } from 'react';

export const Navbar: React.FC = () => {
  const { api } = useContext(ApiContext);

  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <AuthGuard fallback={<Link to={'/login'}>Login</Link>}>
            <Link to={'/user'}>User</Link>
          </AuthGuard>
        </li>
        <li>
          <AuthGuard>
            <Link to={'/logout'}>Logout</Link>
          </AuthGuard>
        </li>
      </ul>
    </nav>
  );
};
