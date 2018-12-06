import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllPokemon } from './util/api_util';
import { receiveAllPokemon, RECEIVE_ALL_POKEMON, requestAllPokemon } from './actions/pokemon_actions';
import configureStore from "./store/store";
import { selectAllPokemon } from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
  // testing
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.requestAllPokemon = requestAllPokemon;
  window.selectAllPokemon = selectAllPokemon;


  const root = document.getElementById('root');
  ReactDOM.render(<h1>HELLO</h1>, root);
});
