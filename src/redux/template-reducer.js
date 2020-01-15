const SET_URLS = 'SET_URLS';

const initialState = {
  urls: [],
  forms: [
    { id: 1, label: 'Enter the title:', placeholder: 'Your title' },
    { id: 2, label: 'Enter the main text:', placeholder: 'Text' },
    { id: 3, label: 'Enter your contact:', placeholder: 'Contact details' },
  ],
};

const templateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_URLS:
      return {
        ...state,
        urls: action.urls,
      };
    default:
      return state;
  }
};

export default templateReducer;
