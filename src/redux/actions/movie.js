import http from "../../helpers/http";

export const getDiscoverList = () => {
    return async dispatch => {
      try {
        const {data} = await http().get(
          `https://api.themoviedb.org/3/discover/movie?api_key=dd3269519e09ec54a2b43307102e0bab&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
        );
        dispatch({
          type: 'GET_DISCOVER_LIST',
          payload: data.results,
        });
      } catch (err) {
        dispatch({
          type: 'GET_DISCOVER_LIST_FAILED',
          payload: err.response,
        });
      }
    };
  };

  export const getMovieList = () => {
    return async dispatch => {
      try {
        const {data} = await http().get(
          `https://api.themoviedb.org/3/list/1?api_key=dd3269519e09ec54a2b43307102e0bab&language=en-US`,
        );
        dispatch({
          type: 'GET_MOVIE_LIST',
          payload: data.items,
        });
      } catch (err) {
        dispatch({
          type: 'GET_MOVIE_LIST_FAILED',
          payload: err,
        });
      }
    };
  };

  export const getCategoriesList = () => {
    return async dispatch => {
      try {
        const {data} = await http().get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=dd3269519e09ec54a2b43307102e0bab&language=en-US`,
        );
        dispatch({
          type: 'GET_CATEGORIES_LIST',
          payload: data.genres,
        });
      } catch (err) {
        dispatch({
          type: 'GET_CATEGORIES_LIST_FAILED',
          payload: data,
        });
      }
    };
  };

  export const SetCategoryActive = (val) => {
    return {
      type: 'SET_CATEGORY_ACTIVE',
      payload: val
    };
  };

  export const SetIdDetailActive = (val) => {
    return {
      type: 'SET_ID_DETAIL_ACTIVE',
      payload: val
    };
  };

  export const getDetailMovieById = (id) => {
    return async dispatch => {
      try {
        const {data} = await http().get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=dd3269519e09ec54a2b43307102e0bab&language=en-US`,
        );
        dispatch({
          type: 'GET_DETAIL_MOVIE',
          payload: data,
        });
      } catch (err) {
        dispatch({
          type: 'GET_DETAIL_MOVIE_FAILED',
          payload: data,
        });
      }
    };
  };

  export const getMovieBySearch = (query) => {
    return async dispatch => {
      try {
        const {data} = await http().get(
          `https://api.themoviedb.org/3/search/movie?api_key=dd3269519e09ec54a2b43307102e0bab&language=en-US&query=${query}&page=1&include_adult=false`,
        );
        dispatch({
          type: 'GET_MOVIE_BY_SEARCH',
          payload: data,
        });
        dispatch({
            type: 'SET_LAST_QUERY_SEARCH',
            payload: query,
          });
      } catch (err) {
        dispatch({
          type: 'GET_MOVIE_BY_SEARCH_FAILED',
          payload: data,
        });
      }
    };
  };