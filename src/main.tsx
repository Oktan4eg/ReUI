// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.tsx';

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Programm from './pages/programm/page.tsx';
import Franchise from './pages/franchise/page';
import Contacts from './pages/contacts/page';
import FAQ from './pages/faq/page';
import { Link, Text } from './lib';

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { EducationLogo } from './lib/components/for-education/education-logo.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={App} />
        <Route path='/programm' Component={Programm} />
        <Route path='/faq' Component={FAQ} />
        <Route path='/franchise' Component={Franchise} />
        <Route path='/contacts' Component={Contacts} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
