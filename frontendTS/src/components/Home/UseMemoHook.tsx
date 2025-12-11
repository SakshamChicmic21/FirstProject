import React, { useMemo, useState } from "react";
import Button from "../common/Button";

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

  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);
  // const [todo,setTodo] = useState("");
  const [todos, setTodos] = useState<string[]>([]);
  const expensiveCalc = (num: number) => {
    console.log("running heavy function...");
    for (let i = 0; i < 1e9; i++) {
      /* empty */
    }
    return num * 2;
  };

  const res = useMemo(() => expensiveCalc(input), [input]);
  // const res = expensiveCalc(count);

  // const list = useMemo(()=>{
  //     return [1,2,3,count];
  // },[count]);

  return (
    <div>
      <h1>useMemo Hook</h1>
      {/* <Child data={list}></Child> */}
      
      <h2>Todos</h2>
      {todos.map((todo) => {
        return <p>{todo}</p>;
      })}
      <Button onClick={() => setTodos([...todos, "new todo"])}>Add Todo</Button>

      <h2>Count:{count}</h2>
      <Button onClick={() => setCount(count + 1)}>Increase</Button>

      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
        className="border-2 border-gray-400 rounded-md "
      />
      <h2>Result:{res}</h2>
    </div>
  );
}

export default UseMemoHook;
