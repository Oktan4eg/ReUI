import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { MediaTest } from './lib/components/mediaTest.js';

createRoot(document.getElementById('root')!).render(
  <>
    <App />
    <MediaTest />
  </>
);
