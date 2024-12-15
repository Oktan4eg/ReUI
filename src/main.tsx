import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const navBarItems = [
  { id: '1', route: '/programms', name: 'Программы' },
  { id: '2', route: '/franchise', name: 'Франшиза' },
  { id: '3', route: '/faq', name: 'Вопросы и ответы' },
  { id: '4', route: '/contacts', name: 'Контакты' },
  { id: '5', route: '/courses', name: 'Мои курсы' },
];

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <App items={navBarItems} />
  </React.StrictMode>
);
