// import { SizesAdaptive } from '../theme/tokensMY/sizesAdaptive';
import { useMatchMedia } from '../hooks';

export const MediaTest = () => {
  // const example: Record<string, number> = {};
  // const isMobile: boolean = true;
  // const { isMobile } = useMediaQueryMantine();
  const matches = useMatchMedia();
  // const matches = useMediaQueryMantine('(min-width: 720)');
  return (
    console.log(matches),
    (
      <>
        {/* <div>{SizesAdaptive.sizes[0]}</div> */}

        {/* {matches ? console.log('isMobile') : console.log('isNOTMobile')} */}
        {console.log('update')}

        {/* <div>{SizesAdaptive.sizes.current}</div> */}
      </>
    )
  );
};
