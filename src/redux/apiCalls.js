
import { publicRequest } from "../requestMethods"
import { getProductFailure, getProductStart, getProductSuccess } from "./productSlice"
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