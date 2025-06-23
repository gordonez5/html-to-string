export const initialState = {
  sort: 'default',
  theme: 'light',
  view: 'grid',
};

export const settingsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SORT':
      return { ...state, sort: action.payload };
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'SET_VIEW':
      return { ...state, view: action.payload };
    default:
      return state;
  }
};
