import { palette, sizes } from './tokensMY';
import { DefaultTheme } from 'styled-components';

// export const lightTheme = {
export const lightTheme: DefaultTheme = {
  colors: {
    // базовые контентные цвета (текст, иконки, бордеры)
    fg: {
      primary: palette.neutral[8],
      secondary: palette.neutral[24],
      tertiary: palette.neutral[50],
      disabled: palette.neutral[8] + palette.opacity[4],
      muted: palette.neutral[8] + palette.opacity[24],
      ghosty: palette.neutral[8] + palette.opacity[12],
      inverse: {
        // базовые контентные цвета для использования на инверсивных фонах
        primary: palette.neutral[96],
        secondary: palette.neutral[70],
        tertiary: palette.neutral[50],
        disabled: palette.neutral[96] + palette.opacity[4],
        muted: palette.neutral[96] + palette.opacity[24],
        ghosty: palette.neutral[96] + palette.opacity[12],
      },
    },
    //   базовые фоны страницы
    bg: {
      page: palette.neutral[98], // Дефолтный, body page background
      low: palette.neutral[92], // второстепенные, добавочные фоны, для визуального разделения контента, футера... на откуп продуктовому дизайнеру
      mid: palette.neutral[96],
      hight: palette.neutral[100],
      disabled: palette.neutral[98] + palette.opacity[12],
      inverse: {
        page: palette.neutral[8], // Дефолтный, body page background
        low: palette.neutral[8],
        mid: palette.neutral[12],
        hight: palette.neutral[20],
        disabled: palette.neutral[50] + palette.opacity[12],
      },
    },
    // фоны перекрывающих поверхностей (модалки, дропдауны, карточки...)
    surface: {
      lowest: palette.neutral[92],
      low: palette.neutral[94],
      mid: palette.neutral[96],
      hight: palette.neutral[98],
      hightest: palette.neutral[100],
    },
    // Набор цветов без жестко закрепленной функции, но предполагающие свой контекст использования.
    // Цвета этой группы могут применяться на любой элемент интерфейса.
    // Вариативность оттенков даёт возможность управлять контрастом и делают интерфейс разнообразнее и приятнее в деталях.
    neutral: {
      primary: palette.neutral[50],
      secondary: palette.neutral[60],
      tertiary: palette.neutral[80],
      hover: palette.neutral[40],
      active: palette.neutral[30],
      contrast: palette.neutral[96],
      ghosty: {
        primary: palette.neutral[50] + palette.opacity[16],
        secondary: palette.neutral[50] + palette.opacity[12],
        tertiary: palette.neutral[50] + palette.opacity[8],
        hover: palette.neutral[50] + palette.opacity[24],
        active: palette.neutral[50] + palette.opacity[32],
        contrast: palette.neutral[50],
      },
    },
    inverse: {
      primary: palette.neutral[92],
      secondary: palette.neutral[60],
      tertiary: palette.neutral[40],
      hover: palette.neutral[96],
      active: palette.neutral[98],
      contrast: palette.neutral[12],
      ghosty: {
        primary: palette.neutral[92] + palette.opacity[16],
        secondary: palette.neutral[92] + palette.opacity[12],
        tertiary: palette.neutral[92] + palette.opacity[8],
        hover: palette.neutral[92] + palette.opacity[24],
        active: palette.neutral[92] + palette.opacity[32],
        contrast: palette.neutral[12],
      },
    },
    lead: {
      primary: palette.purple[50],
      secondary: palette.purple[60],
      tertiary: palette.purple[80],
      hover: palette.purple[40],
      active: palette.purple[30],
      contrast: palette.purple[95],
      ghosty: {
        primary: palette.purple[80],
        secondary: palette.purple[90],
        tertiary: palette.purple[100],
        hover: palette.purple[95],
        active: palette.purple[90],
        // primary: palette.purple[50] + palette.opacity[16], // 0.16 opacity
        // secondary: palette.purple[50] + palette.opacity[12], // 0.12 opacity
        // tertiary: palette.purple[50] + palette.opacity[8], // 0.08 opacity
        // hover: palette.purple[50] + palette.opacity[24], // 0.24 opacity
        // active: palette.purple[50] + palette.opacity[32], // 0.32 opacity
        contrast: palette.purple[50],
      },
    },
    success: {
      primary: palette.green[50],
      secondary: palette.green[60],
      tertiary: palette.green[80],
      hover: palette.green[40],
      active: palette.green[30],
      contrast: palette.green[95],
      ghosty: {
        primary: palette.green[80],
        secondary: palette.green[90],
        tertiary: palette.green[100],
        hover: palette.green[95],
        active: palette.green[90],
        contrast: palette.green[50],
      },
    },
    distuctive: {
      primary: palette.red[50],
      secondary: palette.red[60],
      tertiary: palette.red[80],
      hover: palette.red[40],
      active: palette.red[30],
      contrast: palette.red[95],
      ghosty: {
        primary: palette.red[80],
        secondary: palette.red[90],
        tertiary: palette.red[100],
        hover: palette.red[95],
        active: palette.red[90],
        contrast: palette.red[50],
      },
    },
    info: {
      primary: palette.blue[50],
      secondary: palette.blue[60],
      tertiary: palette.blue[80],
      hover: palette.blue[40],
      active: palette.blue[30],
      contrast: palette.blue[95],
      ghosty: {
        primary: palette.blue[80],
        secondary: palette.blue[90],
        tertiary: palette.blue[100],
        hover: palette.blue[95],
        active: palette.blue[90],
        contrast: palette.blue[50],
      },
    },
    warning: {
      primary: palette.orange[50],
      secondary: palette.orange[60],
      tertiary: palette.orange[80],
      hover: palette.orange[40],
      active: palette.orange[30],
      contrast: palette.orange[95],
      ghosty: {
        primary: palette.orange[80],
        secondary: palette.orange[90],
        tertiary: palette.orange[100],
        hover: palette.orange[95],
        active: palette.orange[90],
        contrast: palette.orange[50],
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
      primary: palette.neutral[96],
      secondary: palette.neutral[80],
      tertiary: palette.neutral[70],
      disabled: palette.neutral[96] + palette.opacity[4],
      muted: palette.neutral[96] + palette.opacity[24],
      ghosty: palette.neutral[96] + palette.opacity[12],
      inverse: {
        // базовые контентные цвета для использования на инверсивных фонах
        primary: palette.neutral[8],
        secondary: palette.neutral[24],
        tertiary: palette.neutral[40],
        disabled: palette.neutral[50] + palette.opacity[4],
        muted: palette.neutral[50] + palette.opacity[24],
        ghosty: palette.neutral[50] + palette.opacity[12],
      },
    },
    //   базовые фоны страницы
    bg: {
      page: palette.neutral[8], // Дефолтный, body page background
      low: palette.neutral[12], // второстепенные, добавочные фоны, для визуального разделения контента, футера... на откуп продуктовому дизайнеру
      mid: palette.neutral[20],
      hight: palette.neutral[100],
      disabled: palette.neutral[98] + palette.opacity[12],
      inverse: {
        page: palette.neutral[96], // Дефолтный, body page background
        low: palette.neutral[80],
        mid: palette.neutral[70],
        hight: palette.neutral[60],
        disabled: palette.neutral[50] + palette.opacity[12],
      },
    },
    surface: {
      lowest: palette.neutral[92],
      low: palette.neutral[94],
      mid: palette.neutral[96],
      hight: palette.neutral[98],
      hightest: palette.neutral[100],
    },
    // Набор цветов без жестко закрепленной функции, но предполагающие свой контекст использования.
    // Цвета этой группы могут применяться на любой элемент интерфейса.
    // Вариативность оттенков даёт возможность управлять контрастом и делают интерфейс разнообразнее и приятнее в деталях.
    neutral: {
      primary: palette.neutral[50],
      secondary: palette.neutral[60],
      tertiary: palette.neutral[80],
      hover: palette.neutral[40],
      active: palette.neutral[30],
      contrast: palette.neutral[96],
      ghosty: {
        primary: palette.neutral[50] + palette.opacity[16],
        secondary: palette.neutral[50] + palette.opacity[12],
        tertiary: palette.neutral[50] + palette.opacity[8],
        hover: palette.neutral[50] + palette.opacity[24],
        active: palette.neutral[50] + palette.opacity[32],
        contrast: palette.neutral[50],
      },
    },
    inverse: {
      primary: palette.neutral[92],
      secondary: palette.neutral[60],
      tertiary: palette.neutral[40],
      hover: palette.neutral[96],
      active: palette.neutral[98],
      contrast: palette.neutral[12],
      ghosty: {
        primary: palette.neutral[92] + palette.opacity[16],
        secondary: palette.neutral[92] + palette.opacity[12],
        tertiary: palette.neutral[92] + palette.opacity[8],
        hover: palette.neutral[92] + palette.opacity[24],
        active: palette.neutral[92] + palette.opacity[32],
        contrast: palette.neutral[12],
      },
    },
    lead: {
      primary: palette.purple[70],
      secondary: palette.purple[60],
      tertiary: palette.purple[40],
      hover: palette.purple[90],
      active: palette.purple[70],
      contrast: palette.purple[5],
      ghosty: {
        primary: palette.purple[60],
        secondary: palette.purple[50],
        tertiary: palette.purple[40],
        hover: palette.purple[15],
        active: palette.purple[10],
        contrast: palette.purple[100],
      },
    },
    success: {
      primary: palette.green[80],
      secondary: palette.green[60],
      tertiary: palette.green[40],
      hover: palette.green[90],
      active: palette.green[70],
      contrast: palette.green[5],
      ghosty: {
        primary: palette.green[60],
        secondary: palette.green[50],
        tertiary: palette.green[40],
        hover: palette.green[15],
        active: palette.green[10],
        contrast: palette.green[100],
      },
    },
    distuctive: {
      primary: palette.red[80],
      secondary: palette.red[60],
      tertiary: palette.red[40],
      hover: palette.red[90],
      active: palette.red[70],
      contrast: palette.red[5],
      ghosty: {
        primary: palette.red[60],
        secondary: palette.red[50],
        tertiary: palette.red[40],
        hover: palette.red[15],
        active: palette.red[10],
        contrast: palette.red[100],
      },
    },
    info: {
      primary: palette.blue[80],
      secondary: palette.blue[60],
      tertiary: palette.blue[40],
      hover: palette.blue[90],
      active: palette.blue[70],
      contrast: palette.blue[5],
      ghosty: {
        primary: palette.blue[60],
        secondary: palette.blue[50],
        tertiary: palette.blue[40],
        hover: palette.blue[15],
        active: palette.blue[10],
        contrast: palette.blue[100],
      },
    },
    warning: {
      primary: palette.orange[80],
      secondary: palette.orange[60],
      tertiary: palette.orange[40],
      hover: palette.orange[90],
      active: palette.orange[70],
      contrast: palette.orange[5],
      ghosty: {
        primary: palette.orange[60],
        secondary: palette.orange[50],
        tertiary: palette.orange[40],
        hover: palette.orange[15],
        active: palette.orange[10],
        contrast: palette.orange[100],
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
