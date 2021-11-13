import React from 'react'
import Canvas from './Canvas';

function Example() {
    return (
        <>
        {[ 'end'].map((placement, idx) => (
          <Canvas key={idx} placement={placement} name={placement} />
        ))}
      </>
    )
}

export default Example;
