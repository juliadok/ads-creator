// action types
const SET_PREVIEW = 'SET_PREVIEW';

const initialState = {
  urls: [],
  forms: [
    { id: 1, label: 'Enter the title:', placeholder: 'Your title' },
    { id: 2, label: 'Enter the main text:', placeholder: 'Text' },
    { id: 3, label: 'Enter your contact:', placeholder: 'Contact details' },
  ],
  preview:
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/real-estate-agency-house-sale-retail-ad-marketing-auction-flyer-template-61306859f91ac998b2b5443c3ebaad3c_screen.jpg',
};

const templateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PREVIEW:
      return {
        ...state,
        preview: action.preview,
      };
    default:
      return state;
  }
};

// action creators
export const setPreview = (preview) => ({ type: SET_PREVIEW, preview });

export default templateReducer;
