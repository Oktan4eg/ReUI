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
} from './lib';
import { useTheme } from './lib/hooks';
import { ThemeProvider } from 'styled-components';
import { palette, sizes, font } from './lib/theme/tokensMY';
import { EducationLogo } from './lib/components/for-education/education-logo';
import React from 'react';

function Programms() {
  const { theme, setTheme } = useTheme();

  return (
    <div style={{ display: 'flex', padding: '96px', gap: '96px' }}>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyle />
        {/* <EducationLogo /> */}
        <nav>
          программы
          {/* <Text size={'label'} scale='lg' children={'Программы'} />
          <Text size={'label'} scale='lg' children={'Франшиза'} />
          <Text size={'label'} scale='lg' children={'Вопросы и ответы'} />
          <Text size={'label'} scale='lg' children={'Контакты'} />
          <Text size={'label'} scale='lg' children={'Мои курсы'} /> */}
        </nav>
      </ThemeProvider>
    </div>
  );
}

export default Programms;
