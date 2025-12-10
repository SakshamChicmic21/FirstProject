import React, { useState } from 'react'
import Button from '../common/Button';

type Childprops = {
    count:number;
}
const Child = React.memo(({count}:Childprops)=>{
    console.log("child rendred");
    return <h2>count :{count}</h2>
})
function ReactMemoHook() {
    const [count,setCount]=useState<number>(0);
    const [toggle,setToggle]= useState(false);
  return (
    <div>
        <h1>React Memo Hook</h1>
        <Child count = {count} />
        <Button onClick={()=>setCount(count+1)}>Increase</Button>
        <Button onClick={()=>setToggle(!toggle)}>Toggle</Button>
    </div>
  )
}

export default ReactMemoHook