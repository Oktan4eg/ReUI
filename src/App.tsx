import React from 'react';
import { GlobalStyle } from './lib/theme';
import { lightTheme, darkTheme } from './lib';
import { Icon, Button } from './lib';
import { Placeholder } from './lib';
import { ThemeProvider } from 'styled-components';
// import { useMediaQueryMantine } from './lib/hooks';
// import { MediaTest } from './lib/components/mediaTest';

function App() {
  const switcher = true;
  //   const matches = useMediaQueryMantine('(min-width: 600)');
  //   const matches = useMatchMedia();

  return (
    // <ThemeProvider theme={switcher ? darkTheme : lightTheme}>
    <main>
      {/* <MediaTest /> */}
      {/* <Placeholder text={matches + ' matches' + window.innerWidth} /> */}

      <ThemeProvider theme={switcher ? darkTheme : lightTheme}>
        <GlobalStyle />

        <div style={{ display: 'flex', gap: '24px', margin: '24px' }}>
          <Button appearance='filled' size='md' />
          <Button appearance='outlined' size='md' />
        </div>
        <div style={{ display: 'flex', gap: '24px', margin: '24px' }}>
          <Button appearance='filled' size='sm' label='Я кнопка' />
          <Button appearance='outlined' size='sm' />
        </div>
        {/* <Button appearance="secondary" size="small" /> */}
      </ThemeProvider>
    </main>
  );
}

export default App;
