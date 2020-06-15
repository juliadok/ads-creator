import { templatesApi } from '../api/api';

const SET_AD = 'SET_AD';
const SET_TEMPLATES = 'SET_TEMPLATES';

const initialState = {
  templates: [],
  ad: null,
};

const templateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEMPLATES:
      return {
        ...state,
        templates: action.templates,
      };
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
export const setTemplates = (templates) => ({ type: SET_TEMPLATES, templates });

// Thunk function
export const getTemplates = () => async (dispatch) => {
  const data = await templatesApi.getTemplates();

  dispatch(setTemplates(data));
  dispatch(setAd(data[0]));
};

export default templateReducer;
