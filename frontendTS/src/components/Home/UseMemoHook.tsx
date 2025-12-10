import React, { useMemo, useState } from 'react'
import Button from '../common/Button';

// type Childprop = {
//     data:number[],
// }
// const Child = React.memo(({data}:Childprop)=>{
//     console.log("child rendered");
//     return <div>{data.length}</div>
// })
function UseMemoHook() {
    // const filtered = useMemo(()=>{
    //     return items.filter((item)=> item.includes(search));
    // },[items , search]);

    const [count,setCount] = useState(0);
    // const [todo,setTodo] = useState("");
    const [todos,setTodos] = useState<string[]>([]);
    const expensiveCalc = (num:number)=>{
        console.log("running heavy function...");
        for(let i=0;i<1e9;i++){ /* empty */ }
        return num*2;
    }

    const res = useMemo(()=>expensiveCalc(count),[count]);
    // const res = expensiveCalc(count);

    // const list = useMemo(()=>{
    //     return [1,2,3,count];
    // },[count]);

  return (
    <div>
        <h1>useMemo Hook</h1>
        <h2>Todos</h2>

        {
            todos.map((todo)=>{
                return <p>{todo}</p>
            })
        }
        <Button onClick={()=>setTodos([...todos,"new todo"])} >Add Todo</Button>
        <h2>Result:{res}</h2>
        {/* <Child data={list}></Child> */}
        <Button onClick={()=>setCount(count +1)}>Increase :{count}</Button>
    </div>
  )
}

export default UseMemoHook