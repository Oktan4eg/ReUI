// взято с https://youtu.be/vvieEwYX02c?si=F0kgDrOU96hvHDHR

import { useLayoutEffect, useState } from 'react';

const queryes = [
  '(max-width: 767px)',
  '(min-width: 768px) and (max-width: 1199px)',
  '(min-width: 1200px)',
];

export const useMatchMedia = () => {
  const mediaQueryLists = queryes.map((query) => matchMedia(query));
  const getValues = () => mediaQueryLists.map((mql) => mql.matches);
  const [values, setValues] = useState(getValues);

  useLayoutEffect(() => {
    const handler = () => setValues(getValues);
    mediaQueryLists.forEach((mql) => mql.addEventListener('change', handler));

    return () =>
      mediaQueryLists.forEach((mql) =>
        mql.removeEventListener('change', handler)
      );
  });

  return ['isMobile', 'isTablet', 'isDesktop'].reduce(
    (acc, screen, index) => ({
      ...acc,
      [screen]: values[index],
    }),
    {}
  );
};
