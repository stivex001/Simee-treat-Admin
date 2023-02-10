
import { publicRequest, userRequest } from "../requestMethods"
import { addProductFailure, addProductStart, addProductSuccess, deleteProductFailure, deleteProductStart, deleteProductSuccess, getProductFailure, getProductStart, getProductSuccess, updateProductFailure, updateProductStart, updateProductSuccess } from "./productSlice"
import { loginfailure, loginStart, loginSuccess } from "./userSlice"


export const login = async (dispatch, user) => {

    dispatch(loginStart())
    try {
       const res = await publicRequest.post("/users/login", user)
       dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginfailure())
    }
}

export const getProducts = async (dispatch) => {
    dispatch(getProductStart())
    try {
        const res = await publicRequest.get('/product')
        dispatch(getProductSuccess(res.data))
    } catch (error) {
        dispatch(getProductFailure())
    }
}

export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart())
    try {
        const res = await userRequest.delete(`/product/${id}`)
        dispatch(deleteProductSuccess(res.data))
    } catch (error) {
        dispatch(deleteProductFailure())
    }
}

export const updateProduct = async (id, product, dispatch) => {
    dispatch(updateProductStart())
    try {
        // const res = await userRequest.delete(`/product/${id}`)
        dispatch(updateProductSuccess({id, product}))
    } catch (error) {
        dispatch(updateProductFailure())
    }
}

export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart())
    try {
        const res = await userRequest.post(`/product`, {product})
        dispatch(addProductSuccess(res.data))
    } catch (error) {
        dispatch(addProductFailure())
    }
}