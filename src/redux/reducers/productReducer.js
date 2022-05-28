import {
    ADD_PRODUCT,
    ADD_PRODUCT_FAIURE,
    ADD_PRODUCT_SUCCESS,
    GET_ALL_PRODUCTS,
    GET_ALL_PRODUCTS_FAILURE,
    GET_ALL_PRODUCTS_SUCCESS,
    DELETE_PRODUCT,
    DELETE_PRODUCT_FAILURE,
    DELETE_PRODUCT_SUCCESS,HANDLE_MODAL, GET_SINGLE_PRODUCT, GET_SINGLE_PRODUCT_SUCCESS, GET_SINGLE_PRODUCT_FAILURE, UPDATE_PRODUCT, UPDATE_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAILURE
  } from '../types.js';
  
  const initialState = {
    loading: false,
    products: [],
    error: null,
    product: null,
    isModalOpen: false,
    isEdited: false,
  };
  
  export default function productReducer(state = initialState, action) {
    switch (action.type) {

        case GET_ALL_PRODUCTS:
          return {...state,loading:true}
        case GET_SINGLE_PRODUCT:
          return {...state,loading:true}
        case GET_SINGLE_PRODUCT_SUCCESS:
          return {...state,product: action.payload}
        case GET_SINGLE_PRODUCT_FAILURE:
          return {...state,product: null,error: action.payload}
        case GET_ALL_PRODUCTS_SUCCESS:
            return {...state,loading:false,products:action.payload}
        case GET_ALL_PRODUCTS_FAILURE:
            return {...state,loading:false,products: [],error:action.payload}
        case ADD_PRODUCT:
        return {...state,loading: true};
        case ADD_PRODUCT_SUCCESS:
        return {...state,loading: false,error: null,products: [...state.products, action.payload]};
        case ADD_PRODUCT_FAIURE:
        return {...state,loading: false,error: action.payload.error};
        case DELETE_PRODUCT:
          return {...state,loading:true}
        case DELETE_PRODUCT_SUCCESS:
          return {...state,loading: false,products: state.products.filter(product => product.id !== action.payload)}
        case DELETE_PRODUCT_FAILURE:
          return {...state,loading: false,error: action.payload}

        case UPDATE_PRODUCT:
          return {...state,loading:true}
        case UPDATE_PRODUCT_SUCCESS:
          return {...state,product: action.payload,products: [...state.products,]}
        case UPDATE_PRODUCT_FAILURE:
          return {...state,error:action.payload}
        case HANDLE_MODAL:
          return {...state,isModalOpen: action.payload}
        
        default:
        return state;
    }
  }