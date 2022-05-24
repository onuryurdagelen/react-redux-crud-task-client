import {
    ADD_PRODUCT,
    ADD_PRODUCT_FAIURE,
    ADD_PRODUCT_SUCCESS,
    GET_ALL_PRODUCTS,
    GET_ALL_PRODUCTS_FAILURE,
    GET_ALL_PRODUCTS_SUCCESS
  } from '../types.js';
  
  const initialState = {
    loading: false,
    products: [],
    error: null
  };
  
  export default function productReducer(state = initialState, action) {
    switch (action.type) {

        case GET_ALL_PRODUCTS:
            return {...state,loading:true}
        case GET_ALL_PRODUCTS_SUCCESS:
            return {...state,loading:false,products:action.payload}
        case GET_ALL_PRODUCTS_FAILURE:
            return {...state,loading:false,error:action.payload}
      case ADD_PRODUCT:
        return {
          ...state,
          loading: true
        };
      case ADD_PRODUCT_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          todos: [...state.todos, action.payload]
        };
      case ADD_PRODUCT_FAIURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error
        };
      default:
        return state;
    }
  }