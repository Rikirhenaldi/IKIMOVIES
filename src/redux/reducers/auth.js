/* eslint-disable prettier/prettier */
const initialState = {
  data: [],
  requestedToken: '',
  firstOpenApp: true,
  tokenLogin: '',
  username: '',
  errMsg: ''
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_TOKEN': {
      return {
        ...state,
        requestedToken: action.payload
      };
    }
    case 'REQUEST_TOKEN_FAILED': {
      return {
        ...state,
        requestedToken: action.payload
      };
    }
    case 'SET_FIRST_OPEN_APPS': {
      return {
        ...state,
        firstOpenApp: action.payload
      };
    }
    case 'AUTH_LOGIN': {
      return {
        ...state,
        tokenLogin: action.payload.token,
        username: action.payload.name
      };
    }
    case 'AUTH_LOGIN_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
      };
    }
    case 'AUTH_LOGIN_GUEST': {
      return {
        ...state,
        tokenLogin: action.payload.token,
      };
    }
    case 'AUTH_LOGIN_GUEST_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
      };
    }
    case 'RESET_LOGIN': {
      return {
        ...state,
        errMsg: '',
      };
    }
    case 'SET_CLEAR_LOGIN_MESSAGE': {
      return {
        ...state,
        sccMsg: '',
        errMsg: '',
      };
    }
    case 'CARTS_ADD_FAVORITE_MOVIE': {
      return {
        ...state,
        data: [...state.data, ...[action.payload]],
      };
    }
    case 'AUTH_LOGOUT': {
      return {
        data: [],
        requestedToken: '',
        firstOpenApp: true,
        tokenLogin: '',
        username: '',
        errMsg: ''
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default auth;
