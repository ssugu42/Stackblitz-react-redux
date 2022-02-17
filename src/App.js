import React from 'react';
import './style.css';
import { createStore } from 'redux';

const myStoreData = {
  theme: 'White',
};

const redBg = function () {
  return {
    type: 'red',
  };
};

const blueBg = function () {
  return {
    type: 'blue',
  };
};

const greenGb = function () {
  return {
    type: 'green',
  };
};

const myReducer = function (state = myStoreData, action) {
  console.log(action.type);
  switch (action.type) {
    case 'red':
      state.theme = 'red';
      break;
    case 'blue':
      state.theme = 'blue';
      break;
    case 'green':
      state.theme = 'green';
      break;
  }

  return state;
};

const store = createStore(myReducer);
store.subscribe(()=>{
  const backGround = {
    background: store.getState().theme,
  };
})
console.log(store.getState().theme);


export default function App() {
  return (
    <div style={backGround}>
      <h1>Hello Sugumar!</h1>
      <p>Welcome to the React course</p>
      <label htmlFor="btn">Click the buttons to change backgroun:</label>
      <button onClick={() => store.dispatch(redBg())}>Red</button>
      <button onClick={() => store.dispatch(blueBg())}>Blue</button>
      <button onClick={() => store.dispatch(greenGb())}>Green</button>
    </div>
  );
}