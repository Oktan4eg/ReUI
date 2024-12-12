/**
 * https://www.youtube.com/watch?v=2-Iex4XG_Zg
 */
'use client';

import { useLayoutEffect, useState } from 'react';

// определение системной темы
const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches;
const defaultTheme = isDarkTheme ? 'dark' : 'light';
console.log('defaultSystemTheme', defaultTheme);

export const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('app-theme') || defaultTheme);

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  return { theme, setTheme };
};
