import formsPageReducer, { setUserData } from './formsPage-reducer';

describe('formsPageReducer', () => {
  it('should add new data without errors', () => {
    const action = setUserData('New data');
    const state = {
      userData: [],
    };

    const newState = formsPageReducer(state, action);

    expect(newState.userData).toBe('New data');
  });
});
