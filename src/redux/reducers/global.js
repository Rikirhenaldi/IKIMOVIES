/* eslint-disable prettier/prettier */
const initialState = {
    carouselName: '',
    cameraActive: false,
    showMessage: false,
    messageProductType: 'success',
    titleMessage: '',
    messageProduct: '',
    messageProductDuration: 0,
  };
  
  const global = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CAROUSEL_NAME': {
        return {
          ...state,
          carouselName: action.payload,
        };
      }
      default: {
        return {
          ...state,
        };
      }
    }
  };
  
  export default global;
  