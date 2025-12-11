import React from 'react'
import ChildC from './ChildC'

function ChildB() {
  console.log("Child B rendered");
  return (
    <div>
        <ChildC></ChildC>
    </div>
  )
}

export default ChildB