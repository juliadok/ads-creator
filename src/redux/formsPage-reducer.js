const SET_USER_TEXT = 'SET_USER_TEXT';
const SET_NEXT_FORM = 'SET_NEXT_FORM';
const SET_PREV_FORM = 'SET_PREV_FORM';
const RESET_USER_DATA = 'RESET_USER_DATA';
const RESET_FORM_NUMBER = 'RESET_FORM_NUMBER';

const initialState = {
  userData: [],
  formNumber: 0,
};

const formsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_TEXT:
      // eslint-disable-next-line no-case-declarations
      const userData = [...state.userData];
      userData[state.formNumber] = action.userData;

      return { ...state, userData };
    case SET_NEXT_FORM:
      return {
        ...state,
        formNumber: action.formNumber + 1,
      };
    case SET_PREV_FORM:
      return {
        ...state,
        formNumber: action.formNumber - 1,
      };
    case RESET_USER_DATA:
      return {
        ...state,
        userData: [],
      };
    case RESET_FORM_NUMBER:
      return {
        ...state,
        formNumber: 0,
      };
    default:
      return state;
  }
};

export const setUserData = (userData) => ({ type: SET_USER_TEXT, userData });
export const setNextForm = (formNumber) => ({ type: SET_NEXT_FORM, formNumber });
export const setPrevForm = (formNumber) => ({ type: SET_PREV_FORM, formNumber });
export const resetUserData = () => ({ type: RESET_USER_DATA });
export const resetFormNumber = () => ({ type: RESET_FORM_NUMBER });

export default formsPageReducer;
