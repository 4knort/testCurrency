import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { throttle } from 'lodash';
import rootReducer from 'modules';

const middlewares = [
  thunkMiddleware,
];

function loadState() {
  try {
    const serializedState = JSON.parse(localStorage.getItem('state'));
    if (serializedState === null) { return undefined; }
    return serializedState;
  } catch (e) {
    return undefined;
  }
}

function saveState(state) {
  try {
    // remove routing before saving: it ruins everything!
    const stateToSave = { ...state };
    delete stateToSave.routing;

    localStorage.setItem('state', JSON.stringify(stateToSave));
    return null;
  } catch (e) {
    return null;
  }
}

const configureStore = () => {
  // Prevent redux devTools initialization in production
  const store = createStore(rootReducer, compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension && process.env.NODE_ENV === 'development'
      ? window.devToolsExtension()
      : f => f
  ));

  // Save state to localStorage every second
  // store.subscribe(throttle(() => {
  //   saveState(store.getState());
  // }, 1000));

  return store;
};

export default configureStore;
