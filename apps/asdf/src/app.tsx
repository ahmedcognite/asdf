import styles from './app.module.scss';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useTranslation } from 'react-i18next';
// import styles from './app.module.scss';

import { Button } from '@asdf/ui';
import { ApiProvider } from './providers';
import { Posts } from './components';
import { QueryClientProvider } from './providers/ReactQueryProvider';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthGuard } from './components/AuthGuard/AuthGuard';

export function App() {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();

  return (
    <ApiProvider>
      <QueryClientProvider>
        <BrowserRouter basename="/">
          <div className={styles['app-container']}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Posts />} />
              <Route
                path="/user"
                element={
                  <AuthGuard redirectTo="/">
                    <div>User</div>
                  </AuthGuard>
                }
              />
            </Routes>
          </div>
        </BrowserRouter>
      </QueryClientProvider>
    </ApiProvider>
  );
}

export default App;
