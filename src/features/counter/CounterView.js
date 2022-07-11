import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increaseByAmount, increment, reset } from './counterSlice';

const CounterView = () => {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => dispatch(increment())}>INCREMENT</button>
            <button onClick={() => dispatch(decrement())}>DECREMENT</button>
            <button onClick={() => dispatch(reset())}>RESET</button>
            <button onClick={() => dispatch(increaseByAmount(5))}>IncreaseBy5</button>
        </div>
    );
};

export default CounterView;