const SET_USER_TEXT = 'SET_USER_TEXT';
const SET__NEXT_FORM = 'SET__NEXT_FORM';
const SET_PREV_FORM = 'SET_PREV_FORM';

const initialState = {
  texts: [
    { id: 1, label: 'Enter the title:', placeholder: 'Your title', name: 'title' },
    { id: 2, label: 'Enter the main text:', placeholder: 'Text', name: 'main' },
    { id: 3, label: 'Enter your contact:', placeholder: 'Contact details', name: 'contact' },
  ],
  userData: [],
  selectTemplateUrl:
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/real-estate-agency-house-sale-retail-ad-marketing-auction-flyer-template-61306859f91ac998b2b5443c3ebaad3c_screen.jpg',
  formNumber: 0,
  progress: [0, 30, 60, 100],
};

const textReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_TEXT:
      return {
        ...state,
        userData: action.userData,
      };
    case SET__NEXT_FORM:
      return {
        ...state,
        formNumber: action.formNumber + 1,
      };
    case SET_PREV_FORM:
      return {
        ...state,
        formNumber: action.formNumber - 1,
      };
    default:
      return state;
  }
};

export const setUserData = (userData) => ({ type: SET_USER_TEXT, userData });
export const setNextForm = (formNumber) => ({ type: SET__NEXT_FORM, formNumber });
export const setPrevForm = (formNumber) => ({ type: SET__NEXT_FORM, formNumber });

export default textReducer;
