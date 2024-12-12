// import React, { useRef, useEffect } from 'react';

// export const CHECKED = 1;
// export const UNCHECKED = 2;
// export const INDETERMINATE = -1;

// export const Checkbox = (props: any) => {
//   const { value, ...otherProps } = props;
//   const checkRef = useRef();

//   useEffect(() => {
//     checkRef.current.checked = value === CHECKED;
//     checkRef.current.indeterminate = value === INDETERMINATE;
//   }, [value]);

//   return <input type='checkbox' ref={checkRef} {...otherProps} />;
// };
