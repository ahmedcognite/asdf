import styles from './app.module.scss';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useTranslation } from 'react-i18next';
// import styles from './app.module.scss';

import { Button } from '@asdf/ui';
import { ApiProvider } from './providers';
import { Posts } from './components';
import { QueryClientProvider } from './providers/ReactQueryProvider';

export function App() {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();

  return (
    <ApiProvider>
      <div className={styles['app-container']}>
        <Button
          onClick={() =>
            language === 'en' ? changeLanguage('nb') : changeLanguage('en')
          }
        >
          {t('generic_button_text')}
        </Button>
        <QueryClientProvider>
          <Posts />
        </QueryClientProvider>
      </div>
    </ApiProvider>
  );
}

export default App;
