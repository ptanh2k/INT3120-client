export const ACTIONS = {
  RESTORE_TOKEN: 'RESTORE_TOKEN',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  REGISTER: 'REGISTER',
};

export const reducer = (prevState, action) => {
  switch (action.type) {
    case ACTIONS.RESTORE_TOKEN:
      return {
        ...prevState,
        userToken: action.token,
      };
    case ACTIONS.LOGIN:
      return {
        ...prevState,
        isLoggedOut: false,
        userToken: action.token,
      };
    case ACTIONS.LOGOUT:
      return {
        ...prevState,
        isLoggedOut: true,
        userToken: null,
      };
  }
};

export const initialState = {
  isLoggedIn: false,
  isLoggedOut: false,
  userToken: null,
};
