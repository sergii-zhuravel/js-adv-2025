export const logger = (store) => (dispatch) => (action) => {
  console.log("Action: ", action);
  console.log("Before: ", store.getState());
  const result = dispatch(action);
  console.log("After: ", store.getState());
  return result;
};
