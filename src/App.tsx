import { GlobalStyle, lightTheme, darkTheme, Button } from './lib';
import { Header } from './header/NavBarHeader.tsx';

import { useTheme } from './lib/hooks';
import { ThemeProvider } from 'styled-components';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HeroBanner } from './hero-banner/hero-banner.tsx';
import { NavBarMenu2 } from './header/nav/NavBarMenu2.tsx';
import { NavBarMenu } from './header/nav/NavBarMenu.tsx';
import { UiPreview } from './uiPreview.tsx';
import { NavBarLink } from './header/nav/menu-item/NavBarLink.tsx';

interface NavBarProps {
  items: Array<T>;
}
type T = {
  id: string;
  route: string;
  name: string;
};

function App(items: NavBarProps) {
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
          <Header item={items.items} />
          {/* <NavBarMenu2 item={items.items} /> */}

          {/* <NavBarMenu /> */}

          <Routes>
            {/* <Route path='/' element={<HeroBanner children=' Программы' />} /> */}
            <Route path='/programms' element={<HeroBanner children=' Программы' />} />
            <Route path='/franchise' element={<HeroBanner children='Франшиза' />} />
            <Route path='/faq' element={<HeroBanner children='Вопросы и ответы' />} />
            <Route path='/contacts' element={<HeroBanner children='Контакты' />} />
            <Route path='/courses' element={<HeroBanner children='Мои курсы' />} />
            {/* <Route path='/ui' element={<UiPreview />} /> */}
            <Route
              path='/ui'
              element={
                <>
                  <HeroBanner children='UI' />
                  <UiPreview />
                </>
              }
            />
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
