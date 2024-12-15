import { GlobalStyle, lightTheme, darkTheme, Toggle, Button } from './lib';
import { Header } from './header/NavBarHeader.tsx';

import { useTheme } from './lib/hooks';
import { ThemeProvider } from 'styled-components';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HeroBanner } from './hero-banner/hero-banner.tsx';
import { NavBarMenu2 } from './header/nav/NavBarMenu2.tsx';
import { NavBarMenu } from './header/nav/NavBarMenu.tsx';
import { NavBarLink } from './header/nav/menu-item/NavBarLink.tsx';

const items = [
  { id: '1', route: '/programms', name: 'Программы' },
  { id: '2', route: '/franchise', name: 'Франшиза' },
  { id: '3', route: '/faq', name: 'Вопросы и ответы' },
  { id: '4', route: '/contacts', name: 'Контакты' },
  { id: '5', route: '/courses', name: 'Мои курсы' },
  { id: '6', route: '/coursess', name: 'Мои курсыs' },
];

function App() {
  const { theme, setTheme } = useTheme();

  return (
    // return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      {/* <div>{NavBarMenuItem}</div> */}

      <GlobalStyle />
      <BrowserRouter>
        {/*  theme switcher */}
        <div
          style={{
            padding: '24px 96px 24px 96px',
            display: 'flex',
            position: 'sticky',
            top: '0px',
            // bottom:'100px',
            gap: '32px',
            flexDirection: 'row-reverse',
            zIndex: '1',
            // backgroundColor: 'red',
          }}
        >
          <div style={{ width: '64px' }}>
            <Button
              size='sm'
              appearance='linked'
              label='ui'
              onClick={() => {
                theme === 'dark' ? setTheme('light') : setTheme('dark');
              }}
            />
          </div>
          <div style={{ width: '64px' }}>
            <Button
              size='sm'
              appearance='linked'
              label={theme}
              onClick={() => {
                theme === 'dark' ? setTheme('light') : setTheme('dark');
              }}
            />{' '}
          </div>
        </div>
        {/*  header */}
        <div
          style={{
            padding: '24px 96px 24px 96px',
            display: 'grid',
            position: 'relative',
            gap: '32px',
            flexDirection: 'row',
            zIndex: '1',
          }}
        >
          {/* <Header /> */}
          {/* <Header /> */}
        </div>
        {/*  hero-banner */}
        <div
          className='app-wrapper'
          style={{
            display: 'flex',
            position: 'relative',
            flexDirection: 'column',
            zIndex: '1',
            padding: '64px 96px 96px 96px',
            gap: '96px',
          }}
        >
          {/* <Header /> */}
          <NavBarMenu2 item={items} />
          {/* <NavBarMenu /> */}

          <Routes>
            {/* <Route path='/' element={<HeroBanner children=' Программы' />} /> */}
            <Route path='/programms' element={<HeroBanner children=' Программы' />} />
            <Route path='/franchise' element={<HeroBanner children='Франшиза' />} />
            <Route path='/faq' element={<HeroBanner children='Вопросы и ответы' />} />
            <Route path='/contacts' element={<HeroBanner children='Контакты' />} />
            <Route path='/courses' element={<HeroBanner children='Мои курсы' />} />
            {/* <Route path='/ui' element={<HeroBanner children='ReUI' />} /> */}
          </Routes>
          <div className='app-wrapper-content'></div>
        </div>
        {/*  hero-banner */}
        <div
          className='app-wrapper'
          style={{
            display: 'flex',
            position: 'relative',
            flexDirection: 'column',
            zIndex: '1',
            padding: '64px 96px 96px 96px',
            gap: '96px',
          }}
        >
          <div className='app-wrapper-content'></div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

// <div>
//   <Text as={'h1'} size={'display'} scale={'xl'} weight={'black'} align={'justify'} font={'display'}>
//     Re UI Kit
//     <Text
//       inline
//       as={'span'}
//       size={'display'}
//       scale={'xl'}
//       weight={'light'}
//       align={'justify'}
//       font={'display'}
//     >
//       {' ' + theme + 'Theme '}
//     </Text>
//     <span style={{ width: '100%' }} />
//     {theme === 'dark' ? '👀 ' : '🌝'}
//     <span style={{ width: 'auto', padding: '24px' }}>
//       <Toggle
//         name={''}
//         type={'checkbox'}
//         onChange={() => {
//           theme === 'dark' ? setTheme('light') : setTheme('dark');
//         }}
//       />
//     </span>
//   </Text>
// </div>

// {/* Buttons */}
// <section>
//   <Text as={'h2'} weight={'bold'} size={'heading'} scale={'xl'} align={'left'} font={'display'}>
//     Buttons
//   </Text>

//   <Button disabled size='sm' appearance='filled' color='neutral' label='Filled' />
//   <Button disabled size='sm' appearance='tonal' color='neutral' label='Tonal' />
//   <Button disabled size='sm' appearance='outlined' color='neutral' label='Outlined' />
//   <Button disabled size='sm' appearance='linked' color='neutral' label='Linked' />
//   <section
//     style={{
//       display: 'flex',
//       flexFlow: 'row wrap',
//       // gridTemplateColumns: 'repeat(6, 1fr)',
//       gap: '24px',
//       paddingBlock: '24px',
//     }}
//   >
//     <Button iconStart='checkShieldFill' size='sm' appearance='filled' color='lead' label='Filled' />
//     <Button iconStart='componentsFill' size='sm' appearance='filled' color='info' label='Filled' />
//     <Button iconStart='checkCircle' size='sm' appearance='filled' color='success' label='Filled' />
//     <Button size='sm' appearance='filled' color='warning' label='Filled' />
//     <Button size='sm' appearance='filled' color='distuctive' label='Filled' />
//     <Button size='sm' appearance='filled' color='neutral' label='Filled' />

//     <Button size='sm' appearance='tonal' color='lead' label='Tonal' />
//     <Button size='sm' appearance='tonal' color='info' label='Tonal' />
//     <Button size='sm' appearance='tonal' color='success' label='Tonal' />
//     <Button size='sm' appearance='tonal' color='warning' label='Tonal' />
//     <Button size='sm' appearance='tonal' color='distuctive' label='Tonal' />
//     <Button size='sm' appearance='tonal' color='neutral' label='Tonal' />

//     <Button iconEnd='sun' size='sm' appearance='outlined' color='lead' label='Outlined' />
//     <Button iconEnd='sun' size='sm' appearance='outlined' color='info' label='Outlined' />
//     <Button iconEnd='sun' size='sm' appearance='outlined' color='success' label='Outlined' />
//     <Button size='sm' appearance='outlined' color='warning' label='Outlined' />
//     <Button size='sm' appearance='outlined' color='distuctive' label='Outlined' />
//     <Button size='sm' appearance='outlined' color='neutral' label='Outlined' />

//     <Button size='sm' appearance='linked' color='lead' label='Linked' />
//     <Button size='sm' appearance='linked' color='info' label='Linked' />
//     <Button size='sm' appearance='linked' color='success' label='Linked' />
//     <Button size='sm' appearance='linked' color='warning' label='Linked' />
//     <Button size='sm' appearance='linked' color='distuctive' label='Linked' />
//     <Button size='sm' appearance='linked' color='neutral' label='Linked' />
//   </section>

//   <ThemeProvider theme={theme === 'dark' ? lightTheme : darkTheme}>
//     <span
//       style={
//         theme === 'dark'
//           ? {
//               display: 'flex',
//               flexFlow: 'row wrap',

//               gap: '24px',
//               padding: '24px',
//               backgroundColor: '#ffffff',
//               borderRadius: '32px',
//             }
//           : {
//               display: 'flex',
//               flexFlow: 'row wrap',

//               gap: '24px',
//               padding: '24px',
//               backgroundColor: '#000000',
//               borderRadius: '32px',
//             }
//       }
//     >
//       <Button size='lg' appearance='filled' color='neutral' label='Filled' />
//       <Button size='lg' appearance='tonal' color='neutral' label='Tonal' />
//       <Button size='lg' appearance='outlined' color='neutral' label='Outlined' />
//       <Button size='lg' appearance='linked' color='neutral' label='Linked' />
//       <Button disabled size='lg' appearance='filled' color='neutral' label='Filled' />
//       <Button disabled size='lg' appearance='tonal' color='neutral' label='Tonal' />
//       <Button disabled size='lg' appearance='outlined' color='neutral' label='Outlined' />
//       <Button disabled size='lg' appearance='linked' color='neutral' label='Linked' />
//     </span>
//   </ThemeProvider>
// </section>
