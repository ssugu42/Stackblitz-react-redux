import React from 'react';
import './style.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Display from './display.js';

const myReducer = function (state = 'orange', action) {
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

// const subscribeData = store.subscribe(() => {
//   console.log(store.getState())
//   return store.getState();
// });

export default function App() {
  const store = createStore(myReducer);

  return (
    <Provider store={store}>
      <Display />
    </Provider>
  );
}
