/* eslint-disable prettier/prettier */
const initialState = {
    discoverOnload: true,
    movieListOnload: true,
    discoverList: [],
    movieList: [],
    categoriesList: [],
    categoryActive: 'Action',
    IdDetailActive: '',
    detailMovie: {},
    searchResults : [],
    lastSearch: ''
  };
  
  const movie = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_DISCOVER_LIST': {
        return {
          ...state,
          discoverList: action.payload,
          discoverOnload: false
        };
      }
      case 'GET_DISCOVER_LIST_FAILED': {
        return {
          ...state,
          discoverList: action.payload,
          discoverOnload: false
        };
      }
      case 'GET_MOVIE_LIST': {
        return {
          ...state,
          movieList: action.payload,
          movieListOnload: false
        };
      }
      case 'GET_MOVIE_LIST_FAILED': {
        return {
          ...state,
          movieList: action.payload,
          movieListOnload: false
        };
      }
      case 'GET_CATEGORIES_LIST': {
        return {
          ...state,
          categoriesList: action.payload,
        };
      }
      case 'GET_CATEGORIES_LIST_FAILED': {
        return {
          ...state,
          categoriesList: action.payload,
        };
      }
      case 'SET_CATEGORY_ACTIVE': {
        return {
          ...state,
          categoryActive: action.payload,
        };
      }
      case 'SET_ID_DETAIL_ACTIVE': {
        return {
          ...state,
          IdDetailActive: action.payload,
        };
      }
      case 'GET_DETAIL_MOVIE': {
        return {
          ...state,
          detailMovie: action.payload,
        };
      }
      case 'GET_DETAIL_MOVIE_FAILED': {
        return {
          ...state,
          detailMovie: action.payload,
        };
      }
      case 'GET_MOVIE_BY_SEARCH': {
        return {
          ...state,
          searchResults: action.payload,
        };
      }
      case 'GET_MOVIE_BY_SEARCH_FAILED': {
        return {
          ...state,
          searchResults: action.payload,
        };
      }
      case 'SET_LAST_QUERY_SEARCH': {
        return {
          ...state,
          lastSearch: action.payload,
        };
      }
      case 'SET_RESET_ONLOAD': {
        return {
          ...state,
          discoverOnload: action.payload,
          movieListOnload: action.payload,
        };
      }
      default: {
        return {
          ...state,
        };
      }
    }
  };
  
  export default movie;
  