import React from 'react';
import { Link, Text, Radio, Checkbox, GlobalStyle, lightTheme, darkTheme, Button, Toggle } from './lib';
import { useTheme } from './lib/hooks';
import styled, { ThemeProvider } from 'styled-components';

function App() {
  // pseudo

  const { theme, setTheme } = useTheme();
  // let themeIcon = '🌞';
  console.log(theme);
  return (
    <main style={{ display: 'grid', padding: '96px', gap: '96px' }}>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyle />

        <header
          style={{
            width: '100%',
          }}
        >
          <span // theme toggle
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span style={{ width: '100%' }} />
            {theme === 'dark' ? '👀 ' : ''}
            <span style={{ width: 'auto', padding: '24px' }}>
              <Toggle
                name={''}
                type={'checkbox'}
                onChange={() => {
                  theme === 'dark' ? setTheme('light') : setTheme('dark');
                }}
              />
            </span>
          </span>
          <Text as={'h1'} size={'display'} scale={'xl'} weight={'black'} align={'justify'} font={'display'}>
            Re Kit
            <Text inline as={'span'} size={'display'} scale={'xl'} weight={'light'} align={'justify'} font={'display'}>
              {' ' + theme + 'Theme '}
            </Text>
          </Text>
        </header>

        {/* Buttons */}
        <section>
          <Text as={'h2'} weight={'bold'} size={'heading'} scale={'xl'} align={'left'} font={'display'}>
            Buttons
          </Text>
          <section
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              justifyContent: 'flex-end',
              gap: '24px',
              paddingBlock: '24px',
            }}
          >
            <Button appearance='filled' color='lead' label='filled lead' />
            <Button appearance='filled' color='info' label='filled info' />
            <Button appearance='filled' color='success' label='filled success' />
            <Button appearance='filled' color='warning' label='filled warning' />
            <Button appearance='filled' color='distuctive' label='filled distuctive' />
            <Button appearance='filled' color='neutral' label='filled neutral' />

            <Button appearance='tonal' color='lead' label='tonal lead' />
            <Button appearance='tonal' color='info' label='tonal info' />
            <Button appearance='tonal' color='success' label='tonal success' />
            <Button appearance='tonal' color='warning' label='tonal warning' />
            <Button appearance='tonal' color='distuctive' label='tonal distuctive' />
            <Button appearance='tonal' color='neutral' label='tonal neutral' />

            <Button appearance='outlined' color='lead' label='outlined lead' />
            <Button appearance='outlined' color='info' label='outlined info' />
            <Button appearance='outlined' color='success' label='outlined success' />
            <Button appearance='outlined' color='warning' label='outlined warning' />
            <Button appearance='outlined' color='distuctive' label='outlined distuctive' />
            <Button appearance='outlined' color='neutral' label='outlined neutral' />

            <Button appearance='linked' color='lead' label='linked lead' />
            <Button appearance='linked' color='info' label='linked info' />
            <Button appearance='linked' color='success' label='linked success' />
            <Button appearance='linked' color='warning' label='linked warning' />
            <Button appearance='linked' color='distuctive' label='linked distuctive' />
            <Button appearance='linked' color='neutral' label='linked neutral' />
          </section>
          <Button filled appearance='filled' color='lead' label='linked lead' />
          <span
            style={
              theme === 'dark'
                ? { display: 'flex', gap: '24px', padding: '24px', backgroundColor: '#ffffff', borderRadius: '32px' }
                : { display: 'flex', gap: '24px', padding: '24px', backgroundColor: '#000000', borderRadius: '32px' }
            }
          >
            <Button appearance='filled' color='inverse' label='filled inverse' />
            <Button appearance='tonal' color='inverse' label='tonal inverse' />
            <Button appearance='outlined' color='inverse' label='outlined inverse' />
            <Button appearance='linked' color='inverse' label='linked inverse' />
          </span>
        </section>

        {/* Inputs */}
        <span>
          <Text as={'h2'} weight={'bold'} size={'heading'} scale={'xl'} align={'left'} font={'display'}>
            Inputs
          </Text>
        </span>
        {/* Toggle */}
        <section>
          <Text as={'h3'} weight={'bold'} size={'heading'} scale={'sm'} align={'left'} font={'display'}>
            Toggle
          </Text>

          <span style={{ display: 'flex', gap: '8px', paddingBlock: '24px' }}>
            <Toggle name={''} type={'checkbox'} color='info' />
            <Toggle name={''} type={'checkbox'} color='distuctive' />
            <Toggle name={''} type={'checkbox'} color='success' />
            <Toggle name={''} type={'checkbox'} color='warning' />
            <Toggle name={''} type={'checkbox'} color='inverse' />
            <Toggle name={''} type={'checkbox'} color='neutral' />
          </span>
        </section>
        {/* Checkbox */}
        <section>
          <Text as={'h3'} weight={'bold'} size={'heading'} scale={'sm'} align={'left'} font={'display'}>
            Checkbox
          </Text>
          <section
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              justifyContent: 'flex-end',
              gap: '24px',
              paddingBlock: '24px',
            }}
          >
            <Checkbox name='sdsdsd' type='checkbox' label='checkbox' />
          </section>
        </section>
        {/* Radiobutton */}
        <section>
          <Text as={'h3'} weight={'bold'} size={'heading'} scale={'sm'} align={'left'} font={'display'}>
            Radionbutton
          </Text>
          <section
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              justifyContent: 'flex-end',
              gap: '24px',
              paddingBlock: '24px',
            }}
          >
            <Radio name='sdsdsd' type='radio' label='radio 1' />
            <Radio name='sdsdsd' type='radio' label='radio 2' />
          </section>
        </section>

        {/* Typography */}

        {/* Heading */}
        <section>
          <Text as={'h1'} size={'display'} weight={'black'} scale={'xl'} font={'display'}>
            Typography
          </Text>

          <section
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              justifyContent: 'space-between',
              gap: '96px',
              paddingBlock: '24px',
            }}
          >
            {/* Heading */}
            <section>
              <span style={{ display: 'grid', paddingBlock: '48px' }}>
                <Text as={'h1'} scale={'xl'} align={'left'} font={'body'}>
                  Heading
                </Text>
                Inter
              </span>

              <section style={{ display: 'grid', gap: '48px', gridTemplateColumns: 'repeat(4, 1fr)' }}>
                <section style={{ display: 'grid', gap: '48px' }}>
                  desktop
                  <Text as={'h2'} scale={'xl'} align={'left'} font={'body'}>
                    xl
                  </Text>
                  <Text as={'h2'} scale={'lg'} align={'left'} font={'body'}>
                    lg
                  </Text>
                  <Text as={'h2'} scale={'md'} align={'left'} font={'body'}>
                    md
                  </Text>
                  <Text as={'h2'} scale={'sm'} align={'left'} font={'body'}>
                    sm
                  </Text>
                </section>
                <section style={{ display: 'grid', gap: '48px' }}>
                  laptop
                  <Text as={'h2'} scale={'xl'} align={'left'} font={'body'}>
                    xl
                  </Text>
                  <Text as={'h2'} scale={'lg'} align={'left'} font={'body'}>
                    lg
                  </Text>
                  <Text as={'h2'} scale={'md'} align={'left'} font={'body'}>
                    md
                  </Text>
                  <Text as={'h2'} scale={'sm'} align={'left'} font={'body'}>
                    sm
                  </Text>
                </section>
                <section style={{ display: 'grid', gap: '48px' }}>
                  tablet
                  <Text as={'h2'} scale={'xl'} align={'left'} font={'body'}>
                    xl
                  </Text>
                  <Text as={'h2'} scale={'lg'} align={'left'} font={'body'}>
                    lg
                  </Text>
                  <Text as={'h2'} scale={'md'} align={'left'} font={'body'}>
                    md
                  </Text>
                  <Text as={'h2'} scale={'sm'} align={'left'} font={'body'}>
                    sm
                  </Text>
                </section>
                <section style={{ display: 'grid', gap: '48px' }}>
                  mobile
                  <Text as={'h2'} scale={'xl'} align={'left'} font={'body'}>
                    xl
                  </Text>
                  <Text as={'h2'} scale={'lg'} align={'left'} font={'body'}>
                    lg
                  </Text>
                  <Text as={'h2'} scale={'md'} align={'left'} font={'body'}>
                    md
                  </Text>
                  <Text as={'h2'} scale={'sm'} align={'left'} font={'body'}>
                    sm
                  </Text>
                </section>
              </section>
            </section>
            {/* Display */}
            <section>
              <span style={{ display: 'grid', paddingBlock: '48px' }}>
                <Text as={'h1'} scale={'xl'} align={'left'} font={'display'}>
                  Display
                </Text>
                Roboto Serif
              </span>
              <section style={{ display: 'grid', gap: '48px', gridTemplateColumns: 'repeat(4, 1fr)' }}>
                <section style={{ display: 'grid', gap: '48px' }}>
                  desktop
                  <Text as={'h2'} scale={'xl'} align={'left'} font={'display'}>
                    xl
                  </Text>
                  <Text as={'h2'} scale={'lg'} align={'left'} font={'display'}>
                    lg
                  </Text>
                  <Text as={'h2'} scale={'md'} align={'left'} font={'display'}>
                    md
                  </Text>
                  <Text as={'h2'} scale={'sm'} align={'left'} font={'display'}>
                    sm
                  </Text>
                </section>
                <section style={{ display: 'grid', gap: '48px' }}>
                  laptop
                  <Text as={'h2'} scale={'xl'} align={'left'} font={'display'}>
                    xl
                  </Text>
                  <Text as={'h2'} scale={'lg'} align={'left'} font={'display'}>
                    lg
                  </Text>
                  <Text as={'h2'} scale={'md'} align={'left'} font={'display'}>
                    md
                  </Text>
                  <Text as={'h2'} scale={'sm'} align={'left'} font={'display'}>
                    sm
                  </Text>
                </section>
                <section style={{ display: 'grid', gap: '48px' }}>
                  tablet
                  <Text as={'h2'} scale={'xl'} align={'left'} font={'display'}>
                    xl
                  </Text>
                  <Text as={'h2'} scale={'lg'} align={'left'} font={'display'}>
                    lg
                  </Text>
                  <Text as={'h2'} scale={'md'} align={'left'} font={'display'}>
                    md
                  </Text>
                  <Text as={'h2'} scale={'sm'} align={'left'} font={'display'}>
                    sm
                  </Text>
                </section>
                <section style={{ display: 'grid', gap: '48px' }}>
                  mobile
                  <Text as={'h2'} scale={'xl'} align={'left'} font={'display'}>
                    xl
                  </Text>
                  <Text as={'h2'} scale={'lg'} align={'left'} font={'display'}>
                    lg
                  </Text>
                  <Text as={'h2'} scale={'md'} align={'left'} font={'display'}>
                    md
                  </Text>
                  <Text as={'h2'} scale={'sm'} align={'left'} font={'display'}>
                    sm
                  </Text>
                </section>
              </section>
            </section>

            {/* Body */}
            <section>
              <span style={{ display: 'grid', paddingBlock: '48px' }}>
                <Text as={'h1'} scale={'xl'} align={'left'} font={'body'}>
                  Body
                </Text>
                Inter
              </span>
              <section style={{ display: 'grid', gap: '96px' }}>
                for all breackpoints
                <Text as={'h2'} scale={'xl'} align={'left'} font={'body'}>
                  xl
                </Text>
                <Text as={'h2'} scale={'lg'} align={'left'} font={'body'}>
                  lg
                </Text>
                <Text as={'h2'} scale={'md'} align={'left'} font={'body'}>
                  md
                </Text>
                <Text as={'h2'} scale={'sm'} align={'left'} font={'body'}>
                  sm
                </Text>
              </section>
            </section>
            {/* Monospace */}
            <section>
              <span style={{ display: 'grid', paddingBlock: '48px' }}>
                <Text as={'h1'} scale={'xl'} align={'left'} font={'monospace'}>
                  Monospace
                </Text>
                monospace
              </span>
              <section style={{ display: 'grid', gap: '96px' }}>
                for all breackpoints
                <Text as={'h2'} scale={'xl'} align={'left'} font={'monospace'}>
                  xl
                </Text>
                <Text as={'h2'} scale={'lg'} align={'left'} font={'monospace'}>
                  lg
                </Text>
                <Text as={'h2'} scale={'md'} align={'left'} font={'monospace'}>
                  md
                </Text>
                <Text as={'h2'} scale={'sm'} align={'left'} font={'monospace'}>
                  sm
                </Text>
              </section>
            </section>
          </section>
        </section>

        {/* <Button appearance="secondary" size="small" /> */}
      </ThemeProvider>
    </main>
  );
}

export default App;
