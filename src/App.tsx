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
  // const switcher = false;

  const { theme, setTheme } = useTheme();

  const handleLightThemeClick = () => {
    setTheme('light');
  };
  const handleDarkThemeClick = () => {
    setTheme('dark');
  };

  console.log(theme);
  return (
    <main>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        {/* <ThemeProvider theme={switcher ? darkTheme : lightTheme}> */}
        <GlobalStyle />
        <div style={{ display: 'flex', gap: '24px', margin: '24px' }}>
          <button onClick={handleLightThemeClick}>Light</button>
          <button onClick={handleDarkThemeClick}>Dark</button>
        </div>

        <div style={{ display: 'flex', gap: '24px', margin: '24px' }}>
          <Button appearance='filled' color='lead' label='filled lead' />
          <Button appearance='filled' color='info' label='filled info' />
          <Button appearance='filled' color='success' label='filled success' />
          <Button appearance='filled' color='warning' label='filled warning' />
          <Button appearance='filled' color='distuctive' label='filled distuctive' />
          <Button appearance='filled' color='neutral' label='filled neutral' />
          <Button appearance='filled' color='inverse' label='filled inverse' />
        </div>
        <div style={{ display: 'flex', gap: '24px', margin: '24px' }}>
          <Button appearance='tonal' color='lead' label='tonal lead' />
          <Button appearance='tonal' color='info' label='tonal info' />
          <Button appearance='tonal' color='success' label='tonal success' />
          <Button appearance='tonal' color='warning' label='tonal warning' />
          <Button appearance='tonal' color='distuctive' label='tonal distuctive' />
          <Button appearance='tonal' color='neutral' label='tonal neutral' />
          <Button appearance='tonal' color='inverse' label='tonal inverse' />
        </div>
        <div style={{ display: 'flex', gap: '24px', margin: '24px' }}>
          <Button appearance='outlined' color='lead' label='outlined lead' />
          <Button appearance='outlined' color='info' label='outlined info' />
          <Button appearance='outlined' color='success' label='outlined success' />
          <Button appearance='outlined' color='warning' label='outlined warning' />
          <Button appearance='outlined' color='distuctive' label='outlined distuctive' />
          <Button appearance='outlined' color='neutral' label='outlined neutral' />
          <Button appearance='outlined' color='inverse' label='outlined inverse' />
        </div>
        <div style={{ display: 'flex', gap: '24px', margin: '24px' }}>
          <Button appearance='linked' color='lead' label='linked lead' />
          <Button appearance='linked' color='info' label='linked info' />
          <Button appearance='linked' color='success' label='linked success' />
          <Button appearance='linked' color='warning' label='linked warning' />
          <Button appearance='linked' color='distuctive' label='linked distuctive' />
          <Button appearance='linked' color='neutral' label='linked neutral' />
          <Button appearance='linked' color='inverse' label='linked inverse' />
        </div>
        <div style={{ display: 'flex', gap: '24px', margin: '24px' }}>
          <Checkbox name='sdsdsd' type='checkbox' label='checkbox' />
          <Radio name='sdsdsd' type='radio' label='radio 1' />
          <Radio name='sdsdsd' type='radio' label='radio 2' />

          {/* <input type='checkbox' name='sdf' /> */}
        </div>

        {/* <Button appearance="secondary" size="small" /> */}
      </ThemeProvider>
    </main>
  );
}

export default App;
