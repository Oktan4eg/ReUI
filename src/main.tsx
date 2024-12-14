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
import Programm from './pages/programms/page.tsx';
import Franchise from './pages/franchise/page';
import Contacts from './pages/contacts/page';
import FAQ from './pages/faq/page';
import { Link, Text } from './lib';
import { HeroBanner } from './hero-banner.tsx';

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { EducationLogo } from './lib/components/for-education/education-logo.tsx';
import Courses from './pages/courses/page';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
