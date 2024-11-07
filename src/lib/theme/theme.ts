import { palette, sizes } from './tokensMY';
import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  colors: {
    // базовые контентные цвета (текст, иконки, бордеры)
    fg: {
      primary: palette.neutral[50],
      secondary: palette.neutral[50],
      tertiary: palette.neutral[50],
      ghosty: palette.neutral[50],
      muted: palette.neutral[50],
      disabled: palette.neutral[50],
      inverse: {
        // базовые контентные цвета для использования на инверсивных фонах
        primary: palette.neutral[50],
        secondary: palette.neutral[50],
        tertiary: palette.neutral[50],
        ghosty: palette.neutral[50],
        muted: palette.neutral[50],
        disabled: palette.neutral[50],
      },
    },
    //   базовые фоны страницы
    bg: {
      page: palette.neutral[50], // Дефолтный, body page background
      low: palette.neutral[50], // второстепенные, добавочные фоны, для визуального разделения контента, футера... на откуп продуктовому дизайнеру
      mid: palette.neutral[50],
      hight: palette.neutral[50],
      disabled: palette.neutral[50],
      inverse: {
        low: palette.neutral[50],
        mid: palette.neutral[50],
        hight: palette.neutral[50],
        disabled: palette.neutral[50],
      },
    },
    // фоны перекрывающих поверхностей (модалки, дропдауны, карточки...)
    surface: {
      lowest: palette.neutral[50],
      low: palette.neutral[50],
      mid: palette.neutral[50],
      hight: palette.neutral[50],
      hightest: palette.neutral[50],
    },
    // Набор цветов без жестко закрепленной функции, но предполагающие свой контекст использования.
    // Цвета этой группы могут применяться на любой элемент интерфейса.
    // Вариативность оттенков даёт возможность управлять контрастом и делают интерфейс разнообразнее и приятнее в деталях.
    lead: {
      primary: palette.purple[50],
      secondary: palette.purple[50],
      tertiary: palette.purple[50],
      hover: palette.purple[50],
      active: palette.purple[50],
      contrast: palette.purple[50],
      container: {
        primary: palette.purple[50],
        secondary: palette.purple[50],
        tertiary: palette.purple[50],
        hover: palette.purple[50],
        active: palette.purple[50],
        contrast: palette.purple[50],
      },
    },
    lead2: {
      fixed: {
        enabled: palette.purple[50],
        hover: palette.purple[50],
        active: palette.purple[50],
        contrast: palette.purple[50],
      },
      primary: {
        enabled: palette.purple[50],
        hover: palette.purple[50],
        active: palette.purple[50],
        contrast: palette.purple[50],
      },
      secondary: {
        enabled: palette.purple[50],
        hover: palette.purple[50],
        active: palette.purple[50],
        contrast: palette.purple[50],
      },
      tertiary: {
        enabled: palette.purple[50],
        hover: palette.purple[50],
        active: palette.purple[50],
        contrast: palette.purple[50],
      },
      ghosty: {
        enabled: palette.purple[50],
        hover: palette.purple[50],
        active: palette.purple[50],
        contrast: palette.purple[50],
      },
      muted: {
        enabled: palette.purple[50],
        hover: palette.purple[50],
        active: palette.purple[50],
        contrast: palette.purple[50],
      },
      alpha: {
        // ??? 🔴
        enabled: palette.purple[50],
        hover: palette.purple[50],
        active: palette.purple[50],
        contrast: palette.purple[50],
        fixed: palette.purple[50],
        primary: palette.purple[50],
        secondary: palette.purple[50],
        tertiary: palette.purple[50],
        ghosty: palette.purple[50],
        muted: palette.purple[50],
      },
    },
    lead3: {
      primary: {
        enabled: palette.purple[50],
        hover: palette.purple[50],
        active: palette.purple[50],
        disabled: palette.purple[50],
        contrast: {
          enabled: palette.purple[50],
          disabled: palette.purple[50],
        },
        alpha: {
          enabled: palette.purple[50],
          hover: palette.purple[50],
          active: palette.purple[50],
          disabled: palette.purple[50],
          contrast: {
            enabled: palette.purple[50],
            disabled: palette.purple[50],
          },
        },
      },
      secondary: {
        enabled: palette.purple[50],
        hover: palette.purple[50],
        active: palette.purple[50],
        disabled: palette.purple[50],
        contrast: {
          enabled: palette.purple[50],
          disabled: palette.purple[50],
        },
        alpha: {
          enabled: palette.purple[50],
          hover: palette.purple[50],
          active: palette.purple[50],
          disabled: palette.purple[50],
          contrast: {
            enabled: palette.purple[50],
            disabled: palette.purple[50],
          },
        },
      },
      tertiary: {
        enabled: palette.purple[50],
        hover: palette.purple[50],
        active: palette.purple[50],
        disabled: palette.purple[50],
        contrast: {
          enabled: palette.purple[50],
          disabled: palette.purple[50],
        },
        alpha: {
          enabled: palette.purple[50],
          hover: palette.purple[50],
          active: palette.purple[50],
          disabled: palette.purple[50],
          contrast: {
            enabled: palette.purple[50],
            disabled: palette.purple[50],
          },
        },
      },
      ghosty: {
        enabled: palette.purple[50],
        hover: palette.purple[50],
        active: palette.purple[50],
        disabled: palette.purple[50],
        contrast: {
          enabled: palette.purple[50],
          disabled: palette.purple[50],
        },
        alpha: {
          enabled: palette.purple[50],
          hover: palette.purple[50],
          active: palette.purple[50],
          disabled: palette.purple[50],
          contrast: {
            enabled: palette.purple[50],
            disabled: palette.purple[50],
          },
        },
      },
    },
    //цвета текстовых ссылок
    link: {},
    //цвета для состояния :focus
    focus: {
      inner: palette.purple[50], // первый радиус
      outer: palette.purple[50], // второй радиус
    },
    shadow: {
      // цвета нейтральный теней
      neutral: {
        hghtest: palette.neutral[50],
        hght: palette.neutral[50],
        mid: palette.neutral[50],
        low: palette.neutral[50],
        lowest: palette.neutral[50],
      },
      // цвета акцентных теней
      accent: {
        hghtest: palette.purple[50],
        hght: palette.purple[50],
        mid: palette.purple[50],
        low: palette.purple[50],
        lowest: palette.purple[50],
      },
    },
    // прозрачный утилитарный цвет, используется где цвет не нужен, но свойство цвета удобней оставить
    utility: {
      //??? 🔴 он нужен в разработке? Учитывая что всеравно пишется background-color: transparent
      transparent: 'transparent',
    },
  },
  spacing: {
    fixed: {},
    comp: {
      gap: {},
      padding: {},
    },
    group: {
      gap: {},
      padding: {},
    },
  },

  shadows: {},

  typography: {},

  cornerRadius: {},

  zIndices: {},

  animation: {},
};

export const darkTheme = {
  ...lightTheme,
  colors: {
    fg: {
      primary: '#123123',
      secondary: '#123123',
      tertiary: '#123123',
      ghosty: '#123123',
      muted: '#123123',
      disabled: '#123123',
      inverse: {
        primary: '#123123',
        secondary: '#123123',
        tertiary: '#123123',
        ghosty: '#123123',
        muted: '#123123',
        disabled: '#123123',
      },
    },
  },
};
