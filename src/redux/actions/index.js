import axios from "axios";
import { ADD_PRODUCT, ADD_PRODUCT_FAIURE, ADD_PRODUCT_SUCCESS, DELETE_PRODUCT, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_SUCCESS, GET_ALL_PRODUCTS, GET_ALL_PRODUCTS_FAILURE, GET_ALL_PRODUCTS_SUCCESS,GET_SINGLE_PRODUCT,GET_SINGLE_PRODUCT_FAILURE,GET_SINGLE_PRODUCT_SUCCESS,HANDLE_MODAL, UPDATE_PRODUCT, UPDATE_PRODUCT_FAILURE, UPDATE_PRODUCT_SUCCESS } from "../types";

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
        .then(response => {
            console.log("GONDERILEN VERI: "+response.data);
            dispatch(addProductSuccess(response.data))
        })
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
        .get("http://localhost:5000/api/Products/GetAllProductsWithCategory")
        .then((res) =>{
            dispatch(getAllProductsSuccess(res.data))
            console.log("current state: ",getState());
            // console.log(res.data);
        })
        .catch(err => {
            dispatch(getAllProductsFailure(err.message))
            console.log("current state: ",getState());
        })
    }
}

const deleteProductStarted = () =>{
    return {
        type: DELETE_PRODUCT,
        
    }
}
const deleteProductSuccess = (id) =>{
    return {
        type: DELETE_PRODUCT_SUCCESS,
        payload: id
    }
}

const deleteProductFailure = (error) =>{
    return {
        type: DELETE_PRODUCT_FAILURE,
        payload: error
    }
}

export const DeleteProduct = (id) => {
    return (dispatch,getState) => {
        dispatch(deleteProductStarted())
        console.log("current state: ",getState());
        axios
        .delete("http://localhost:5000/api/Products/"+id)
        .then((res) =>{
            dispatch(deleteProductSuccess(res.data.id))
            console.log("current state: ",getState());
            // console.log(res.data);
        })
        .catch(err => {
            dispatch(deleteProductFailure(err.message))
            console.log("current state: ",getState());
        })
    }
}

const handleModal = (state) => {
    return {
        type: HANDLE_MODAL,
        payload: state
    }
}
export const handleModalFunc = (state) => {
    return (dispatch) => {
      
        dispatch(handleModal(state === true ? false : true))
        console.log("State: "+state);
    }
}

const singleProductStarted = () =>{
    return {
        type: GET_SINGLE_PRODUCT
    }
}

const singleProductSuccess = (state) =>{
    console.log(state);
    return {
        type: GET_SINGLE_PRODUCT_SUCCESS,
        payload:state
    }
}
const singleProductFailure = (error) =>{
    console.log(error);
    return {
        type: GET_SINGLE_PRODUCT_FAILURE,
        payload:error
    }
}

export const getSingleProduct = (id) => {
    console.log("SINGLE PRODUCT: "+id);
    return (dispatch) =>{
        dispatch(singleProductStarted())
        axios.get("http://localhost:5000/api/Products/"+id)
        .then(response => {
            console.log(response.data);
            dispatch(singleProductSuccess(response.data))
        })
        .catch(error => {
            dispatch(singleProductFailure(error.message))
        })
    }
    
}

export const updateProductStarted = () =>{
    return {
        type: UPDATE_PRODUCT,
    }
}
export const updateProductSuccess = (product) =>{
    return {
        type: UPDATE_PRODUCT_SUCCESS,
        payload: product
    }
}
export const updateProductSFailure = (error) =>{
    return {
        type: UPDATE_PRODUCT_FAILURE,
        payload: error
    }
}

export const updateProduct = (id,data) =>{
    return (dispatch,getState) => {
        dispatch(updateProductStarted())
        console.log("Current State: "+getState());
        axios.put("http://localhost:5000/api/Products/"+id,data)
        .then(response =>  {
            console.log(response.data);
            console.log("BASARILI!!!");
            dispatch(updateProductSuccess(response.data))
            console.log("Current State: "+getState());

        })
        .catch(error => {
            updateProductStarted(error.message)
        })
    }
}
