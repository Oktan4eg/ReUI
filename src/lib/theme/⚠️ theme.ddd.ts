// import 'styled-components';

// declare module 'styled-components' {
//   export interface DefaultTheme {
//     colors: {
//       // базовые контентные цвета (текст, иконки, бордеры)
//       fg: {
//         primary: string;
//         secondary: string;
//         tertiary: string;
//         ghosty: string;
//         muted: string;
//         disabled: string;
//         inverse: {
//           // базовые контентные цвета для использования на инверсивных фонах
//           primary: string;
//           secondary: string;
//           tertiary: string;
//           ghosty: string;
//           muted: string;
//           disabled: string;
//         };
//       };
//       // базовые фоны страницы
//       bg: {
//         page: string; // Дефолтный, body page background
//         low: string; // второстепенные, добавочные фоны, для визуального разделения контента, футера... на откуп продуктовому дизайнеру
//         mid: string;
//         hight: string;
//         disabled: string;
//         inverse: {
//           low: string;
//           mid: string;
//           hight: string;
//           disabled: string;
//         };
//       };
//       // фоны перекрывающих поверхностей (модалки, дропдауны, карточки...)
//       surface: {
//         lowest: string;
//         low: string;
//         mid: string;
//         hight: string;
//         hightest: string;
//       };
//       // Набор цветов без жестко закрепленной функции, но предполагающие свой контекст использования.
//       // Цвета этой группы могут применяться на любой элемент интерфейса.
//       // Вариативность оттенков даёт возможность управлять контрастом и делают интерфейс разнообразнее и приятнее в деталях.
//       lead: {
//         primary: string;
//         secondary: string;
//         tertiary: string;
//         hover: string;
//         active: string;
//         contrast: string;
//         container: {
//           primary: string;
//           secondary: string;
//           tertiary: string;
//           hover: string;
//           active: string;
//           contrast: string;
//         };
//       };
//       lead2: {
//         fixed: {
//           enabled: string;
//           hover: string;
//           active: string;
//           contrast: string;
//         };
//         primary: {
//           enabled: string;
//           hover: string;
//           active: string;
//           contrast: string;
//         };
//         secondary: {
//           enabled: string;
//           hover: string;
//           active: string;
//           contrast: string;
//         };
//         tertiary: {
//           enabled: string;
//           hover: string;
//           active: string;
//           contrast: string;
//         };
//         ghosty: {
//           enabled: string;
//           hover: string;
//           active: string;
//           contrast: string;
//         };
//         muted: {
//           enabled: string;
//           hover: string;
//           active: string;
//           contrast: string;
//         };
//         alpha: {
//           // ??? 🔴
//           enabled: string;
//           hover: string;
//           active: string;
//           contrast: string;
//           fixed: string;
//           primary: string;
//           secondary: string;
//           tertiary: string;
//           ghosty: string;
//           muted: string;
//         };
//       };
//       lead3: {
//         primary: {
//           enabled: string;
//           hover: string;
//           active: string;
//           disabled: string;
//           contrast: {
//             enabled: string;
//             disabled: string;
//           };
//           alpha: {
//             enabled: string;
//             hover: string;
//             active: string;
//             disabled: string;
//             contrast: {
//               enabled: string;
//               disabled: string;
//             };
//           };
//         };
//         secondary: {
//           enabled: string;
//           hover: string;
//           active: string;
//           disabled: string;
//           contrast: {
//             enabled: string;
//             disabled: string;
//           };
//           alpha: {
//             enabled: string;
//             hover: string;
//             active: string;
//             disabled: string;
//             contrast: {
//               enabled: string;
//               disabled: string;
//             };
//           };
//         };
//         tertiary: {
//           enabled: string;
//           hover: string;
//           active: string;
//           disabled: string;
//           contrast: {
//             enabled: string;
//             disabled: string;
//           };
//           alpha: {
//             enabled: string;
//             hover: string;
//             active: string;
//             disabled: string;
//             contrast: {
//               enabled: string;
//               disabled: string;
//             };
//           };
//         };
//         ghosty: {
//           enabled: string;
//           hover: string;
//           active: string;
//           disabled: string;
//           contrast: {
//             enabled: string;
//             disabled: string;
//           };
//           alpha: {
//             enabled: string;
//             hover: string;
//             active: string;
//             disabled: string;
//             contrast: {
//               enabled: string;
//               disabled: string;
//             };
//           };
//         };
//       };
//       //цвета текстовых ссылок
//       link: {};
//       //цвета для состояния :focus
//       focus: {
//         inner: string; // первый радиус
//         outer: string; // второй радиус
//       };
//       shadow: {
//         // цвета нейтральный теней
//         neutral: {
//           hghtest: string;
//           hght: string;
//           mid: string;
//           low: string;
//           lowest: string;
//         };
//         // цвета акцентных теней
//         accent: {
//           hghtest: string;
//           hght: string;
//           mid: string;
//           low: string;
//           lowest: string;
//         };
//       };
//       // прозрачный утилитарный цвет, используется где цвет не нужен, но свойство цвета удобней оставить
//       utility: {
//         //??? 🔴 он нужен в разработке? Учитывая что всеравно пишется background-color: transparent
//         transparent: string;
//       };
//     };
//     spacing: {
//       fixed: {};
//       comp: {
//         gap: {};
//         padding: {};
//       };
//       group: {
//         gap: {};
//         padding: {};
//       };
//     };

//     shadows: {};

//     typography: {};

//     cornerRadius: {};

//     zIndices: {};

//     animation: {};
//   }
// }
