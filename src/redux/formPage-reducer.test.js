import formsPageReducer, { setUserData } from './formsPage-reducer';

describe('formsPageReducer', () => {
  it('should add new data without errors', () => {
    const action = setUserData('New data');
    const state = {
      formNumber: 0,
      userData: [],
    };

    const newState = formsPageReducer(state, action);

    expect(newState.userData).toEqual(['New data']);
  });
});
