import axios from "axios";
import { ADD_PRODUCT, ADD_PRODUCT_FAIURE, ADD_PRODUCT_SUCCESS, GET_ALL_PRODUCTS, GET_ALL_PRODUCTS_FAILURE, GET_ALL_PRODUCTS_SUCCESS } from "../types";

const addProductSuccess = product => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
  });
  
  const addProductStarted = () => ({
    type: ADD_PRODUCT
  });
  
  const addProductFailure = error => ({
    type: ADD_PRODUCT_FAIURE,
    payload: {
      error
    }
  });

export const addProduct = (product) =>{
    return (dispatch,getState) => {
        dispatch(addProductStarted())
        console.log("current state: ",getState());
        axios
        .post("http://localhost:5000/api/Products",product)
        .then(res => dispatch(addProductSuccess(res.data)))
        .catch(err => dispatch(addProductFailure(err.message)))
    }
}

const getAllProductsStarted = () =>{
    return {
        type: GET_ALL_PRODUCTS,
        
    }
}
const getAllProductsSuccess = (products) =>{
    return {
        type: GET_ALL_PRODUCTS_SUCCESS,
        payload: products
    }
}

const getAllProductsFailure = (error) =>{
    return {
        type: GET_ALL_PRODUCTS_FAILURE,
        payload: error
    }
}

export const getAllProducts = () =>{
    return (dispatch,getState) => {
        dispatch(getAllProductsStarted())
        console.log("current state: ",getState());
        axios
        .get("http://localhost:5000/api/Products")
        .then((res) =>{
            console.log(res);
        })
        .catch(err => dispatch(getAllProductsFailure(err.message)))
    }
}


