const initialState = {
  isLoading: false,
  countries: [],
  message:'',
};

export const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'GET_COUNTRIES_START':
      return {...state, isLoading: true,message:''};
      break;
    case 'GET_COUNTRIES_SUCCESS':
      return {...state, countries: action.payload, isLoading: false};
      break;
    case 'GET_COUNTRIES_ERROR':
      return {...state, message: action.payload, isLoading: false};
      break;
    default:
      return state;
      break;
  }
  return state;
};
