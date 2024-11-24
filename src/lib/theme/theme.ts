import { palette, sizes, typography } from './tokensMY';
import { DefaultTheme } from 'styled-components';

// export const lightTheme = {
export const lightTheme: DefaultTheme = {
  colors: {
    // базовые контентные цвета (текст, иконки, бордеры)
    fg: {
      default: {
        primary: palette.neutral[8],
        secondary: palette.neutral[24],
        tertiary: palette.neutral[50],
        disabled: palette.neutral[8] + palette.opacity[4],
        muted: palette.neutral[8] + palette.opacity[24],
        ghosty: palette.neutral[8] + palette.opacity[12],
      },
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
      default: {
        page: palette.neutral[98], // Дефолтный, body page background
        low: palette.neutral[92], // второстепенные, добавочные фоны, для визуального разделения контента, футера... на откуп продуктовому дизайнеру
        mid: palette.neutral[96],
        hight: palette.neutral[100],
        disabled: palette.neutral[98] + palette.opacity[12],
      },
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
      default: {
        primary: palette.neutral[24],
        secondary: palette.neutral[40],
        tertiary: palette.neutral[80],
        hover: palette.neutral[30],
        active: palette.neutral[24],
        contrast: palette.neutral[100],
      },
      ghosty: {
        primary: palette.neutral[80],
        secondary: palette.neutral[88],
        tertiary: palette.neutral[94],
        hover: palette.neutral[88],
        active: palette.neutral[80],
        contrast: palette.neutral[12],
      },
    },
    inverse: {
      default: {
        primary: palette.neutral[100],
        secondary: palette.neutral[90],
        tertiary: palette.neutral[80],
        hover: palette.neutral[88],
        active: palette.neutral[70],
        contrast: palette.neutral[12],
      },
      ghosty: {
        primary: palette.neutral[12],
        secondary: palette.neutral[12],
        tertiary: palette.neutral[12],
        hover: palette.neutral[24],
        active: palette.neutral[20],
        contrast: palette.neutral[96],
      },
    },
    lead: {
      default: {
        primary: palette.purple[50],
        secondary: palette.purple[60],
        tertiary: palette.purple[80],
        hover: palette.purple[40],
        active: palette.purple[30],
        contrast: palette.purple[95],
      },
      ghosty: {
        primary: palette.purple[80],
        secondary: palette.purple[90],
        tertiary: palette.purple[100],
        hover: palette.purple[95],
        active: palette.purple[90],
        contrast: palette.purple[30],
      },
    },
    success: {
      default: {
        primary: palette.green[50],
        secondary: palette.green[60],
        tertiary: palette.green[80],
        hover: palette.green[40],
        active: palette.green[30],
        contrast: palette.green[95],
      },
      ghosty: {
        primary: palette.green[85],
        secondary: palette.green[95],
        tertiary: palette.green[100],
        hover: palette.green[90],
        active: palette.green[95],
        contrast: palette.green[30],
      },
    },
    distuctive: {
      default: {
        primary: palette.red[50],
        secondary: palette.red[60],
        tertiary: palette.red[80],
        hover: palette.red[40],
        active: palette.red[30],
        contrast: palette.red[95],
      },
      ghosty: {
        primary: palette.red[85],
        secondary: palette.red[95],
        tertiary: palette.red[100],
        hover: palette.red[90],
        active: palette.red[95],
        contrast: palette.red[30],
      },
    },
    info: {
      default: {
        primary: palette.blue[50],
        secondary: palette.blue[60],
        tertiary: palette.blue[80],
        hover: palette.blue[40],
        active: palette.blue[30],
        contrast: palette.blue[95],
      },
      ghosty: {
        primary: palette.blue[85],
        secondary: palette.blue[95],
        tertiary: palette.blue[100],
        hover: palette.blue[90],
        active: palette.blue[95],
        contrast: palette.blue[30],
      },
    },
    warning: {
      default: {
        primary: palette.orange[50],
        secondary: palette.orange[60],
        tertiary: palette.orange[80],
        hover: palette.orange[40],
        active: palette.orange[30],
        contrast: palette.orange[95],
      },
      ghosty: {
        primary: palette.orange[85],
        secondary: palette.orange[95],
        tertiary: palette.orange[100],
        hover: palette.orange[90],
        active: palette.orange[95],
        contrast: palette.orange[30],
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

  typography: {
    fontFamily: {
      heading: typography.family.heading,
      body: typography.family.body,
      monospace: typography.family.monospace,
    },
  },

  cornerRadius: {},

  zIndices: {},

  animation: {},
};

export const darkTheme = {
  ...lightTheme,
  colors: {
    fg: {
      default: {
        primary: palette.neutral[96],
        secondary: palette.neutral[80],
        tertiary: palette.neutral[70],
        disabled: palette.neutral[96] + palette.opacity[4],
        muted: palette.neutral[96] + palette.opacity[24],
        ghosty: palette.neutral[96] + palette.opacity[12],
      },
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
      default: {
        page: palette.neutral[8], // Дефолтный, body page background
        low: palette.neutral[12], // второстепенные, добавочные фоны, для визуального разделения контента, футера... на откуп продуктовому дизайнеру
        mid: palette.neutral[20],
        hight: palette.neutral[100],
        disabled: palette.neutral[98] + palette.opacity[12],
      },
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
      default: {
        primary: palette.neutral[100],
        secondary: palette.neutral[90],
        tertiary: palette.neutral[80],
        hover: palette.neutral[80],
        active: palette.neutral[70],
        contrast: palette.neutral[12],
      },
      ghosty: {
        primary: palette.neutral[12],
        secondary: palette.neutral[40],
        tertiary: palette.neutral[60],
        hover: palette.neutral[24],
        active: palette.neutral[20],
        contrast: palette.neutral[96],
      },
    },
    inverse: {
      default: {
        primary: palette.neutral[50],
        secondary: palette.neutral[60],
        tertiary: palette.neutral[80],
        hover: palette.neutral[40],
        active: palette.neutral[30],
        contrast: palette.neutral[92],
      },
      ghosty: {
        primary: palette.neutral[80],
        secondary: palette.neutral[88],
        tertiary: palette.neutral[94],
        hover: palette.neutral[88],
        active: palette.neutral[80],
        contrast: palette.neutral[12],
      },
    },
    lead: {
      default: {
        primary: palette.purple[60],
        secondary: palette.purple[50],
        tertiary: palette.purple[40],
        hover: palette.purple[70],
        active: palette.purple[60],
        contrast: palette.purple[5],
      },
      ghosty: {
        primary: palette.purple[15],
        secondary: palette.purple[10],
        tertiary: palette.purple[5],
        hover: palette.purple[20],
        active: palette.purple[15],
        contrast: palette.purple[90],
      },
    },
    success: {
      default: {
        primary: palette.green[60],
        secondary: palette.green[50],
        tertiary: palette.green[40],
        hover: palette.green[70],
        active: palette.green[60],
        contrast: palette.green[5],
      },
      ghosty: {
        primary: palette.green[15],
        secondary: palette.green[10],
        tertiary: palette.green[5],
        hover: palette.green[20],
        active: palette.green[15],
        contrast: palette.green[90],
      },
    },

    distuctive: {
      default: {
        primary: palette.red[60],
        secondary: palette.red[50],
        tertiary: palette.red[40],
        hover: palette.red[70],
        active: palette.red[60],
        contrast: palette.red[5],
      },
      ghosty: {
        primary: palette.red[15],
        secondary: palette.red[10],
        tertiary: palette.red[5],
        hover: palette.red[20],
        active: palette.red[15],
        contrast: palette.red[90],
      },
    },
    info: {
      default: {
        primary: palette.blue[60],
        secondary: palette.blue[50],
        tertiary: palette.blue[40],
        hover: palette.blue[70],
        active: palette.blue[60],
        contrast: palette.blue[5],
      },
      ghosty: {
        primary: palette.blue[15],
        secondary: palette.blue[10],
        tertiary: palette.blue[5],
        hover: palette.blue[20],
        active: palette.blue[15],
        contrast: palette.blue[90],
      },
    },
    warning: {
      default: {
        primary: palette.orange[60],
        secondary: palette.orange[50],
        tertiary: palette.orange[40],
        hover: palette.orange[70],
        active: palette.orange[60],
        contrast: palette.orange[5],
      },
      ghosty: {
        primary: palette.orange[15],
        secondary: palette.orange[10],
        tertiary: palette.orange[5],
        hover: palette.orange[20],
        active: palette.orange[15],
        contrast: palette.orange[90],
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
