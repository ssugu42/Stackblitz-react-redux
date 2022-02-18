import React from 'react';
import './style.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

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

const myReducer = function (state = 'white', action) {
  switch (action.type) {
    case 'red':
      state = 'red';
      break;
    case 'blue':
      state = 'blue';
      break;
    case 'green':
      state = 'green';
      break;
  }

  return state;
};

const store = createStore(myReducer);
const subscribeData = store.subscribe(() => {
  console.log(store.getState())
  return store.getState();
});
console.log("In global function", store.getState());

export default function App() {

  console.log(store, "this is store")

  return (
    <Provider store={store}>
      <div color="red">
        <h1>Hello Sugumar!</h1>
        <p>Welcome to the React course</p>
        <label htmlFor="btn">Click the buttons to change backgroun:</label>
        <button onClick={() => store.dispatch(redBg())}>Red</button>
        <button onClick={() => store.dispatch(blueBg())}>Blue</button>
        <button onClick={() => store.dispatch(greenGb())}>Green</button>
      </div>
    </Provider>
  );
}
