import React from 'react';
import './style.css';
import { createStore } from 'redux';

const myStoreData = {
    name: 'Sugumar',
    age: '24',
    Status: 'Single',
  }

const myReducer = function (state = myStoreData) {
  return state;
};

const store = createStore(myReducer);

console.log(store.getState());

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>{store.getState().name}</p>
    </div>
  );
}