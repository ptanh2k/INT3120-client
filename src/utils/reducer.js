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
        userName: action.username,
      };
    case ACTIONS.LOGIN:
      return {
        ...prevState,
        isLoggedOut: false,
        userToken: action.token,
        userName: action.username,
      };
    case ACTIONS.LOGOUT:
      return {
        ...prevState,
        isLoggedOut: true,
        userToken: null,
        userName: null,
      };
  }
};

export const initialState = {
  isLoggedIn: false,
  isLoggedOut: false,
  userToken: null,
  userName: null,
};
