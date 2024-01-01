// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useTranslation } from 'react-i18next';
// import styles from './app.module.scss';

import { Button } from '@asdf/ui';

export function App() {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();

  return (
    <div>
      <Button
        onClick={() => {
          console.log(language);
          language === 'en' ? changeLanguage('nb') : changeLanguage('en');
        }}
      >
        {t('generic_button_text')}
      </Button>
    </div>
  );
}

export default App;
