import { palette, sizes } from './tokensMY';
import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  colors: {
    fg: {
      primary: '#899387',
      secondary: '#899387',
      tertiary: '#899387',
      ghosty: '#899387',
      muted: '#899387',
      disabled: '#899387',
      inverse: {
        primary: '#899387',
        secondary: '#899387',
        tertiary: '#899387',
        ghosty: '#899387',
        muted: '#899387',
        disabled: '#899387',
      },
    },
    bg: {
      page: '',
      low: '',
      mid: '',
      hight: '',
      disabled: '',
      inverse: '',
    },
    surface: {
      lowest: '',
      low: '',
      mid: '',
      hight: '',
      hightest: '',
    },
    lead: {
      primary: '',
      secondary: '',
      tertiary: '',
      hover: '',
      active: '',
      contrast: '',
      container: {
        primary: '',
        secondary: '',
        tertiary: '',
        hover: '',
        active: '',
        contrast: '',
      },
    },
    lead2: {
      fixed: {
        enabled: '',
        hover: '',
        active: '',
        contrast: '',
      },
      primary: {
        enabled: '',
        hover: '',
        active: '',
        contrast: '',
      },
      secondary: {
        enabled: '',
        hover: '',
        active: '',
        contrast: '',
      },
      tertiary: {
        enabled: '',
        hover: '',
        active: '',
        contrast: '',
      },
      ghosty: {
        enabled: '',
        hover: '',
        active: '',
        contrast: '',
      },
      muted: {
        enabled: '',
        hover: '',
        active: '',
        contrast: '',
      },
      alpha: {
        // ??? 🔴
        enabled: '',
        hover: '',
        active: '',
        contrast: '',
        fixed: '',
        primary: '',
        secondary: '',
        tertiary: '',
        ghosty: '',
        muted: '',
      },
    },
    lead3: {
      primary: {
        enabled: '',
        hover: '',
        active: '',
        disabled: '',
        contrast: {
          enabled: '',
          disabled: '',
        },
      },
      secondary: {
        enabled: '',
        hover: '',
        active: '',
        contrast: '',
      },
      tertiary: {
        enabled: '',
        hover: '',
        active: '',
        contrast: '',
      },
      ghosty: {
        enabled: '',
        hover: '',
        active: '',
        contrast: '',
      },
      muted: {
        enabled: '',
        hover: '',
        active: '',
        contrast: '',
      },
      alpha: {
        // ??? 🔴
        enabled: '',
        hover: '',
        active: '',
        contrast: '',
        fixed: '',
        primary: '',
        secondary: '',
        tertiary: '',
        ghosty: '',
        muted: '',
      },
    },
    utility: {
      transparent: '',
      //??? 🔴
      shadow: {
        neutral: {
          hghtest: '',
          hght: '',
          mid: '',
          low: '',
          lowest: '',
        },
        accent: {
          hghtest: '',
          hght: '',
          mid: '',
          low: '',
          lowest: '',
        },
      },
    },
  },

  spacing: {
    fixed: {
      ...sizes,
    },
    comp: {
      gap: {
        xxs: '',
        xs: '',
        sm: '',
        md: '',
        lg: '',
        xl: '',
        xxl: '',
      },
      padding: {
        xxs: '',
        xs: '',
        sm: '',
        md: '',
        lg: '',
        xl: '',
        xxl: '',
      },
    },
    group: {
      gap: {
        xxs: '',
        xs: '',
        sm: '',
        md: '',
        lg: '',
        xl: '',
        xxl: '',
      },
      padding: {
        xxs: '',
        xs: '',
        sm: '',
        md: '',
        lg: '',
        xl: '',
        xxl: '',
      },
    },
  },

  shadows: {},

  typography: {},

  cornerRadius: {},

  zIndices: {},

  animation: {
    base: `0.2s ease-in-out`,
  },
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
