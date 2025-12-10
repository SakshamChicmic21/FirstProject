import React, { useCallback, useState } from 'react'
import Button from '../common/Button'

function UseCallbackHook() {
        const [count,setCount] = useState(0);
      
        const increment = useCallback(()=>{
            setCount((c)=>c+1);
        },[]);  
  return (
    <div>
        <h1>UseCallback Hook</h1>
        <Button onClick={increment}>Increase :{count}</Button>
    </div>
  )
}

export default UseCallbackHook