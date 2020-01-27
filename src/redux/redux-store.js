import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import templateReducer from './template-reducer';
import textReducer from './text-reducer';

const reducers = combineReducers({
  templatesPage: templateReducer,
  textPage: textReducer,
  form: formReducer,
});

const store = createStore(reducers);

window.store = store;
export default store;
