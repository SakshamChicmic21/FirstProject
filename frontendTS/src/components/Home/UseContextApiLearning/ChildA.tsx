import React from 'react'
import ChildB from './ChildB'

function ChildA() {
  console.log("Child A rendered");
  return (
    <div>
        <ChildB></ChildB>
    </div>
  )
}

export default ChildA