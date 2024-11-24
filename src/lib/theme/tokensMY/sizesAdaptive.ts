const minWidth = 1324;

const breakpoints = {
  values: {
    xxs: 0, // small phone
    xs: 300, // phone
    sm: 600, // tablets
    md: 900, // small laptop
    lg: 1200, // desktop
    xl: 1536, // large screens
  },
};

var screen = window.matchMedia('(max-width:600px)');
if (screen.matches) {
  console.log('<600');
} else {
  console.log('>600');
}

export const SizesAdaptive = {
  sizes: {
    current: window.innerWidth,
    0: '0px',
    [`@media (min-width: ${minWidth}px)`]: {
      // '@media (min-width: 1024px)': {
      sizes: {
        0: '100px',
      },
    },
    [`@media (min-width: 100px)`]: {
      // '@media (min-width: 100px)': {
      sizes: {
        0: '100px',
      },
    },
    1: '1px',
    1.5: '1.5px',
    2: '2px',
    3: '3px',
    4: '4px',
    6: '6px',
    8: '8px',
    10: '10px',
    12: '12px',
    16: '16px',
    20: '20px',
    24: '24px',
    28: '28px',
    32: '32px',
    36: '36px',
    40: '40px',
    48: '48px',
    56: '56px',
    64: '64px',
    72: '72px',
    80: '80px',
    96: '96px',
    112: '112px',
    128: '128px',
    144: '144px',
    160: '160px',
  },
};
