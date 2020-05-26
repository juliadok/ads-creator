const SET_AD = 'SET_AD';

const initialState = {
  templates: [],
  ad: {
    name: 'Pencil',
    id: 1,
    url:
      'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    blocks: [
      {
        name: 'Title',
        x: 10,
        y: 10,
        text: 'Pencil',
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

export const setAd = (ad) => ({ type: SET_AD, ad });

export default templateReducer;
