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

function FAQ() {
  const { theme, setTheme } = useTheme();

  return (
    <main style={{ display: 'grid', padding: '64px 96px 96px 96px', gap: '96px' }}>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyle />
        {/* <EducationLogo /> */}
        {/* <Header /> */}

        <header
          style={{
            width: '100%',
          }}
        >
          <Text as={'h1'} size={'display'} scale={'xl'} weight={'black'} align={'justify'} font={'display'}>
            Franchise
          </Text>
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
    </main>
  );
}

export default FAQ;
