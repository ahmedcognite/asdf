import styles from './app.module.scss';
// import { useTranslation } from 'react-i18next';
import { ApiProvider } from './providers';
import { Posts } from './components';
import { QueryClientProvider } from './providers/ReactQueryProvider';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthGuard } from './components/AuthGuard/AuthGuard';
import { Login } from './pages/Login/Login';
import { Logout } from './pages/Logout/Logout';
import { User } from './pages/User/User';

export function App() {
  // const {
  //   t,
  //   i18n: { changeLanguage, language },
  // } = useTranslation();

  return (
    <ApiProvider>
      <QueryClientProvider>
        <BrowserRouter basename="/">
          <div className={styles['app-container']}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Posts />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/logout"
                element={
                  <AuthGuard redirectTo="/">
                    <Logout />
                  </AuthGuard>
                }
              />
              <Route
                path="/user"
                element={
                  <AuthGuard redirectTo="/">
                    <User />
                  </AuthGuard>
                }
              />
            </Routes>
            <Routes></Routes>
          </div>
        </BrowserRouter>
      </QueryClientProvider>
    </ApiProvider>
  );
}

export default App;
