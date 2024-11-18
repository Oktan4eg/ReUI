import React from 'react';
import {
  Radio,
  Checkbox,
  GlobalStyle,
  lightTheme,
  darkTheme,
  Spinner,
  Icon,
  Button,
  ButtonWithStateLayer,
  TextInput,
} from './lib';
import { useTheme } from './lib/hooks';
import styled, { ThemeProvider } from 'styled-components';

function App() {
  var switcher = false;

  const { theme, setTheme } = useTheme();

  const handleLightThemeClick = () => {
    setTheme('light');
    switcher = true;
  };
  const handleDarkThemeClick = () => {
    setTheme('dark');
    switcher = false;
  };

  // const themeMode = theme === 'dark' ? darkTheme : lightTheme;
  return (
    <main>
      {/* <ThemeProvider theme={themeMode}> */}
      <ThemeProvider theme={switcher ? darkTheme : lightTheme}>
        {/* <ThemeProvider theme={switcher ? darkTheme : lightTheme}> */}
        <GlobalStyle />
        <div style={{ display: 'flex', gap: '24px', margin: '24px' }}>
          <button onClick={handleLightThemeClick}>Light</button>
          <button onClick={handleDarkThemeClick}>Dark</button>
        </div>
        <div style={{ display: 'flex', gap: '24px', margin: '24px' }}>
          <ButtonWithStateLayer size='md' color='lead' appearance='filled' />
          <ButtonWithStateLayer size='md' color='lead' appearance='outlined' />
          <ButtonWithStateLayer size='md' color='lead' appearance='ghosty' />
          <ButtonWithStateLayer size='md' color='lead' appearance='linked' />
        </div>

        <div style={{ display: 'flex', gap: '24px', margin: '24px' }}>
          <ButtonWithStateLayer size='md' color='info' appearance='filled' />
          <ButtonWithStateLayer size='md' color='info' appearance='outlined' />
          <ButtonWithStateLayer size='md' color='info' appearance='ghosty' />
          <ButtonWithStateLayer size='md' color='info' appearance='linked' />
        </div>
        <div style={{ display: 'flex', gap: '24px', margin: '24px' }}>
          <ButtonWithStateLayer size='md' color='distuctive' appearance='filled' />
          <ButtonWithStateLayer size='md' color='distuctive' appearance='outlined' />
          <ButtonWithStateLayer size='md' color='distuctive' appearance='ghosty' />
          <ButtonWithStateLayer size='md' color='distuctive' appearance='linked' />
        </div>
        <div style={{ display: 'flex', gap: '24px', margin: '24px' }}>
          <Button appearance='filled' size='md' color='lead' />
          <Button appearance='outlined' size='md' color='lead' />
          <Button appearance='tonal' size='md' color='lead' />
          <Button appearance='linked' size='md' color='lead' />
        </div>
        <div style={{ display: 'flex', gap: '24px', margin: '24px' }}>
          <Button appearance='filled' size='sm' label='neutral' color='neutral' />
          <Button appearance='filled' size='sm' label='lead' color='lead' />

          <Button appearance='filled' size='sm' label='distuctive' color='lead' />
          <Checkbox
            name='sdsdsd'
            type='checkbox'
            label='change theme'
            onChange={() =>
              // (switcher === "dark" ? "light" : "dark")

              console.log(switcher)
            }
          />
          <TextInput name='sdsdsd' type='checkbox' label='13' placeholder='hhjhgh' value='vale' />
          <Radio name='sdsdsd' type='radio' label='13' />
          <Radio name='sdsdsd' type='radio' label='13' />
          <Spinner />
          {/* <input type='checkbox' name='sdf' /> */}
        </div>

        {/* <Button appearance="secondary" size="small" /> */}
      </ThemeProvider>
    </main>
  );
}

export default App;
