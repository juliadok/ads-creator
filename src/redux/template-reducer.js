const SET_AD = 'SET_AD';

const initialState = {
  urls: [],
  ad: 'https://img3.goodfon.ru/wallpaper/nbig/4/c0/abstract-background-rainbow-7757.jpg',
  textBlock: [
    {
      name: 'Title',
      x: 10,
      y: 10,
      text: 'Nature',
    },
    {
      name: 'Main',
      x: 10,
      y: 30,
      text: 'Main text',
    },
    {
      name: 'Contact',
      x: 20,
      y: 40,
      text: 'Contact detail',
    },
  ],
};

const templateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AD:
      return {
        ...state,
        ad: action.ad,
        textBlock: action.textBlock,
      };

    default:
      return state;
  }
};

// action creators
export const setAd = (ad, textBlock) => ({ type: SET_AD, ad, textBlock });

export default templateReducer;
