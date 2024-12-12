import React, { useRef, useEffect, useState } from 'react';

// const [checked, setChecked] = useState(true);

// function chengeCheckbox() {
//   setChecked(!checked);
// }
// export const Checkbox = () => {
//   return (
//     <div>
//       <input type='checkbox' checked={checked} onChange={chengeCheckbox} />
//     </div>
//   );
// };

export function Checkbox() {
  const [checked, setChecked] = useState(true);

  return (
    <div>
      <input type='checkbox' checked={checked} onChange={() => setChecked(!checked)} />
      <span>{checked ? 'галочка есть' : 'галочки нет'}</span>
    </div>
  );
}
