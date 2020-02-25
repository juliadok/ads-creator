import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import templateReducer from './template-reducer';
import formsPageReducer from './formsPage-reducer';

const reducers = combineReducers({
  template: templateReducer,
  formsPage: formsPageReducer,
  form: formReducer,
});

const store = createStore(reducers);

window.store = store;
export default store;
