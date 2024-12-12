import {
  ShowTokens,
  // ShowTokens2,
  Link,
  Text,
  Radio,
  Checkbox,
  GlobalStyle,
  lightTheme,
  darkTheme,
  Button,
  Toggle,
} from '../../lib';
import { useTheme } from '../../lib/hooks';
import { ThemeProvider } from 'styled-components';

import React from 'react';
import { EducationLogo } from '../../lib/components/for-education/education-logo';

function Programm() {
  const { theme, setTheme } = useTheme();

  return (
    <div style={{ display: 'grid', padding: '96px', gap: '96px' }}>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyle />
        {/* <EducationLogo /> */}
        Programms
        <nav style={{ display: 'flex', padding: '96px', gap: '96px' }}>
          <Link href='/'>
            <EducationLogo />
          </Link>
          <Text size={'label'} scale='lg'>
            <Link href='/programmms'>Программы</Link>
          </Text>
          <Text size={'label'} scale='lg'>
            <Link href='/franchise'>Франшиза</Link>
          </Text>
          <Text size={'label'} scale='lg'>
            <Link href='/faq'>Вопросы и ответы</Link>
          </Text>
          <Text size={'label'} scale='lg'>
            <Link href='/contacts'>Контакты</Link>
          </Text>
          <Text size={'label'} scale='lg'>
            <Link href='/courses'>Мои курсы</Link>
          </Text>
        </nav>
        <header
          style={{
            width: '100%',
          }}
        >
          <Text as={'h1'} size={'display'} scale={'xl'} weight={'black'} align={'justify'} font={'display'}>
            Re UI Kit
            <Text inline as={'span'} size={'display'} scale={'xl'} weight={'light'} align={'justify'} font={'display'}>
              {' ' + theme + 'Theme '}
            </Text>
            <span style={{ width: '100%' }} />
            {theme === 'dark' ? '👀 ' : '🌝'}
            <span style={{ width: 'auto', padding: '24px' }}>
              <Toggle
                name={''}
                type={'checkbox'}
                onChange={() => {
                  theme === 'dark' ? setTheme('light') : setTheme('dark');
                }}
              />
            </span>
          </Text>
        </header>
      </ThemeProvider>
    </div>
  );
}

export default Programm;
