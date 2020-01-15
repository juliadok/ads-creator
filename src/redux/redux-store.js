import { createStore, combineReducers } from 'redux';
import templateReducer from './template-reducer';

const reducers = combineReducers({
  templatesPage: templateReducer,
});

const store = createStore(reducers);

window.store = store;
export default store;
