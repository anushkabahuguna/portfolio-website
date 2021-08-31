export const reducer = (state) => {
  //here state is the theme itself
  return !state;
  //   return [...state, { id: uuidv4(), task: action.task, completed: false }];
};
export const initialState = {
  isDarkTheme: true,
};
