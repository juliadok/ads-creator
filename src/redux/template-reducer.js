const SET_AD = 'SET_AD';

const initialState = {
  templates: [],
  ad: {
    name: 'Rainbow',
    id: 1,
    url: 'https://img3.goodfon.ru/wallpaper/nbig/4/c0/abstract-background-rainbow-7757.jpg',
    blocks: [
      {
        name: 'Title',
        x: 10,
        y: 10,
        text: 'Rainbow',
      },
      {
        name: 'Main',
        x: 10,
        y: 90,
        text: 'Main text example',
      },
      {
        name: 'Contact',
        x: 100,
        y: 180,
        text: 'Contact detail',
      },
    ],
  },
};

const templateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AD:
      return {
        ...state,
        ad: action.ad,
      };

    default:
      return state;
  }
};

// action creators
export const setAd = (ad) => ({ type: SET_AD, ad });
// export const setAd = (url) => ({ type: SET_AD, url });

export default templateReducer;
