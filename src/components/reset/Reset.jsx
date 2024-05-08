import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inc } from "../../context/counterSlice";

const Reset = () => {
  let count = useSelector((state) => state.counter.value);
  let dispatch = useDispatch();
  const handleReset = () => {
    dispatch(inc(-count));
  };
  return (
    <div>
      <button onClick={handleReset}>reset</button>
    </div>
  );
};

export default Reset;
