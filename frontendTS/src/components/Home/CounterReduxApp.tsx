import React, { useState } from 'react'
import Button from '../common/Button'
import Input from '../common/Input'
import { useDispatch, useSelector } from 'react-redux';
import { addIncrementByAmount, decrement, increment, reset } from '../../slices/counterSlice';

function CounterReduxApp() {
    const [input, setInput] = useState<number>(0);

    const dispatch = useDispatch();
    const count = useSelector((state:{counter: {value: number}})=>state.counter.value);

    function incrementHandler(){
        dispatch(increment());
    }
    
    function decrementHandler(){
        dispatch(decrement())
    }   
    function resetHandler(){
        dispatch(reset());
    }
    function addByAmout(){
        dispatch(addIncrementByAmount(input));
    }
  return (
    <div>
        <h1>Counter Redux App</h1>
        <h2>Count: {count}</h2>
        <div>
            <Button onClick={incrementHandler}>+</Button>
            <Button onClick={decrementHandler}>-</Button>
            <Button onClick={resetHandler}>reset</Button>
            <Input type="number" placeholder='Enter number' onChange={(e)=>setInput(Number(e.target.value))}></Input>
            <Button onClick={addByAmout}>Add by amount</Button>
        </div>
    </div>
  )
}

export default CounterReduxApp