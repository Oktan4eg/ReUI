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

function App() {
  const { theme, setTheme } = useTheme();

  return (
    <main style={{ display: 'grid', padding: '96px', gap: '96px' }}>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyle />
      </ThemeProvider>
    </main>
  );
}

export default App;
