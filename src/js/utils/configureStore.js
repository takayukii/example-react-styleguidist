import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import AppReducers from '../reducers/AppReducers';

const rootReducer = combineReducers({
  app: AppReducers,
});

const isDev = true;

export default function configureStore ({ initialState = {} }) {
  return createStore(rootReducer, initialState, compose(
    isDev && typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  ));
};
