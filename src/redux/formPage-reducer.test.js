import React from 'react';
import formsPageReducer, { setUserData } from './formsPage-reducer';

it('New data has been added successfully', () => {
  const action = setUserData('New data');
  const state = {
    userData: [],
  };

  const newState = formsPageReducer(state, action);

  expect(newState.userData).toBe('New data');
});
