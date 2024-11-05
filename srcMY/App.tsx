import { lightTheme } from './lib/theme';
import { GlobalStyle } from './lib/theme';
import { ThemeProvider } from 'styled-components';
function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <div>ReUI</div>
      </ThemeProvider>
    </>
  );
}

export default App;
