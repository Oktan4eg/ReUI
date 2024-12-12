import {
  // ShowTokens,
  // ShowTokens2,
  // Link,
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
// import { palette, sizes, font } from './lib/theme/tokensMY';

function App2() {
  const { theme, setTheme } = useTheme();

  return (
    <main style={{ display: 'grid', padding: '96px', gap: '96px' }}>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyle />
        {/* <ShowTokens2 /> */}
        {/* <ShowTokens /> */}
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

        {/* Buttons */}
        <section>
          <Text as={'h2'} weight={'bold'} size={'heading'} scale={'xl'} align={'left'} font={'display'}>
            Buttons
          </Text>

          <Button disabled size='sm' appearance='filled' color='neutral' label='Filled' />
          <Button disabled size='sm' appearance='tonal' color='neutral' label='Tonal' />
          <Button disabled size='sm' appearance='outlined' color='neutral' label='Outlined' />
          <Button disabled size='sm' appearance='linked' color='neutral' label='Linked' />
          <section
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              gap: '24px',
              paddingBlock: '24px',
            }}
          >
            <Button iconStart='checkShieldFill' size='lg' appearance='filled' color='lead' label='Filled' />
            <Button iconStart='componentsFill' size='md' appearance='filled' color='info' label='Filled' />
            <Button iconStart='checkCircle' size='sm' appearance='filled' color='success' label='Filled' />
            <Button size='lg' appearance='filled' color='warning' label='Filled' />
            <Button size='md' appearance='filled' color='distuctive' label='Filled' />
            <Button size='sm' appearance='filled' color='neutral' label='Filled' />

            <Button size='lg' appearance='tonal' color='lead' label='Tonal' />
            <Button size='md' appearance='tonal' color='info' label='Tonal' />
            <Button size='sm' appearance='tonal' color='success' label='Tonal' />
            <Button size='lg' appearance='tonal' color='warning' label='Tonal' />
            <Button size='md' appearance='tonal' color='distuctive' label='Tonal' />
            <Button size='sm' appearance='tonal' color='neutral' label='Tonal' />

            <Button iconEnd='sun' size='lg' appearance='outlined' color='lead' label='Outlined' />
            <Button iconEnd='sun' size='md' appearance='outlined' color='info' label='Outlined' />
            <Button iconEnd='sun' size='sm' appearance='outlined' color='success' label='Outlined' />
            <Button size='lg' appearance='outlined' color='warning' label='Outlined' />
            <Button size='md' appearance='outlined' color='distuctive' label='Outlined' />
            <Button size='sm' appearance='outlined' color='neutral' label='Outlined' />

            <Button size='lg' appearance='linked' color='lead' label='Linked' />
            <Button size='md' appearance='linked' color='info' label='Linked' />
            <Button size='sm' appearance='linked' color='success' label='Linked' />
            <Button size='lg' appearance='linked' color='warning' label='Linked' />
            <Button size='md' appearance='linked' color='distuctive' label='Linked' />
            <Button size='sm' appearance='linked' color='neutral' label='Linked' />
          </section>

          <span
            style={
              theme === 'dark'
                ? { display: 'flex', gap: '24px', padding: '24px', backgroundColor: '#ffffff', borderRadius: '32px' }
                : { display: 'flex', gap: '24px', padding: '24px', backgroundColor: '#000000', borderRadius: '32px' }
            }
          >
            <Button appearance='filled' color='inverse' label='Filled' />
            <Button appearance='tonal' color='inverse' label='Tonal' />
            <Button appearance='outlined' color='inverse' label='Outlined' />
            <Button appearance='linked' color='inverse' label='Linked' />
            <Button disabled size='sm' appearance='filled' color='inverse' label='Filled' />
            <Button disabled size='sm' appearance='tonal' color='inverse' label='Tonal' />
            <Button disabled size='sm' appearance='outlined' color='inverse' label='Outlined' />
            <Button disabled size='sm' appearance='linked' color='inverse' label='Linked' />
          </span>
          <ThemeProvider theme={theme === 'dark' ? lightTheme : darkTheme}>
            <span
              style={
                theme === 'dark'
                  ? { display: 'flex', gap: '24px', padding: '24px', backgroundColor: '#ffffff', borderRadius: '32px' }
                  : { display: 'flex', gap: '24px', padding: '24px', backgroundColor: '#000000', borderRadius: '32px' }
              }
            >
              <Button appearance='filled' color='neutral' label='Filled' />
              <Button appearance='tonal' color='neutral' label='Tonal' />
              <Button appearance='outlined' color='neutral' label='Outlined' />
              <Button appearance='linked' color='neutral' label='Linked' />
              <Button disabled size='sm' appearance='filled' color='neutral' label='Filled' />
              <Button disabled size='sm' appearance='tonal' color='neutral' label='Tonal' />
              <Button disabled size='sm' appearance='outlined' color='neutral' label='Outlined' />
              <Button disabled size='sm' appearance='linked' color='neutral' label='Linked' />
            </span>
          </ThemeProvider>
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
            <Toggle label='as radio' name={'1'} type={'radio'} color='info' />
            <Toggle label='as radio' name={'1'} type={'radio'} color='distuctive' />
            <Toggle label='as radio' name={'1'} type={'radio'} color='success' />
            <Toggle label='as checkbox' name={''} type={'checkbox'} color='warning' />
            <Toggle label='as checkbox' name={''} type={'checkbox'} color='neutral' />
            <span
              style={
                theme === 'dark'
                  ? { display: 'flex', gap: '24px', padding: '24px', backgroundColor: '#ffffff', borderRadius: '32px' }
                  : { display: 'flex', gap: '24px', padding: '24px', backgroundColor: '#000000', borderRadius: '32px' }
              }
            >
              <Toggle label='as checkbox' name={''} type={'checkbox'} color='inverse' />
              <Toggle label='as checkbox' name={''} type={'checkbox'} color='inverse' />
            </span>
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
            <Checkbox checked disabled color='lead' name='sdsdsd' type='checkbox' label='Checkbox' />
            <Checkbox disabled color='distuctive' name='sdsdsd' type='checkbox' label='Checkbox' />
            <Checkbox color='info' name='sdsdsd' type='checkbox' label='Checkbox' />
            <Checkbox color='success' name='sdsdsd' type='checkbox' label='Checkbox' />
            <Checkbox color='warning' name='sdsdsd' type='checkbox' label='Checkbox' />
            <Checkbox color='neutral' name='sdsdsd' type='checkbox' label='Checkbox' />
          </section>
          <span
            style={
              theme === 'dark'
                ? { display: 'flex', gap: '24px', padding: '24px', backgroundColor: '#ffffff', borderRadius: '32px' }
                : { display: 'flex', gap: '24px', padding: '24px', backgroundColor: '#000000', borderRadius: '32px' }
            }
          >
            <Checkbox disabled color='inverse' name='sdsdsd' type='checkbox' label='Checkbox' />
            <Checkbox disabled checked color='inverse' name='sdsdsd' type='checkbox' label='Checkbox' />
            <Checkbox color='inverse' name='sdsdsd' type='checkbox' label='Checkbox' />
            <Checkbox checked color='inverse' name='sdsdsd' type='checkbox' label='Checkbox' />
          </span>
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
            {/* <Radio checked name='sdsdsd' type='radio' label='radio 2' /> */}
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

        {/* Colors */}
        <section>
          <Text as={'h2'} weight={'bold'} size={'heading'} scale={'xl'} align={'left'} font={'display'}>
            Colors
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
            {}
            <div style={{ backgroundColor: 'black' }}></div>
          </section>
        </section>

        {/* <Button appearance="secondary" size="small" /> */}
      </ThemeProvider>
    </main>
  );
}

export default App2;
