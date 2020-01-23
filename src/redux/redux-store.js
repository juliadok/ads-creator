import { createStore, combineReducers } from 'redux';
import templateReducer from './template-reducer';
import formReducer from './form-reducer';

const reducers = combineReducers({
  templatesPage: templateReducer,
  formPage: formReducer,
});

const store = createStore(reducers);

window.store = store;
export default store;
