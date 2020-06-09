const SET_AD = 'SET_AD';

const initialState = {
  templates: [],
  ad: null,
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
