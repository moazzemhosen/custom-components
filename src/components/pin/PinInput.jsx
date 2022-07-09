import React, { forwardRef } from 'react'

const PinInput = forwardRef(({ changeHandler, onBackSpaceHandler }, ref) => {
  const handleKeyUp = (e) => {
    if (e.keyCode === 8) {
      onBackSpaceHandler(e);
    } else {
      changeHandler(e);
    }
  };
  return (
    <div>
      <input ref={ref} maxLength={1} onKeyUp={handleKeyUp} />
    </div>
  );
});

export default PinInput