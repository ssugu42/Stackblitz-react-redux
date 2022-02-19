import { useDispatch, useSelector } from 'react-redux';
import { redBg, blueBg, greenGb } from './action';
import React from 'react';

const Display = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  console.log('In---', data);

  return (
    <div color="red">
      <h1>Hello Sugumar!</h1>
      <p>Welcome to the React course</p>
      <p>{data}</p>
      <button onClick={() => dispatch(redBg())}>Red</button>
      <button onClick={() => dispatch(blueBg())}>Blue</button>
      <button onClick={() => dispatch(greenGb())}>Green</button>
    </div>
  );
};

export default Display;
