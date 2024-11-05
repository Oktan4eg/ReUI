import { SizesAdaptive } from '../theme/tokens/sizesAdaptive';
import { useMatchMedia, useMediaQueryMantine } from '../hooks';

export const MediaTest = () => {
  // const example: Record<string, number> = {};
  // const isMobile: boolean = true;
  // const { isMobile } = useMediaQueryMantine();
  const matches = useMediaQueryMantine('(min-width: 720)');
  return (
    console.log(matches),
    (
      <>
        <div>{SizesAdaptive.sizes[0]}</div>

        {matches ? console.log('isMobile') : console.log('isNOTMobile')}

        <div>{SizesAdaptive.sizes.current}</div>
      </>
    )
  );
};
