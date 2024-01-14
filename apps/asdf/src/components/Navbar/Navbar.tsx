import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import { AuthGuard } from '../AuthGuard/AuthGuard';

export const Navbar: React.FC = () => {
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
      </ul>
    </nav>
  );
};
