import http from "../../helpers/http";

export const addFavoriteMovie = (item) => {
    return {
      type: 'CARTS_ADD_FAVORITE_MOVIE',
      payload: item,
    };
  };

  export const SetFirstOpenAppsUser = (val) => {
    return {
      type: 'SET_FIRST_OPEN_APPS',
      payload: val,
    };
  };

  export const getRequestToken = () => {
    return async dispatch => {
      try {
        const {data} = await http().get(
          `https://api.themoviedb.org/3/authentication/token/new?api_key=dd3269519e09ec54a2b43307102e0bab`,
        );
        dispatch({
          type: 'REQUEST_TOKEN',
          payload: data,
        });
      } catch (err) {
        dispatch({
          type: 'REQUEST_TOKEN_FAILED',
          payload: err.response === undefined
          ? 'Network error'
          : err.response.data.status_message,
        });
      }
    };
  };

  export const authLogin = (
    requestedToken,
    username,
    password,
  ) => {
    return async dispatch => {
    try {
      const form = new URLSearchParams();
      form.append('request_token', requestedToken);
      form.append('username', username);
      form.append('password', password);
        const {data} = await http().post(
          `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=dd3269519e09ec54a2b43307102e0bab`,
          form.toString(),
        );
        dispatch({
          type: 'AUTH_LOGIN',
          payload: {
              token: data.request_token,
              name: username
            }
        });
      } catch (err) {
        console.log('ini eror kenapa', err);
        dispatch({
          type: 'AUTH_LOGIN_FAILED',
          payload: err.response === undefined
          ? 'Network error'
          : err.response.data.status_message,
        });
      }
    };
  };

  export const authLoginGuest = () => {
    return async dispatch => {
      try {
        const {data} = await http().get(
          `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=dd3269519e09ec54a2b43307102e0bab`,
        );
        dispatch({
          type: 'AUTH_LOGIN_GUEST',
          payload: {
            token: data.guest_session_id,
          }
        });
      } catch (err) {
        dispatch({
          type: 'AUTH_LOGIN_GUEST_FAILED',
          payload: err.response === undefined
          ? 'Network error'
          : err.response.data.status_message,
        });
      }
    };
  };

  export const resetLoginMessage = () => ({
    type: 'RESET_LOGIN',
  });

  export const authLogout = () => ({
    type: 'AUTH_LOGOUT',
  });
