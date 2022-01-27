import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../store/count'
export function Counter() {
  const count = useSelector((state: any) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button onClick={() => dispatch(incrementByAmount({ payload: 3, type: 'add' }))}>
          incrementByAmount
        </button>
      </div>
    </div>
  )
}