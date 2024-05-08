import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inc } from "../../context/counterSlice";

const Increment = () => {
  let [increment, setIncrement] = useState(1);
  let count = useSelector((state) => state.counter.value);
  let dispatch = useDispatch();
  console.log(increment);
  const handleIncrement = () => {
    if (count < 0) {
      dispatch(inc(+increment - count));
    } else {
      dispatch(inc(+increment));
    }
  };

  return (
    <div className="buttons">
      <input
        onChange={(e) => setIncrement(e.target.value)}
        type="number"
        placeholder="Enter increment number"
      />
      <div>
        <button onClick={handleIncrement}>increment</button>
      </div>
    </div>
  );
};

export default Increment;
