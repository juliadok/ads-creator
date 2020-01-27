// action types
const SET_PREVIEW = 'SET_PREVIEW';

const initialState = {
  urls: [],
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
