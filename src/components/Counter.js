import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
  incrementAsync,
} from "../reducers/counterSlice";

export default function Counter() {
  const [incrementAmount, setIncrementAmount] = useState("0");

  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  // without useSelector // const count = selectCount(store.getState())
  return (
    <div>
      <button onClick={() => dispatch(increment())}> + </button>
      {count}
      <button onClick={() => dispatch(decrement())}> - </button>
      <div>
        <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          onClick={() => dispatch(incrementByAmount(+incrementAmount || 0))}
        >
          increase by
        </button>
      </div>
      <div>
        AsyncIncrement after 100 second{" "}
        <button onClick={() => dispatch(incrementAsync(+incrementAmount || 0))}>
          Add
        </button>{" "}
      </div>
    </div>
  );
}
