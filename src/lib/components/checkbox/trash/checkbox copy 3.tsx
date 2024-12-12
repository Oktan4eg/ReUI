import React, { useRef, useState } from 'react';

export function Checkbox() {
  const [state, setState] = useState(0);
  const checkboxRef = useRef(null);

  const toggleCheckbox = () => {
    setState((prev) => (prev + 1) % 3); // Cycle through 0, 1, and 2
  };

  // Use a ref callback to set the indeterminate property
  const setIndeterminate = (element: any) => {
    if (element && state === 2) {
      element.indeterminate = true;
    }
  };

  return (
    <div>
      <input type='checkbox' checked={state === 1} ref={setIndeterminate} onClick={toggleCheckbox} />
      <label>Toggle Indeterminate</label>
    </div>
  );
}

// export default IndeterminateCheckbox;
