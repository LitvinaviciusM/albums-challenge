export const feed = (state = [], action) => {
  switch (action.type) {
    case 'API_RESPONSE_GET_ALBUMS':
      return action.payload;
    default:
      return state;
  }
};
