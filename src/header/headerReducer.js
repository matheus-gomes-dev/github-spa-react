/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable import/no-extraneous-dependencies */

const INITIAL_STATE = { searchUser: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SEARCH_USER':
      return { ...state, searchUser: action.payload };
    default:
      return state;
  }
};
