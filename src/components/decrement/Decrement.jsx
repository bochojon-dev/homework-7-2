import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inc } from "../../context/counterSlice";

const Decrement = () => {
  let [decrement, setDecrement] = useState(1);
  let count = useSelector((state) => state.counter.value);
  let dispatch = useDispatch();
  const handleDecrement = () => {
    if (count > 0) {
      dispatch(inc(-`${+decrement}`));
    }
  };
  return (
    <div className="buttons">
      <input
        onChange={(e) => setDecrement(e.target.value)}
        type="number"
        placeholder="Enter decrement number"
      />
      <button onClick={handleDecrement} disabled={count <= 0}>
        decrement
      </button>
    </div>
  );
};

export default Decrement;
