import { ThemeProvider } from 'styled-components';
import { Toggle, Button, Text, lightTheme, darkTheme } from './lib';
import React from 'react';

export const UiPreview = () => {
  return (
    <div>
      <div>
        <Text as={'h1'} size={'display'} scale={'xl'} weight={'black'} align={'justify'} font={'display'}>
          Re UI Kit
          {/* <Text inline as={'span'} size={'display'} scale={'xl'} weight={'light'} align={'justify'} font={'display'}>
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
    </span> */}
        </Text>
      </div>
      ;
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
            display: 'flex',
            flexFlow: 'row wrap',
            // gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '24px',
            paddingBlock: '24px',
          }}
        >
          <Button iconStart='checkShieldFill' size='sm' appearance='filled' color='lead' label='Filled' />
          <Button iconStart='componentsFill' size='sm' appearance='filled' color='info' label='Filled' />
          <Button iconStart='checkCircle' size='sm' appearance='filled' color='success' label='Filled' />
          <Button size='sm' appearance='filled' color='warning' label='Filled' />
          <Button size='sm' appearance='filled' color='distuctive' label='Filled' />
          <Button size='sm' appearance='filled' color='neutral' label='Filled' />

          <Button size='sm' appearance='tonal' color='lead' label='Tonal' />
          <Button size='sm' appearance='tonal' color='info' label='Tonal' />
          <Button size='sm' appearance='tonal' color='success' label='Tonal' />
          <Button size='sm' appearance='tonal' color='warning' label='Tonal' />
          <Button size='sm' appearance='tonal' color='distuctive' label='Tonal' />
          <Button size='sm' appearance='tonal' color='neutral' label='Tonal' />

          <Button iconEnd='sun' size='sm' appearance='outlined' color='lead' label='Outlined' />
          <Button iconEnd='sun' size='sm' appearance='outlined' color='info' label='Outlined' />
          <Button iconEnd='sun' size='sm' appearance='outlined' color='success' label='Outlined' />
          <Button size='sm' appearance='outlined' color='warning' label='Outlined' />
          <Button size='sm' appearance='outlined' color='distuctive' label='Outlined' />
          <Button size='sm' appearance='outlined' color='neutral' label='Outlined' />

          <Button size='sm' appearance='linked' color='lead' label='Linked' />
          <Button size='sm' appearance='linked' color='info' label='Linked' />
          <Button size='sm' appearance='linked' color='success' label='Linked' />
          <Button size='sm' appearance='linked' color='warning' label='Linked' />
          <Button size='sm' appearance='linked' color='distuctive' label='Linked' />
          <Button size='sm' appearance='linked' color='neutral' label='Linked' />
        </section>

        {/* <ThemeProvider theme={theme === 'dark' ? lightTheme : darkTheme}>
    <span
      style={
        theme === 'dark'
          ? {
              display: 'flex',
              flexFlow: 'row wrap',

              gap: '24px',
              padding: '24px',
              backgroundColor: '#ffffff',
              borderRadius: '32px',
            }
          : {
              display: 'flex',
              flexFlow: 'row wrap',

              gap: '24px',
              padding: '24px',
              backgroundColor: '#000000',
              borderRadius: '32px',
            }
      }
    >
      <Button size='lg' appearance='filled' color='neutral' label='Filled' />
      <Button size='lg' appearance='tonal' color='neutral' label='Tonal' />
      <Button size='lg' appearance='outlined' color='neutral' label='Outlined' />
      <Button size='lg' appearance='linked' color='neutral' label='Linked' />
      <Button disabled size='lg' appearance='filled' color='neutral' label='Filled' />
      <Button disabled size='lg' appearance='tonal' color='neutral' label='Tonal' />
      <Button disabled size='lg' appearance='outlined' color='neutral' label='Outlined' />
      <Button disabled size='lg' appearance='linked' color='neutral' label='Linked' />
    </span>
  </ThemeProvider> */}
      </section>
      ;
    </div>
  );
};