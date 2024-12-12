// import { sizes } from './sizes';

// import { DefaultTheme } from 'styled-components';

// export const lightTheme = {
export const font = {
  family: {
    display: `"Roboto", -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
    body: `"Inter", -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
    monospace: `'SFMono-Medium', 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Ubuntu Mono', Menlo, Consolas, Courier, monospace`,
  },
  size: {
    display: { xl: '56px', lg: '44px', md: '36px', sm: '32px' }, // Акцентные заголовки // адаптив
    heading: { xl: '28px', lg: '24px', md: '20px', sm: '18px' }, // Дефолтные заголовки // адаптив
    title: { xl: '24px', lg: '20px', md: '16px', sm: '14px' }, // Подзаголовки
    label: { xl: '16px', lg: '14px', md: '12px', sm: '10px' }, // Копия body, лейблы в компонентах
    body: { xl: '16px', lg: '14px', md: '12px', sm: '10px' }, // Основной аборный текст
    ligal: { xl: '12px', lg: '12px', md: '10px', sm: '8px' }, // Тексты лигалов и экстримально мелкие текстовки
    button: { xl: '20px', lg: '14px', md: '12px', sm: '10px' }, // Гомпонентная группа токенов в контексте кнопок
  },
  height: {
    display: { xl: '64px', lg: '56px', md: '48px', sm: '40px' },
    heading: { xl: '36px', lg: '32px', md: '28px', sm: '24px' },
    title: { xl: '32px', lg: '28px', md: '24px', sm: '20px' },
    label: { xl: '24px', lg: '20px', md: '16px', sm: '12px' },
    body: { xl: '24px', lg: '20px', md: '16px', sm: '12px' },
    ligal: { xl: '16px', lg: '12px', md: '10px', sm: '10px' },
    button: { xl: '24px', lg: '20px', md: '16px', sm: '12px' },
  },
  weight: {
    thin: '100',
    extraLight: '200',
    light: '300',
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
    extraBold: '800',
    black: '900',
  },
};
