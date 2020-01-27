const SET_USER_TEXT = 'SET_USER_TEXT';
const SET_FORM_NUMBER = 'SET_FORM_NUMBER';

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
    case SET_FORM_NUMBER:
      return {
        ...state,
        formNumber: action.formNumber,
      };
    default:
      return state;
  }
};

export const setUserData = (userData) => ({ type: SET_USER_TEXT, userData });
export const setFormNumber = (formNumber) => ({ type: SET_FORM_NUMBER, formNumber });

export default textReducer;
