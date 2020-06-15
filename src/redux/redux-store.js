import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';
import templateReducer from './template-reducer';
import formsPageReducer from './formsPage-reducer';

const reducers = combineReducers({
  templatesData: templateReducer,
  formsPage: formsPageReducer,
  form: formReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;
