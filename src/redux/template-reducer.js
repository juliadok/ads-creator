// action types
const SET_URLS = 'SET_URLS';

// export {backgroundData} from './../api/api'

const initialState = {
  urls: [
    {
      id: 1,
      url:
        'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/real-estate-agency-house-sale-retail-ad-marketing-auction-flyer-template-61306859f91ac998b2b5443c3ebaad3c_screen.jpg',
    },
    { id: 2, url: 'https://q-cf.bstatic.com/images/hotel/max1024x768/208/208187160.jpg' },
    { id: 3, url: 'https://i.pinimg.com/originals/62/12/33/621233789a9df143024d0a1eb8fe18e3.jpg' },
  ],
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

/*
//action creators
export const setUrls = (urls) => ({ type: SET_URLS, urls });

export const getUsers = (urls) => async (dispatch) => {
  let data = await backgroundData.getUsers(urls)
  dispatch(setUrls(data.items));
}
*/

export default templateReducer;
