import axios from "axios"
import * as actionTypes from '../constants/productConstant.js'

const url = "https://flipkartcloneserver.onrender.com"


//WE get this dispatch's access because of the middleware thunk
export const getProducts = () =>  async (dispatch) => {
    try {
        const { data } = await axios.get(`${url}/products`)
        dispatch({type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data})
    } catch (err) {
        dispatch({type: actionTypes.GET_PRODUCTS_FAIL, payload: err.message})
    }
}

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({type: actionTypes.GET_PRODUCT_DETAILS_REQUEST})
        const { data } = await axios.get(`${url}/products/${id}`)
        
        dispatch({type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data})
        
    } catch (error) {
        dispatch({type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: error.message})
        console.log(error);
    }
}