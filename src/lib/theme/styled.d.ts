import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      // базовые контентные цвета (текст, иконки, бордеры)
      fg: {
        default: {
          primary: string;
          secondary: string;
          tertiary: string;
          disabled: string;
          muted: string;
          ghosty: string;
        };
        inverse: {
          // базовые контентные цвета для использования на инверсивных фонах
          primary: string;
          secondary: string;
          tertiary: string;
          disabled: string;
          muted: string;
          ghosty: string;
        };
      };
      //   базовые фоны страницы
      bg: {
        default: {
          page: string; // Дефолтный, body page background
          low: string; // второстепенные, добавочные фоны, для визуального разделения контента, футера... на откуп продуктовому дизайнеру
          mid: string;
          hight: string;
          disabled: string;
        };
        inverse: {
          page: string;
          low: string;
          mid: string;
          hight: string;
          disabled: string;
        };
      };
      // фоны перекрывающих поверхностей (модалки, дропдауны, карточки...)
      surface: {
        lowest: string;
        low: string;
        mid: string;
        hight: string;
        hightest: string;
      };
      // Набор цветов без жестко закрепленной функции, но предполагающие свой контекст использования.
      // Цвета этой группы могут применяться на любой элемент интерфейса.
      // Вариативность оттенков даёт возможность управлять контрастом и делают интерфейс разнообразнее и приятнее в деталях.
      neutral: {
        default: {
          primary: string;
          secondary: string;
          tertiary: string;
          hover: string;
          active: string;
          contrast: string;
        };
        inverse: {
          primary: string;
          secondary: string;
          tertiary: string;
          hover: string;
          active: string;
          contrast: string;
        };
      };
      // inverse: {
      //   primary: string;
      //   secondary: string;
      //   tertiary: string;
      //   hover: string;
      //   active: string;
      //   contrast: string;
      //   // inverse: {
      //   //   primary: string;
      //   //   secondary: string;
      //   //   tertiary: string;
      //   //   hover: string;
      //   //   active: string;
      //   //   contrast: string;
      //   // };
      // };
      lead: {
        default: {
          primary: string;
          secondary: string;
          tertiary: string;
          hover: string;
          active: string;
          contrast: string;
        };
        inverse: {
          primary: string;
          secondary: string;
          tertiary: string;
          hover: string;
          active: string;
          contrast: string;
        };
      };
      success: {
        default: {
          primary: string;
          secondary: string;
          tertiary: string;
          hover: string;
          active: string;
          contrast: string;
        };
        inverse: {
          primary: string;
          secondary: string;
          tertiary: string;
          hover: string;
          active: string;
          contrast: string;
        };
      };
      distuctive: {
        default: {
          primary: string;
          secondary: string;
          tertiary: string;
          hover: string;
          active: string;
          contrast: string;
        };
        inverse: {
          primary: string;
          secondary: string;
          tertiary: string;
          hover: string;
          active: string;
          contrast: string;
        };
      };
      info: {
        default: {
          primary: string;
          secondary: string;
          tertiary: string;
          hover: string;
          active: string;
          contrast: string;
        };
        inverse: {
          primary: string;
          secondary: string;
          tertiary: string;
          hover: string;
          active: string;
          contrast: string;
        };
      };
      warning: {
        default: {
          primary: string;
          secondary: string;
          tertiary: string;
          hover: string;
          active: string;
          contrast: string;
        };
        inverse: {
          primary: string;
          secondary: string;
          tertiary: string;
          hover: string;
          active: string;
          contrast: string;
        };
      };
      //цвета текстовых ссылок
      link: {};
      //цвета для состояния :focus
      focus: {
        inner: string; // первый радиус
        outer: string; // второй радиус
      };
      shadow: {
        // цвета нейтральный теней
        neutral: {
          hghtest: string;
          hght: string;
          mid: string;
          low: string;
          lowest: string;
        };
        // цвета акцентных теней
        accent: {
          hghtest: string;
          hght: string;
          mid: string;
          low: string;
          lowest: string;
        };
      };
      // прозрачный утилитарный цвет, используется где цвет не нужен, но свойство цвета удобней оставить
      utility: {
        //??? 🔴 он нужен в разработке? Учитывая что всеравно пишется background-color: transparent
        transparent: string;
      };
    };
    spacing: {
      fixed: {};
      comp: {
        gap: {};
        padding: {};
      };
      group: {
        gap: {};
        padding: {};
      };
    };

    shadows: {};

    typography: {};

    cornerRadius: {};

    zIndices: {};

    animation: {};
  }
}
